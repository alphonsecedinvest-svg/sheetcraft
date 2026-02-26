'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import { Check, X, Crown } from 'lucide-react';

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

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check size={18} className="inline text-sc-green" />
    ) : (
      <X size={18} className="inline text-sc-red" />
    );
  }
  return <span className="text-sm">{value}</span>;
}

/* ─── Mobile: stacked cards per feature ─── */
function MobileComparison({ rows, softwareLabel }: { rows: ComparisonRow[]; softwareLabel: string }) {
  const competitors = [
    { key: 'freeTemplate' as const, label: 'Free Templates' },
    { key: 'buildYourOwn' as const, label: 'Build Your Own' },
    { key: 'software' as const, label: softwareLabel },
  ];

  return (
    <div className="flex flex-col gap-3 lg:hidden">
      {rows.map((row, i) => (
        <FadeIn key={row.feature} delay={i * 0.04}>
          <div className="rounded-xl border border-sc-border bg-white overflow-hidden">
            {/* Feature name header */}
            <div className="px-4 py-2.5 bg-sc-bg-alt border-b border-sc-border/50">
              <span className="font-semibold text-sm text-sc-text">{row.feature}</span>
            </div>

            {/* Competitor rows */}
            <div className="divide-y divide-sc-border/30">
              {competitors.map((comp) => (
                <div key={comp.key} className="flex items-center justify-between px-4 py-2.5">
                  <span className="text-xs text-sc-text-muted">{comp.label}</span>
                  <span className="text-sc-text-muted">
                    <CellValue value={row[comp.key]} />
                  </span>
                </div>
              ))}

              {/* SheetCraft row — highlighted */}
              <div className="flex items-center justify-between px-4 py-3 bg-sc-blue/[0.06]">
                <span className="text-xs font-semibold text-sc-blue flex items-center gap-1.5">
                  <Crown size={12} />
                  SheetCraft
                </span>
                <span className="font-medium text-sc-text">
                  <CellValue value={row.sheetcraft} />
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

/* ─── Desktop: original table (unchanged) ─── */
function DesktopComparison({ rows, softwareLabel }: { rows: ComparisonRow[]; softwareLabel: string }) {
  return (
    <div className="hidden lg:block">
      <table className="w-full">
        <thead>
          <tr className="border-b border-sc-border">
            <th className="text-left py-3 px-4 font-semibold text-sm text-sc-text-muted" />
            <th className="text-center py-3 px-4 font-semibold text-sm text-sc-text-muted/60">Free Templates</th>
            <th className="text-center py-3 px-4 font-semibold text-sm text-sc-text-muted/60">Build Your Own</th>
            <th className="text-center py-3 px-4 font-semibold text-sm text-sc-text-muted/60">{softwareLabel}</th>
            <th className="text-center py-3 px-4 font-semibold text-sm text-sc-blue">SheetCraft</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.feature} className={`border-b border-sc-border/50 ${i % 2 === 1 ? 'bg-sc-bg/50' : ''}`}>
              <td className="py-3 px-4 text-sm font-medium text-sc-text">{row.feature}</td>
              <td className="text-center py-3 px-4 text-sc-text-muted"><CellValue value={row.freeTemplate} /></td>
              <td className="text-center py-3 px-4 text-sc-text-muted"><CellValue value={row.buildYourOwn} /></td>
              <td className="text-center py-3 px-4 text-sc-text-muted"><CellValue value={row.software} /></td>
              <td className="text-center py-3 px-4 text-sc-text font-medium bg-sc-blue/5"><CellValue value={row.sheetcraft} /></td>
            </tr>
          ))}
        </tbody>
      </table>
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

        <FadeIn delay={0.1}>
          <DesktopComparison rows={rows} softwareLabel={softwareLabel} />
        </FadeIn>

        <MobileComparison rows={rows} softwareLabel={softwareLabel} />
      </Container>
    </section>
  );
}
