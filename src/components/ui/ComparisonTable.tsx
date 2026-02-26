'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import { Check, X, Crown, Sparkles } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  freeTemplate: string | boolean;
  buildYourOwn: string | boolean;
  software: string | boolean;
  sheetcraft: string | boolean;
}

const constructionRows: ComparisonRow[] = [
  { feature: 'Cost', freeTemplate: '$0', buildYourOwn: '$0 (+ your time)', software: '$500+/month', sheetcraft: '$29–$49 one-time' },
  { feature: 'Setup time', freeTemplate: '2–3 hours fixing formulas', buildYourOwn: '20–40 hours', software: 'Weeks of onboarding', sheetcraft: '5 minutes' },
  { feature: 'Change order tracking', freeTemplate: false, buildYourOwn: false, software: true, sheetcraft: true },
  { feature: 'Dashboard & charts', freeTemplate: false, buildYourOwn: false, software: true, sheetcraft: true },
  { feature: 'Works in Excel / Sheets', freeTemplate: true, buildYourOwn: true, software: false, sheetcraft: true },
  { feature: 'Tested on real projects', freeTemplate: false, buildYourOwn: false, software: true, sheetcraft: true },
  { feature: 'No subscription required', freeTemplate: true, buildYourOwn: true, software: false, sheetcraft: true },
];

const realEstateRows: ComparisonRow[] = [
  { feature: 'Cost', freeTemplate: '$0', buildYourOwn: '$0 (+ your time)', software: '$129+/month', sheetcraft: '$29–$49 one-time' },
  { feature: 'Setup time', freeTemplate: '2–3 hours fixing formulas', buildYourOwn: '20–40 hours', software: 'Weeks of onboarding', sheetcraft: '5 minutes' },
  { feature: '10-year projections', freeTemplate: false, buildYourOwn: false, software: true, sheetcraft: true },
  { feature: 'Multi-deal comparison', freeTemplate: false, buildYourOwn: false, software: true, sheetcraft: true },
  { feature: 'Works in Excel / Sheets', freeTemplate: true, buildYourOwn: true, software: false, sheetcraft: true },
  { feature: 'Sensitivity analysis', freeTemplate: false, buildYourOwn: false, software: true, sheetcraft: true },
  { feature: 'No subscription required', freeTemplate: true, buildYourOwn: true, software: false, sheetcraft: true },
];

function CellValue({ value, highlighted }: { value: string | boolean; highlighted?: boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        <Check size={18} className={`inline ${highlighted ? 'text-sc-green drop-shadow-[0_0_6px_rgba(5,150,105,0.4)]' : 'text-sc-green'}`} strokeWidth={highlighted ? 3 : 2} />
      </motion.span>
    ) : (
      <X size={18} className="inline text-sc-red/40" />
    );
  }
  return <span className={`text-sm ${highlighted ? 'font-semibold text-sc-text' : ''}`}>{value}</span>;
}

/* ─── Animated card for mobile ─── */
function MobileCard({ row, index, softwareLabel }: { row: ComparisonRow; index: number; softwareLabel: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const competitors = [
    { key: 'freeTemplate' as const, label: 'Free Templates' },
    { key: 'buildYourOwn' as const, label: 'Build Your Own' },
    { key: 'software' as const, label: softwareLabel },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="rounded-2xl border border-sc-border/60 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Feature name header with accent bar */}
      <div className="relative px-4 py-3 bg-gradient-to-r from-sc-bg-alt to-white border-b border-sc-border/40">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sc-blue to-sc-blue/30 rounded-r-full" />
        <span className="font-semibold text-[15px] text-sc-text">{row.feature}</span>
      </div>

      {/* Competitor rows with subtle styling */}
      <div className="divide-y divide-sc-border/20">
        {competitors.map((comp) => (
          <div key={comp.key} className="flex items-center justify-between px-4 py-2.5 hover:bg-sc-bg-alt/30 transition-colors">
            <span className="text-xs text-sc-text-muted/70">{comp.label}</span>
            <span className="text-sc-text-muted">
              <CellValue value={row[comp.key]} />
            </span>
          </div>
        ))}

        {/* SheetCraft row — winner highlight with glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.06 + 0.3 }}
          className="relative flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-sc-blue/[0.08] via-sc-blue/[0.04] to-transparent"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sc-blue/[0.06] to-transparent opacity-0 animate-pulse" style={{ animationDuration: '3s' }} />
          <span className="relative text-xs font-bold text-sc-blue flex items-center gap-1.5 tracking-wide uppercase">
            <Crown size={13} className="text-sc-amber" />
            SheetCraft
          </span>
          <span className="relative font-semibold text-sc-text">
            <CellValue value={row.sheetcraft} highlighted />
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function MobileComparison({ rows, softwareLabel }: { rows: ComparisonRow[]; softwareLabel: string }) {
  return (
    <div className="flex flex-col gap-3.5 lg:hidden">
      {rows.map((row, i) => (
        <MobileCard key={row.feature} row={row} index={i} softwareLabel={softwareLabel} />
      ))}
    </div>
  );
}

/* ─── Desktop: animated table rows ─── */
function DesktopRow({ row, index, softwareLabel }: { row: ComparisonRow; index: number; softwareLabel?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <motion.tr
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className={`border-b border-sc-border/50 ${index % 2 === 1 ? 'bg-sc-bg/50' : ''} hover:bg-sc-blue/[0.02] transition-colors duration-200`}
    >
      <td className="py-3 px-4 text-sm font-medium text-sc-text">{row.feature}</td>
      <td className="text-center py-3 px-4 text-sc-text-muted"><CellValue value={row.freeTemplate} /></td>
      <td className="text-center py-3 px-4 text-sc-text-muted"><CellValue value={row.buildYourOwn} /></td>
      <td className="text-center py-3 px-4 text-sc-text-muted"><CellValue value={row.software} /></td>
      <td className="text-center py-3 px-4 text-sc-text font-medium bg-sc-blue/[0.04]"><CellValue value={row.sheetcraft} highlighted /></td>
    </motion.tr>
  );
}

function DesktopComparison({ rows, softwareLabel }: { rows: ComparisonRow[]; softwareLabel: string }) {
  return (
    <div className="hidden lg:block">
      <div className="rounded-2xl border border-sc-border/60 overflow-hidden bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-sc-border bg-sc-bg-alt/60">
              <th className="text-left py-3.5 px-4 font-semibold text-sm text-sc-text-muted" />
              <th className="text-center py-3.5 px-4 font-semibold text-sm text-sc-text-muted/60">Free Templates</th>
              <th className="text-center py-3.5 px-4 font-semibold text-sm text-sc-text-muted/60">Build Your Own</th>
              <th className="text-center py-3.5 px-4 font-semibold text-sm text-sc-text-muted/60">{softwareLabel}</th>
              <th className="text-center py-3.5 px-4 font-bold text-sm text-sc-blue relative">
                <span className="flex items-center justify-center gap-1.5">
                  <Sparkles size={14} className="text-sc-amber" />
                  SheetCraft
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <DesktopRow key={row.feature} row={row} index={i} softwareLabel={softwareLabel} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface ComparisonTableProps {
  category?: 'construction' | 'real-estate';
}

export default function ComparisonTable({ category = 'construction' }: ComparisonTableProps) {
  const rows = category === 'construction' ? constructionRows : realEstateRows;
  const softwareLabel = category === 'construction' ? 'PM Software' : 'RE Software';

  return (
    <section className="py-12 lg:py-16 bg-sc-bg-alt">
      <Container>
        <FadeIn>
          <h2 className="font-semibold text-2xl lg:text-[32px] lg:leading-[40px] tracking-[-0.02em] text-center mb-3 gradient-text">
            How does this compare?
          </h2>
          <p className="text-center text-sc-text-muted text-sm max-w-xl mx-auto mb-10">
            You could build your own spreadsheet. You could use a free template. You could pay hundreds per month for software. Or you could be up and running in 5 minutes.
          </p>
        </FadeIn>

        <DesktopComparison rows={rows} softwareLabel={softwareLabel} />
        <MobileComparison rows={rows} softwareLabel={softwareLabel} />
      </Container>
    </section>
  );
}
