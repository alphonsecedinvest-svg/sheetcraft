'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import { Check, X } from 'lucide-react';

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
      <Check size={18} className="inline text-green" />
    ) : (
      <X size={18} className="inline text-red-400" />
    );
  }
  return <span className="text-sm">{value}</span>;
}

interface ComparisonTableProps {
  category?: 'construction' | 'real-estate';
}

export default function ComparisonTable({ category = 'construction' }: ComparisonTableProps) {
  const rows = category === 'construction' ? constructionRows : realEstateRows;
  const softwareLabel = category === 'construction' ? 'PM Software' : 'RE Software';

  return (
    <section className="py-12 lg:py-16 bg-cloud">
      <Container>
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-3">
            How does this compare?
          </h2>
          <p className="text-center text-slate text-sm max-w-xl mx-auto mb-10">
            You could build your own spreadsheet. You could use a free template. You could pay hundreds per month for software. Or you could be up and running in 5 minutes.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-navy/10">
                  <th className="text-left py-3 px-4 font-heading font-semibold text-sm text-slate" />
                  <th className="text-center py-3 px-4 font-heading font-semibold text-sm text-slate/60">Free Templates</th>
                  <th className="text-center py-3 px-4 font-heading font-semibold text-sm text-slate/60">Build Your Own</th>
                  <th className="text-center py-3 px-4 font-heading font-semibold text-sm text-slate/60">{softwareLabel}</th>
                  <th className="text-center py-3 px-4 font-heading font-semibold text-sm text-amber">SheetCraft ✓</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature} className="border-b border-navy/5">
                    <td className="py-3 px-4 text-sm font-medium text-navy">{row.feature}</td>
                    <td className="text-center py-3 px-4 text-slate"><CellValue value={row.freeTemplate} /></td>
                    <td className="text-center py-3 px-4 text-slate"><CellValue value={row.buildYourOwn} /></td>
                    <td className="text-center py-3 px-4 text-slate"><CellValue value={row.software} /></td>
                    <td className="text-center py-3 px-4 text-navy font-medium bg-amber/5"><CellValue value={row.sheetcraft} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
