'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

const rows = [
  { label: 'Materials', budget: 125000, actual: 118500 },
  { label: 'Labor', budget: 85000, actual: 82200 },
  { label: 'Equipment', budget: 45000, actual: 47100 },
  { label: 'Permits', budget: 12000, actual: 11800 },
];

const total = {
  budget: rows.reduce((s, r) => s + r.budget, 0),
  actual: rows.reduce((s, r) => s + r.actual, 0),
};

function fmt(n: number) {
  return '$' + Math.abs(n).toLocaleString('en-US');
}

function useCountUp(target: number, duration: number, delay: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const timeout = setTimeout(() => {
      const start = performance.now();
      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, delay);

    return () => clearTimeout(timeout);
  }, [target, duration, delay, active]);

  return value;
}

function CountCell({ value, delay, active, negative }: { value: number; delay: number; active: boolean; negative?: boolean }) {
  const count = useCountUp(Math.abs(value), 1500, delay, active);
  const prefix = negative ? (value < 0 ? '-$' : '$') : '$';

  return (
    <td className={`border border-sc-border p-1.5 text-right tabular-nums ${
      negative ? (value < 0 ? 'text-sc-red' : 'text-sc-green') : 'text-sc-text'
    }`}>
      {prefix}{count.toLocaleString('en-US')}
    </td>
  );
}

const maxBudget = Math.max(...rows.map((r) => r.budget));

export default function SpreadsheetMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="p-2.5 sm:p-3 bg-white select-none">
      {/* Toolbar */}
      <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-sc-border">
        <div className="w-2 h-2 rounded-full bg-sc-green/60" />
        <span className="text-[9px] sm:text-[10px] font-mono text-sc-text-muted tracking-tight">
          project_budget.xlsx
        </span>
      </div>

      {/* Grid */}
      <table className="w-full border-collapse text-[9px] sm:text-[11px] font-mono">
        <thead>
          <tr className="bg-sc-bg-alt">
            <th className="border border-sc-border p-1.5 text-left font-semibold text-sc-text-muted w-[30%]">
              Category
            </th>
            <th className="border border-sc-border p-1.5 text-right font-semibold text-sc-text-muted">
              Budget
            </th>
            <th className="border border-sc-border p-1.5 text-right font-semibold text-sc-text-muted">
              Actual
            </th>
            <th className="border border-sc-border p-1.5 text-right font-semibold text-sc-text-muted">
              Variance
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const variance = row.budget - row.actual;
            return (
              <motion.tr
                key={row.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
              >
                <td className="border border-sc-border p-1.5 text-sc-text font-medium">
                  {row.label}
                </td>
                <CountCell value={row.budget} delay={400 + i * 120} active={inView} />
                <CountCell value={row.actual} delay={500 + i * 120} active={inView} />
                <CountCell value={variance} delay={600 + i * 120} active={inView} negative />
              </motion.tr>
            );
          })}
          {/* Total row */}
          <motion.tr
            className="bg-sc-bg-alt font-semibold"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <td className="border border-sc-border p-1.5 text-sc-text">Total</td>
            <CountCell value={total.budget} delay={1000} active={inView} />
            <CountCell value={total.actual} delay={1100} active={inView} />
            <CountCell value={total.budget - total.actual} delay={1200} active={inView} negative />
          </motion.tr>
        </tbody>
      </table>

      {/* Mini bar chart */}
      <div className="mt-3 flex items-end gap-1.5 h-10 sm:h-12 px-1">
        {rows.map((row, i) => (
          <div key={row.label} className="flex-1 flex items-end gap-[2px] h-full">
            <motion.div
              className="flex-1 bg-sc-blue/20 rounded-t-sm"
              initial={{ height: 0 }}
              animate={inView ? { height: `${(row.budget / maxBudget) * 100}%` } : {}}
              transition={{ duration: 0.7, delay: 1.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className="flex-1 bg-sc-blue rounded-t-sm"
              initial={{ height: 0 }}
              animate={inView ? { height: `${(row.actual / maxBudget) * 100}%` } : {}}
              transition={{ duration: 0.7, delay: 1.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-3 mt-1.5 px-1">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-sm bg-sc-blue/20" />
          <span className="text-[8px] sm:text-[9px] text-sc-text-muted">Budget</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-sm bg-sc-blue" />
          <span className="text-[8px] sm:text-[9px] text-sc-text-muted">Actual</span>
        </div>
      </div>
    </div>
  );
}
