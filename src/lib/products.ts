export interface Product {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'construction' | 'real-estate';
  rating: number;
  reviewCount: number;
  features: string[];
  whoIsThisFor: { title: string; description: string }[];
  whatsIncluded: string[];
  faq: { question: string; answer: string }[];
  checkoutUrl: string;
}

export const products: Product[] = [
  {
    slug: 'construction-budget-tracker',
    name: 'Construction Budget Tracker',
    tagline: 'Every dollar. Every line item. Every change order. One spreadsheet.',
    shortDescription: 'Track every line item, change order, and payment across your entire project. Know exactly where your budget stands — at a glance.',
    description: `If you've ever finished a project and realized you have no idea where $30,000 went, this template exists because of you.

The Construction Budget Tracker is a complete financial command center for residential and commercial construction projects. It was designed by a general contractor who spent 15 years managing budgets in messy, cobbled-together spreadsheets — and finally built the one he wished he'd had on day one.

Here's the reality of construction budgets: they change. Constantly. A client wants to upgrade the countertops. The framing lumber price jumped 12% since your estimate. Your electrician's invoice doesn't match the original bid. The free templates you find online handle none of this.

This template handles the full lifecycle of your project budget. Start with your original estimate broken down by CSI division or your own custom categories. As the project progresses, log actual costs against each line item and watch the variance column update in real time. When change orders come in — and they always come in — add them with a single entry and see their impact ripple through your entire budget instantly.

The dashboard tab gives you a visual snapshot of your project's financial health. Budget vs. actual by category. Percentage complete vs. percentage spent. Projected final cost based on current burn rate.

For contractors who bill on a cost-plus basis, the markup calculator automatically applies your agreed percentage and generates client-facing summaries. For fixed-price contractors, the margin tracker shows your real profit in real time.

The payment tracking tab logs every invoice from every subcontractor and supplier. Filter by vendor, by status, by date. Know exactly who's been paid, who's pending, and what's due this week.

This isn't a template you'll outgrow. We've had users track projects from $50K kitchen remodels to $8M commercial builds.`,
    price: 49,
    category: 'construction',
    rating: 4.9,
    reviewCount: 47,
    features: [
      'Original budget vs. actual cost tracking with automatic variance calculations',
      'Change order log with budget impact ripple-through',
      'Dashboard with visual budget health indicators (charts + conditional formatting)',
      'Cost-plus markup calculator with client-facing summary export',
      'Fixed-price margin tracker showing real-time profit',
      'Payment tracker by vendor, status, and date',
      'CSI MasterFormat division categories (fully customizable)',
      'Contingency tracking with automatic drawdown',
      'Cash flow projection based on payment schedule',
      'Print-ready summary sheets for lenders and clients',
    ],
    whoIsThisFor: [
      { title: 'General contractors', description: 'managing residential or commercial projects ($50K–$10M+)' },
      { title: 'Remodeling contractors', description: 'tracking budgets across multiple active jobs' },
      { title: 'Owner-builders', description: 'managing their own construction project' },
      { title: 'Construction managers', description: 'who need professional budget reporting for clients and lenders' },
      { title: 'Subcontractors', description: 'who want to track their own job costs and profitability' },
    ],
    whatsIncluded: [
      'Excel file (.xlsx) — compatible with Excel 2016+, Microsoft 365',
      'Google Sheets version — optimized for Sheets, not just converted',
      '5-minute video walkthrough covering setup and daily use',
      'Sample data pre-loaded so you can see it in action before clearing and entering your own',
      'Quick-start guide (PDF) with tips for customization',
      'Lifetime updates — every improvement, delivered free',
    ],
    faq: [
      { question: 'Can I track multiple projects?', answer: 'Yes. Duplicate the template for each project. There are no per-project limits.' },
      { question: 'Does it handle cost-plus and fixed-price contracts?', answer: 'Yes. It includes both a markup calculator for cost-plus and a margin tracker for fixed-price contracts.' },
      { question: 'How many line items can I track?', answer: 'There is no practical limit. The template scales from small remodels to $10M+ commercial projects.' },
    ],
    checkoutUrl: '#',
  },
  {
    slug: 'rental-property-analyzer',
    name: 'Rental Property Analyzer',
    tagline: 'Run the numbers on any deal in 15 minutes. Know exactly what you\'re buying.',
    shortDescription: 'Run the numbers on any rental deal in minutes. Cash flow, cap rate, cash-on-cash return, and 10-year projections — all automated.',
    description: `Every rental property looks like a good deal until you actually run the numbers. The listing says $1,400/month rent on a $180,000 property — sounds great, right? Until you factor in vacancy, property management, maintenance, insurance, property taxes, and that water heater that's on borrowed time. Suddenly your "8% return" is really 3.2%.

The Rental Property Analyzer forces you to account for everything. Not because we think you're careless — but because the deals that lose money are the ones where you forgot to include a line item.

Start with the deal summary tab. Enter the purchase price, down payment, loan terms, and expected rent. The template immediately calculates your monthly cash flow, annual cash-on-cash return, cap rate, and gross rent multiplier.

The 10-year projection tab models rent growth, expense growth, property appreciation, and mortgage paydown over a decade. You'll see your total return including cash flow, equity buildup, and appreciation — giving you the complete picture, not just year-one numbers.

For investors using financing, the mortgage analysis tab shows your amortization schedule, total interest paid, and your equity position at any point in the loan. Compare up to three different loan scenarios side by side.

The comparison tab lets you analyze up to five properties side by side. When you're choosing between deals, having them in a single view with identical metrics makes the decision obvious.`,
    price: 49,
    category: 'real-estate',
    rating: 4.9,
    reviewCount: 63,
    features: [
      'One-page deal summary with cash flow, cap rate, cash-on-cash, and GRM',
      'Detailed operating expense breakdown with NOI calculation',
      '10-year projection with rent growth, expense growth, and appreciation modeling',
      'Mortgage analysis with amortization schedule and equity tracking',
      'Side-by-side comparison for up to 5 properties',
      'Vacancy and maintenance reserve modeling with adjustable percentages',
      'Debt service coverage ratio (DSCR) calculation for lender-ready analysis',
      'Tax benefit estimator (depreciation, mortgage interest deduction)',
      'Break-even analysis showing minimum rent needed',
      'Print-ready summary for lender or partner presentations',
    ],
    whoIsThisFor: [
      { title: 'New investors', description: 'analyzing their first rental property purchase' },
      { title: 'Experienced landlords', description: 'evaluating additions to their portfolio' },
      { title: 'Real estate agents', description: 'who want to provide data-driven analysis to investor clients' },
      { title: 'House hackers', description: 'running the numbers on owner-occupied multifamily' },
      { title: 'Anyone considering a rental property', description: 'who wants to make decisions with real data, not gut feelings' },
    ],
    whatsIncluded: [
      'Excel file (.xlsx) — compatible with Excel 2016+, Microsoft 365',
      'Google Sheets version — optimized for Sheets',
      '5-minute video walkthrough',
      'Sample deal pre-loaded with realistic numbers',
      'Quick-start guide (PDF)',
      'Lifetime updates',
    ],
    faq: [
      { question: 'Can I compare multiple properties?', answer: 'Yes. The comparison tab lets you analyze up to 5 properties side by side with identical metrics.' },
      { question: 'Does it account for taxes and depreciation?', answer: 'Yes. The tax benefit estimator includes depreciation schedules and mortgage interest deduction calculations.' },
      { question: 'Can I model different loan scenarios?', answer: 'Yes. Compare up to three different financing options side by side — conventional, 15-year, adjustable rate, etc.' },
    ],
    checkoutUrl: '#',
  },
  {
    slug: 'contractor-estimate-template',
    name: 'Project Timeline & Gantt Chart',
    tagline: 'See your entire project schedule on one screen. Keep every trade on track.',
    shortDescription: 'Map out every phase of your build with a professional Gantt chart. Track milestones, flag delays, and keep subs on schedule.',
    description: `If you've ever had a flooring crew show up before the drywall was finished, you know what happens when your schedule lives in your head instead of on paper.

The Project Timeline & Gantt Chart template gives you a professional, visual project schedule that takes five minutes to set up and saves you hours of coordination headaches for the life of your project.

This template makes schedule adjustments simple. Enter your tasks, assign start and end dates, and the Gantt chart builds itself automatically. Color-coded bars show each phase at a glance. When a task slips, update the date and immediately see how it impacts downstream work.

The milestone tracker highlights your critical dates — permit approvals, inspections, client walk-throughs, certificate of occupancy. The dependency mapping feature lets you link tasks that must happen in sequence. When Task A slips by three days, every dependent task shifts automatically.

For contractors running multiple projects simultaneously, the multi-project view shows all active jobs on a single timeline.`,
    price: 29,
    category: 'construction',
    rating: 4.8,
    reviewCount: 38,
    features: [
      'Auto-generating Gantt chart from task dates (no manual drawing)',
      'Color-coded phases and categories',
      'Milestone tracker with visual highlights',
      'Task dependency mapping with automatic cascade',
      'Multi-project view for contractors running parallel jobs',
      'Percentage complete tracking per task',
      'Critical path highlighting',
      'Resource/crew assignment column',
      'Print-ready timeline for client presentations and wall display',
      'Weekly view and monthly view toggle',
    ],
    whoIsThisFor: [
      { title: 'General contractors', description: 'scheduling residential or commercial builds' },
      { title: 'Remodeling contractors', description: 'coordinating multiple trades on tight timelines' },
      { title: 'Project managers', description: 'who need a visual schedule without enterprise PM software' },
      { title: 'Owner-builders', description: 'managing their own construction project timeline' },
      { title: 'Property developers', description: 'tracking multiple projects in different phases' },
    ],
    whatsIncluded: [
      'Excel file (.xlsx) — compatible with Excel 2016+, Microsoft 365',
      'Google Sheets version — optimized for Sheets',
      '5-minute video walkthrough',
      'Sample project schedule pre-loaded',
      'Quick-start guide (PDF)',
      'Lifetime updates',
    ],
    faq: [
      { question: 'Can I track multiple projects?', answer: 'Yes. The multi-project view shows all active jobs on a single timeline.' },
      { question: 'Does it handle task dependencies?', answer: 'Yes. Link tasks in sequence and when one slips, all dependent tasks shift automatically.' },
      { question: 'Can I print the Gantt chart?', answer: 'Yes. The template includes print-ready layouts for client presentations and wall display.' },
    ],
    checkoutUrl: '#',
  },
  {
    slug: 'flip-brrrr-calculator',
    name: 'BRRRR Deal Calculator',
    tagline: 'Buy. Rehab. Rent. Refinance. Repeat. Know your numbers before you commit.',
    shortDescription: 'Evaluate Buy-Rehab-Rent-Refinance-Repeat deals with full refinance modeling. See your equity position, cash recaptured, and long-term ROI.',
    description: `The BRRRR strategy is one of the most powerful wealth-building methods in real estate. It's also one of the easiest to screw up. The difference between a BRRRR deal that recycles 90% of your capital and one that traps $40K of dead equity comes down to one thing: running accurate numbers before you buy.

The BRRRR Deal Calculator walks you through every phase of the strategy and shows you exactly where your money goes, how much comes back, and what your long-term return looks like.

Start with the acquisition tab. Enter your purchase price, closing costs, and financing terms. The template handles hard money or private lending with points and higher interest rates.

The rehab tab tracks your renovation budget line by line — or use quick-entry mode with category totals. The template tracks your total all-in cost (purchase + rehab + holding costs during renovation).

The refinance tab shows how much cash you pull out at refinance, how much capital remains in the deal, and your new monthly payment. This is the make-or-break calculation for any BRRRR deal.

The deal summary dashboard brings it all together. Total capital invested. Capital recaptured at refinance. Cash left in the deal. Annual cash flow. Cash-on-cash return on remaining capital. Equity position.`,
    price: 49,
    category: 'real-estate',
    rating: 4.9,
    reviewCount: 41,
    features: [
      'Acquisition modeling with hard money / private lending support (points, short-term rates)',
      'Detailed rehab budget with line-item and quick-entry modes',
      'Holding cost calculator during rehab phase (loan payments, insurance, utilities, taxes)',
      'Stabilized rent and operating expense analysis',
      'Refinance calculator with ARV, LTV, and cash-out modeling',
      'Capital recapture and cash-left-in-deal calculation',
      'Cash-on-cash return on remaining invested capital',
      '10-year projection with rent growth and mortgage paydown',
      'Side-by-side deal comparison (up to 3 properties)',
      'Deal summary dashboard with all key metrics on one screen',
    ],
    whoIsThisFor: [
      { title: 'BRRRR investors', description: 'at any experience level — from first deal to fiftieth' },
      { title: 'Real estate investors', description: 'evaluating whether a property works as a BRRRR vs. traditional buy-and-hold' },
      { title: 'Private lenders', description: 'who want to verify the numbers on a deal before funding it' },
      { title: 'Real estate agents', description: 'advising investor clients on BRRRR opportunities' },
      { title: 'Anyone curious about BRRRR', description: 'who wants to model a deal with real numbers before committing capital' },
    ],
    whatsIncluded: [
      'Excel file (.xlsx) — compatible with Excel 2016+, Microsoft 365',
      'Google Sheets version — optimized for Sheets',
      '5-minute video walkthrough',
      'Sample BRRRR deal pre-loaded with realistic numbers',
      'Quick-start guide (PDF)',
      'Lifetime updates',
    ],
    faq: [
      { question: 'Does it handle hard money loans?', answer: 'Yes. The acquisition tab supports hard money and private lending with points, origination fees, and short-term interest rates.' },
      { question: 'Can I compare multiple BRRRR deals?', answer: 'Yes. The comparison tab lets you evaluate up to 3 deals side by side.' },
      { question: 'Does it include post-refinance cash flow analysis?', answer: 'Yes. The template models your stabilized rental income and expenses after refinance, showing your true long-term returns.' },
    ],
    checkoutUrl: '#',
  },
  {
    slug: 'real-estate-development-pro-forma',
    name: 'Fix & Flip Analyzer',
    tagline: 'Model your flip from purchase to profit. No surprises at closing.',
    shortDescription: 'Model your flip from purchase to sale. Rehab costs, holding costs, financing, and profit — all in one clean dashboard.',
    description: `Flipping houses looks simple on TV. Buy low, renovate, sell high. In reality, the difference between a profitable flip and a money pit is in the details — the holding costs that stack up during a 4-month rehab, the closing costs on both the buy and sell side, the financing costs on your hard money loan, and the contractor overruns that somehow always happen in month three.

The Fix & Flip Analyzer was built to eliminate surprises. It models every cost from acquisition to sale so you know your projected profit before you make an offer — not after you've already committed.

The rehab budget tab breaks renovation into 25+ categories — demo, framing, electrical, plumbing, HVAC, roofing, flooring, paint, kitchen, baths, landscaping, and more.

The holding costs tab calculates what the property costs you every month you own it. A flip that takes six months instead of three doesn't just delay your profit — it actively eats into it.

The sensitivity analysis tab shows how your profit changes if the ARV comes in 5% or 10% lower than expected, or if the rehab runs 10% or 20% over budget. This is how you stress-test a deal before you buy.`,
    price: 49,
    category: 'real-estate',
    rating: 4.8,
    reviewCount: 35,
    features: [
      'Acquisition modeling with support for hard money, private money, conventional, and cash',
      'Detailed rehab budget with 25+ construction categories',
      'Holding cost calculator (monthly burn rate during rehab and listing)',
      'Sale projection with ARV, agent fees, closing costs, and transfer taxes',
      'Net profit and ROI calculator (total and annualized)',
      'Sensitivity analysis: profit impact of ARV miss and rehab overruns',
      'Monthly cash flow timeline from purchase to sale',
      'Draw schedule tracker for hard money loan disbursements',
      'Comparable sales log to support your ARV estimate',
      'Print-ready deal summary for lenders and partners',
    ],
    whoIsThisFor: [
      { title: 'Fix & flip investors', description: 'evaluating potential deals before making offers' },
      { title: 'New flippers', description: 'who want a structured framework for their first project' },
      { title: 'Experienced flippers', description: 'who want to stop using back-of-napkin math' },
      { title: 'Hard money lenders', description: 'reviewing deal packages from borrowers' },
      { title: 'Real estate wholesalers', description: 'presenting deal analysis to flip buyers' },
    ],
    whatsIncluded: [
      'Excel file (.xlsx) — compatible with Excel 2016+, Microsoft 365',
      'Google Sheets version — optimized for Sheets',
      '5-minute video walkthrough',
      'Sample flip deal pre-loaded with realistic numbers',
      'Quick-start guide (PDF)',
      'Lifetime updates',
    ],
    faq: [
      { question: 'Does it include a sensitivity analysis?', answer: 'Yes. See how your profit changes if ARV drops 5-10% or rehab costs increase 10-20%.' },
      { question: 'Can it handle different financing types?', answer: 'Yes. It supports hard money, private money, conventional loans, and cash purchases.' },
      { question: 'Does it track holding costs?', answer: 'Yes. Monthly holding costs including loan payments, taxes, insurance, and utilities are calculated automatically.' },
    ],
    checkoutUrl: '#',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: 'construction' | 'real-estate' | 'all'): Product[] {
  if (category === 'all') return products;
  return products.filter((p) => p.category === category);
}
