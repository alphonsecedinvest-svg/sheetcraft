export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  initials: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  benefitLine: string;
  heroHeadline: string;
  shortDescription: string;
  problemSection: string;
  solutionSection: string;
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
  testimonials: Testimonial[];
  objectionPreemption: { question: string; answer: string }[];
  checkoutUrl: string;
}

export const products: Product[] = [
  {
    slug: 'construction-budget-tracker',
    name: 'Construction Budget Tracker',
    tagline: 'Track every dollar across your entire project. Catch the $23K mistake before it costs you.',
    benefitLine: 'Contractors using this template catch budget overruns 3x faster.',
    heroHeadline: 'Stop losing money to spreadsheets that can\'t keep up with your project.',
    shortDescription: 'Track every line item, change order, and payment across your entire project. Spot a $23K billing discrepancy before it hits your bottom line — not after.',
    problemSection: `You're managing a $1.5M build. Your budget lives in a spreadsheet you built at 11pm before the project started. It worked fine — for the first month.

Then the change orders started. The client wants upgraded countertops. Lumber jumped 12%. Your electrician's invoice doesn't match his original bid. You add a row here, adjust a formula there. By month three, you're not sure the totals are right anymore. By month five, you find out they weren't.

The real cost of a messy budget isn't the spreadsheet — it's the $10,000+ mistake hiding inside it that you won't find until it's too late.

Free templates handle none of this. They give you a static list of categories and a total at the bottom. That's a grocery list, not a budget management system.`,
    solutionSection: `The Construction Budget Tracker is a complete financial command center for your project — designed by a general contractor who spent 15 years managing budgets before building the tool he wished he'd had on day one.

Start with your estimate. Break your budget down by CSI division or your own custom categories. Every line item has a place.

Track actuals in real time. As invoices come in, log actual costs against each line item. The variance column updates automatically — you'll see budget overruns the moment they start, not after they've compounded.

Handle change orders without chaos. Add a change order with a single entry. Watch its impact ripple through your entire budget instantly. No manual recalculation. No wondering if you updated every affected total.

See your financial health at a glance. The dashboard tab shows budget vs. actual by category, percentage complete vs. percentage spent, and projected final cost based on your current burn rate.

Track every payment. Log every invoice from every sub and supplier. Filter by vendor, status, or date. Know exactly who's been paid, who's pending, and what's due this week.

Bill with confidence. For cost-plus contractors: the markup calculator automatically applies your agreed percentage and generates client-facing summaries. For fixed-price contractors: the margin tracker shows your real profit in real time.`,
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
      { title: 'Construction managers', description: 'producing professional budget reports for clients and lenders' },
      { title: 'Subcontractors', description: 'tracking their own job costs and profitability' },
    ],
    whatsIncluded: [
      'Excel file (.xlsx) — compatible with Excel 2016+, Microsoft 365',
      'Google Sheets version — optimized for Sheets, not just converted',
      '5-minute video walkthrough covering setup and daily use',
      'Sample data pre-loaded so you can see it in action before entering your own',
      'Quick-start guide (PDF) with customization tips',
      'Lifetime updates — every improvement, delivered free',
    ],
    faq: [
      { question: 'Can I track multiple projects?', answer: 'Yes. Duplicate the template for each project. There are no per-project limits.' },
      { question: 'Does it handle cost-plus and fixed-price contracts?', answer: 'Yes. It includes both a markup calculator for cost-plus and a margin tracker for fixed-price contracts.' },
      { question: 'How many line items can I track?', answer: 'There is no practical limit. The template scales from small remodels to $10M+ commercial projects.' },
    ],
    testimonials: [
      {
        quote: 'I used this on a $1.8M custom home. Caught a $23K discrepancy in the framing sub\'s billing that I would have missed with my old spreadsheet. Paid for itself 400x over.',
        name: 'Mike Ramirez',
        title: 'General Contractor, Austin, TX',
        initials: 'MR',
      },
      {
        quote: 'My lender asked for a detailed project budget breakdown. I exported the tracker to PDF and he said it was the most professional submission he\'d seen from a small GC. Loan approved in two days.',
        name: 'Maria Gutierrez',
        title: 'General Contractor, Phoenix, AZ',
        initials: 'MG',
      },
    ],
    objectionPreemption: [
      {
        question: 'I can find free budget templates online.',
        answer: 'You can. They give you a list of categories and a total. No change order tracking. No variance calculations. No payment logging. No dashboard. And when a formula breaks — and it will — you\'re on your own. One missed formula error on a $2M project costs more than 100 copies of this template.',
      },
      {
        question: 'I can build my own.',
        answer: 'You can. At $50/hour, expect to invest 20+ hours designing, building, testing, and debugging. That\'s $1,000+ in your time. Or download ours in 30 seconds and be tracking your budget in 5 minutes.',
      },
      {
        question: '$49 is expensive for a spreadsheet.',
        answer: 'How much does it cost when you miss a $15K change order? When your sub overbills by $8K and you don\'t catch it? One prevented mistake pays for this template 200x over. It\'s not a spreadsheet — it\'s insurance for your profit margin.',
      },
    ],
    checkoutUrl: '#',
  },
  {
    slug: 'rental-property-analyzer',
    name: 'Rental Property Analyzer',
    tagline: 'Analyze any rental deal in 15 minutes. Know exactly what you\'re buying — before you buy it.',
    benefitLine: 'Go from "I think it\'s a good deal" to "I know it\'s a good deal" in one spreadsheet.',
    heroHeadline: 'The proven rental analysis tool that shows you what a deal really returns — not what the listing agent claims.',
    shortDescription: 'Analyze any rental deal in 15 minutes — not 3 hours in a messy spreadsheet. Cash flow, cap rate, cash-on-cash return, and 10-year projections. All automated.',
    problemSection: `Every rental property looks like a good deal until you actually run the numbers.

The listing says $1,400/month rent on a $180,000 property — sounds profitable, right? Until you factor in vacancy (8%), property management (10%), maintenance reserve (5%), insurance, property taxes, and that water heater on borrowed time. Suddenly your "8% return" is really 3.2%. And that's year one — before the roof needs replacing.

The deals that lose money aren't the ones that look bad. They're the ones that look good because you forgot to include a line item.

Most investors analyze deals with a calculator and optimism. The ones who build wealth analyze with a system that forces them to account for everything.`,
    solutionSection: `The Rental Property Analyzer gives you the same analytical framework that institutional investors use — in a spreadsheet you can run in 15 minutes.

60-second screening. Enter purchase price, down payment, loan terms, and expected rent. The template instantly calculates monthly cash flow, annual cash-on-cash return, cap rate, and gross rent multiplier.

Comprehensive operating expense analysis. Property taxes, insurance, management fees, maintenance reserve, vacancy rate, HOA, utilities — every recurring cost gets its own line.

10-year projection — where this template earns its price. It models rent growth, expense growth, property appreciation, and mortgage paydown over a decade. You see total return including cash flow, equity buildup, and appreciation.

Mortgage comparison. Compare up to three loan scenarios side by side — conventional 30-year, 15-year, or adjustable rate.

Side-by-side deal comparison. Analyze up to 5 properties with identical metrics in a single view.`,
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
      { title: 'New investors', description: 'analyzing their first rental purchase — make your first decision with confidence, not hope' },
      { title: 'Experienced landlords', description: 'evaluating additions to a portfolio' },
      { title: 'Real estate agents', description: 'providing data-driven analysis to investor clients' },
      { title: 'House hackers', description: 'running numbers on owner-occupied multifamily' },
      { title: 'Anyone considering a rental property', description: 'who wants to buy based on precise data, not gut feelings' },
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
    testimonials: [
      {
        quote: 'I analyze 15–20 deals a month. This cut my analysis time from two hours to twenty minutes per deal. The 10-year projection tab alone is worth the price.',
        name: 'Sarah Chen',
        title: 'Real Estate Investor, Charlotte, NC',
        initials: 'SC',
      },
      {
        quote: 'I teach a real estate investing course. I recommend this to every student. It forces you to account for all the numbers — not just the ones that make you feel good about a deal.',
        name: 'Brandon Cole',
        title: 'Investor & Educator, Nashville, TN',
        initials: 'BC',
      },
    ],
    objectionPreemption: [
      {
        question: 'I already have a spreadsheet I use.',
        answer: 'Does it model 10-year projections with rent growth, expense growth, and appreciation? Does it compare loan scenarios side by side? Does it calculate DSCR for your lender? If not, you\'re making investment decisions with incomplete data — on properties you\'ll own for decades.',
      },
      {
        question: 'Free rental calculators exist online.',
        answer: 'They do. Most calculate cash flow using gross rent minus mortgage payment. That\'s not analysis — that\'s a guess. They skip vacancy, maintenance reserves, property management, and capital expenditure.',
      },
      {
        question: '$49 for a spreadsheet?',
        answer: 'One bad rental deal costs $10,000+ in the first year alone. Negative cash flow, unexpected repairs, vacancy you didn\'t model. This template pays for itself the first time it tells you to walk away from a deal that looks good but isn\'t.',
      },
    ],
    checkoutUrl: '#',
  },
  {
    slug: 'contractor-estimate-template',
    name: 'Project Timeline & Gantt Chart',
    tagline: 'See your entire project schedule on one screen. Spot delays before they cascade.',
    benefitLine: 'When one trade runs late, see the cascade instantly. No surprises.',
    heroHeadline: 'How to keep every trade on schedule without learning project management software.',
    shortDescription: 'Map every phase of your build on one screen. Flag delays before they cascade. Keep every sub on schedule without learning expensive PM software.',
    problemSection: `Your flooring crew shows up. The drywall isn't finished. They leave. You're paying for a day of wasted labor and your schedule just slipped by a week — because one delay cascaded into three.

Construction schedules are sequential. Cabinets can't go in before drywall. Drywall can't happen before rough-in inspections pass. When one trade runs two days late, everything downstream shifts. The question isn't whether delays will happen — it's whether you'll see them in time to adjust.

Most contractors keep their schedule in their head. That works until it doesn't — and when it doesn't, it costs thousands.

You don't need a $30/month PM tool. You need a professional schedule in a format you already know.`,
    solutionSection: `The Project Timeline & Gantt Chart gives you a professional, visual project schedule that takes 5 minutes to set up and saves hours of coordination headaches for the life of your project.

Auto-generating Gantt chart. Enter tasks, assign start and end dates. The chart builds itself. Color-coded bars show each phase at a glance.

Milestone tracker. Permit approvals, inspections, client walk-throughs, certificate of occupancy — your critical dates are visually distinct and impossible to miss.

Task dependencies. Link tasks that must happen in sequence. When Task A slips by three days, every dependent task shifts automatically. No manual recalculation.

Multi-project view. Running parallel jobs? See all active projects on one timeline.`,
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
    testimonials: [
      {
        quote: 'Showed the Gantt template to my project manager and he thought we\'d bought actual PM software. It\'s that clean. We use it on every job now.',
        name: 'Dan Kowalski',
        title: 'Owner, Kowalski Builds LLC, Denver, CO',
        initials: 'DK',
      },
      {
        quote: 'We run a £4M renovation company. Tried three different PM tools, kept coming back to spreadsheets. SheetCraft gave us the structure we needed without the complexity we didn\'t.',
        name: 'James Whitfield',
        title: 'Director, Whitfield Renovations, London, UK',
        initials: 'JW',
      },
    ],
    objectionPreemption: [],
    checkoutUrl: '#',
  },
  {
    slug: 'flip-brrrr-calculator',
    name: 'BRRRR Deal Calculator',
    tagline: 'Know exactly how much capital comes back before you commit a dollar.',
    benefitLine: 'See exactly how much cash you recapture at refinance — before you buy.',
    heroHeadline: 'The precise BRRRR calculator that tells you whether your capital recycles — or gets trapped.',
    shortDescription: 'Model the full Buy-Rehab-Rent-Refinance-Repeat cycle. See exactly how much capital comes back at refinance — before you commit a dollar.',
    problemSection: `The BRRRR strategy is one of the most powerful wealth-building methods in real estate. It's also one of the easiest to screw up.

The difference between a BRRRR deal that recycles 90% of your capital and one that traps $40K of dead equity comes down to one thing: running precise numbers before you buy.

Here's how it usually goes wrong. You estimate the ARV at $250K. Your lender will do 75% LTV. That means $187,500 coming back to you at refinance — enough to cover your $160K all-in cost with room to spare. Except the appraisal comes in at $230K. Now you're getting $172,500. And your rehab ran $8K over budget. Your all-in was $168K. Your capital didn't recycle. The whole point of BRRRR just broke.

You can't undo a purchase. You can model the numbers in 15 minutes before you make one.`,
    solutionSection: `The BRRRR Deal Calculator walks you through every phase and shows you exactly where your money goes, how much comes back, and what your long-term return looks like.

Acquisition tab. Purchase price, closing costs, financing terms. Handles hard money and private lending — points, short-term rates, the structures BRRRR investors actually use.

Rehab tab. Line-item budget or quick-entry category totals for early screening. Tracks your total all-in cost.

Rent analysis tab. Post-rehab rental income and operating expenses. Calculates stabilized NOI and cash flow.

Refinance tab — the make-or-break calculation. Enter your ARV, expected LTV, and permanent loan terms. Instantly see: cash pulled out at refinance, capital remaining in the deal, and new monthly payment.

Deal summary dashboard. Total capital invested. Capital recaptured. Cash left in deal. Annual cash flow. Cash-on-cash return on remaining capital.`,
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
      { title: 'BRRRR investors', description: '— first deal or fiftieth' },
      { title: 'Buy-and-hold investors', description: 'evaluating whether a property works better as a BRRRR' },
      { title: 'Private lenders', description: 'verifying the numbers before funding a deal' },
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
    testimonials: [
      {
        quote: 'The BRRRR Calculator saved me from a terrible deal. The numbers looked great until I plugged in realistic rehab costs and the refinance terms. Walked away and found a better property the next week.',
        name: 'Anthony Davis',
        title: 'Investor, Atlanta, GA',
        initials: 'AD',
      },
    ],
    objectionPreemption: [
      {
        question: 'I use a BRRRR calculator I found online.',
        answer: 'Does it model hard money terms with points? Does it separate holding costs during rehab from stabilized operating costs? Does it show you your cash-on-cash return on remaining invested capital? The refinance math is the entire point of BRRRR. If your calculator oversimplifies it, you\'re flying blind on the most important number.',
      },
      {
        question: 'I can do this math on a napkin.',
        answer: 'You can do the basic math. But BRRRR math has layers: holding costs during rehab, the difference between hard money and permanent financing costs, stabilized NOI vs. projected NOI. A napkin doesn\'t model that. This template does — in 15 minutes.',
      },
    ],
    checkoutUrl: '#',
  },
  {
    slug: 'real-estate-development-pro-forma',
    name: 'Fix & Flip Analyzer',
    tagline: 'Know your projected profit before you make an offer. Not after you\'ve committed.',
    benefitLine: 'Know your real profit after every cost — not the back-of-napkin version.',
    heroHeadline: 'Stop relying on back-of-napkin math. Start knowing your flip profit to within 3%.',
    shortDescription: 'Model your flip from purchase to sale. Rehab costs, holding costs, financing, sensitivity analysis — know your projected profit before you make an offer.',
    problemSection: `Flipping houses looks simple on TV. Buy low, renovate, sell high.

In reality, the difference between a profitable flip and a money pit lives in the costs you didn't model. The holding costs that stack up during a 4-month rehab. The closing costs on both the buy and the sell side. The hard money interest payments. The contractor overruns in month three that somehow always happen.

A flip with a $40K "profit" on paper becomes a $12K profit — or a loss — when you account for 5 months of holding costs, 6% agent commissions, $4K in closing costs, and a $7K rehab overrun.

The flippers who consistently make money aren't luckier. They're more precise with their numbers before they buy.`,
    solutionSection: `The Fix & Flip Analyzer models every cost from acquisition to sale so you know your projected profit before you make an offer.

Acquisition tab. Purchase price, closing costs, financing. Handles conventional, hard money, private money, and cash.

Rehab budget — 25+ construction categories. Not a single "Renovation Cost" field. Demo, framing, electrical, plumbing, HVAC, roofing, flooring, paint, kitchen, baths, landscaping, and more.

Holding costs tab. What the property costs every month you own it: loan payments, property taxes, insurance, utilities, HOA.

Sale projection. Enter your ARV, estimated days on market, and selling costs. The template calculates gross proceeds minus every dollar spent to show your true net profit.

Sensitivity analysis — the feature you won't find in free templates. How does your profit change if ARV comes in 5% or 10% lower? If rehab runs 10% or 20% over?`,
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
      { title: 'Fix & flip investors', description: 'evaluating deals before making offers' },
      { title: 'First-time flippers', description: 'who want a proven, structured framework' },
      { title: 'Experienced flippers', description: 'who are done with back-of-napkin math' },
      { title: 'Hard money lenders', description: 'reviewing deal packages from borrowers' },
      { title: 'Wholesalers', description: 'presenting professional deal analysis to flip buyers' },
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
    testimonials: [
      {
        quote: 'I\'ve been flipping for 8 years and never had a proper spreadsheet. The Fix & Flip Analyzer forced me to account for holding costs I\'d been ignoring. My last flip\'s actual profit was within 3% of what the template predicted.',
        name: 'Jessica Torres',
        title: 'Real Estate Investor, Tampa, FL',
        initials: 'JT',
      },
      {
        quote: 'I bought the full bundle. I\'m a one-man operation doing small remodels and buying rentals on the side. Having all the templates in one place, with the same look and feel — I stopped context-switching between five different spreadsheets.',
        name: 'Chris Dolan',
        title: 'Contractor & Investor, Portland, OR',
        initials: 'CD',
      },
    ],
    objectionPreemption: [
      {
        question: 'I already use a flip calculator app.',
        answer: 'Does it break rehab into 25+ categories or just use one field? Does it model holding costs month by month? Does it run sensitivity analysis showing what happens if ARV drops 10%? Most calculator apps give you a number. This template gives you the analysis behind the number.',
      },
      {
        question: '$49 is a lot for a spreadsheet.',
        answer: 'How much does a bad flip cost? Overestimate ARV by 8%. Underestimate rehab by $12K. Miss 3 months of holding costs at $2,200/month. That\'s $25,000+ in losses. This template costs $49 and forces you to model every scenario before you sign the contract.',
      },
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
