export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  relatedProduct: string;
  image?: string;
  imageAlt?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-analyze-rental-property-investment',
    title: 'How to Analyze a Rental Property Investment in 2026 (Step-by-Step Guide)',
    metaTitle: 'How to Analyze a Rental Property Investment in 2026 (Step-by-Step Guide)',
    metaDescription: 'Learn exactly how to analyze a rental property deal with real numbers. Step-by-step guide covering cash flow, cap rate, cash-on-cash return, and 10-year projections.',
    targetKeyword: 'rental property analysis spreadsheet',
    secondaryKeywords: ['rental property calculator', 'how to analyze a rental property', 'rental property cash flow analysis', 'investment property spreadsheet'],
    excerpt: 'Buying a rental property without running the numbers is like hiring a contractor without getting a quote. Learn the exact 10-step process to analyze any rental deal.',
    publishedAt: '2026-01-15',
    readTime: 12,
    relatedProduct: 'rental-property-analyzer',
    image: '/images/blog/rental-property-analysis.jpg',
    imageAlt: 'Real estate investor analyzing rental property data on laptop with spreadsheet charts',
    content: `Buying a rental property without running the numbers is like hiring a contractor without getting a quote. You might get lucky. You probably won't.

The difference between investors who build wealth with rental properties and those who end up with an expensive headache comes down to analysis. Not gut feeling. Not what the listing agent told you. Not what some guy on a podcast said about "any property in this zip code being a good deal."

Actual, line-by-line financial analysis.

In this guide, we'll walk through exactly how to analyze a rental property investment — step by step, with real numbers.

## What You Need Before You Start

Before diving into the numbers, gather these inputs:

- **Purchase price** (or your planned offer price)
- **Expected monthly rent** (check Zillow, Rentometer, or local comps)
- **Down payment amount** and loan terms (rate, term, type)
- **Property taxes** (check the county assessor's website)
- **Insurance estimate** ($100–$150/month for a single-family)
- **HOA fees** (if applicable)
- **Expected vacancy rate** (5–10% is standard)
- **Maintenance reserve** (budget 8–12% of gross rent)
- **Property management fee** (8–10% of collected rent)

## Step 1: Calculate Gross Rental Income

**Example property:**
- Purchase price: $220,000
- Monthly rent: $1,800
- Down payment: 25% ($55,000)
- Loan: 30-year fixed at 7.0%

**Gross annual rental income:** $1,800 × 12 = **$21,600**

## Step 2: Account for Vacancy

A 7% vacancy rate is reasonable for most markets.

**Vacancy loss:** $21,600 × 7% = **$1,512**
**Effective Gross Income:** $21,600 – $1,512 = **$20,088**

## Step 3: Calculate Operating Expenses

| Expense | Monthly | Annual |
|---------|---------|--------|
| Property taxes | $275 | $3,300 |
| Insurance | $130 | $1,560 |
| Property management (9%) | $162 | $1,944 |
| Maintenance reserve (10%) | $180 | $2,160 |
| Capex reserve (5%) | $90 | $1,080 |
| Landscaping/snow | $50 | $600 |
| Miscellaneous | $30 | $360 |
| **Total** | **$917** | **$11,004** |

## Step 4: Calculate Net Operating Income (NOI)

**NOI:** $20,088 – $11,004 = **$9,084**

## Step 5: Calculate Cap Rate

**Cap Rate = NOI ÷ Purchase Price**
$9,084 ÷ $220,000 = **4.13%**

## Step 6: Calculate Debt Service

Monthly mortgage payment (P&I): **$1,098**
Annual debt service: **$13,176**

## Step 7: Calculate Cash Flow

**Annual cash flow:** $9,084 – $13,176 = **–$4,092**

This property loses $341 per month. This is why running the numbers matters.

## Step 8: Calculate Cash-on-Cash Return

**Total cash invested:** $61,600 (down payment + closing costs)
**Cash-on-cash return:** –$4,092 ÷ $61,600 = **–6.6%**

## Step 9: Run the 10-Year Projection

With 3% rent growth and 3% appreciation, after 10 years:
- Property value: $295,600
- Equity: $150,300
- Total return: ~$102,000

## Step 10: Make the Decision

The deal doesn't work at $220,000 with 25% down at 7%. But what if you offered $195,000? What if you put 30% down? A good spreadsheet lets you test scenarios instantly.

## Key Takeaways

1. **Always include all operating expenses.** Skip one and your analysis is fiction.
2. **Cap rate is for comparison. Cash-on-cash is for decision-making.**
3. **Negative cash flow isn't automatically a dealbreaker** — but understand the full 10-year picture.
4. **Run multiple scenarios.** Find the terms that make the deal work.
5. **Use a proper analysis spreadsheet.** It pays for itself on the first deal you walk away from.`,
  },
  {
    slug: 'construction-budget-template-why-free-isnt-enough',
    title: 'The Ultimate Construction Budget Template: Why Free Isn\'t Enough',
    metaTitle: 'The Ultimate Construction Budget Template: Why Free Isn\'t Enough',
    metaDescription: 'Free construction budget templates break on real projects. Learn what a professional template needs and why the right Excel spreadsheet saves you thousands.',
    targetKeyword: 'construction budget template excel',
    secondaryKeywords: ['construction budget spreadsheet', 'construction cost tracking template', 'free construction budget template', 'project budget tracker'],
    excerpt: 'You downloaded a free construction budget template. By week three, you had 47 line items that didn\'t fit the categories and three broken formulas. Here\'s why.',
    publishedAt: '2026-01-28',
    readTime: 10,
    relatedProduct: 'construction-budget-tracker',
    image: '/images/blog/construction-budget.jpg',
    imageAlt: 'Construction project manager reviewing budget spreadsheet on tablet at job site with blueprints',
    content: `You searched "construction budget template Excel," downloaded one from the first result, and opened it up. It had ten categories, a column for estimated cost, a column for actual cost, and a total at the bottom.

Then you started a real project.

By week three, you had 47 line items that didn't fit the original categories. You'd manually overridden three formulas. And you'd accidentally deleted a formula in the total row without noticing, so your budget was off by $11,000 for two weeks.

## Why Free Construction Budget Templates Break

### Problem 1: They're Too Simple

A real residential project has 30-50 line items across 15+ CSI divisions. When your template doesn't have a place for something, you shove it into "Miscellaneous." Two months later, 23% of your budget is in Miscellaneous.

### Problem 2: No Change Order Management

The average custom home project sees 15-20 change orders. Free templates have no mechanism for this. You either edit the original budget (destroying your baseline) or track changes in email.

### Problem 3: No Payment Tracking

On a $500K project, you might write 80-100 checks. A free template doesn't track what you've actually paid vs. what's pending.

### Problem 4: No Visual Dashboard

When your client asks "how's the budget looking?" you shouldn't need 15 minutes to find the answer.

### Problem 5: Broken Formulas and Locked Cells

Half have formula errors. The other half have locked cells you can't modify.

## What a Professional Template Needs

### 1. Granular Cost Categories
30+ categories organized by CSI division — not 8-12 generic buckets.

### 2. Estimated vs. Actual vs. Committed
Three columns, not two. "Committed" catches budget problems before they hit your bank account.

### 3. Change Order Log
A dedicated tab that automatically updates the relevant budget line when a change order is approved.

### 4. Payment Tracker
Every payment to every vendor, filterable by vendor, category, and date.

### 5. Dashboard
Total budget vs. actual in charts. Percentage complete vs. percentage spent. Projected final cost.

### 6. Contingency Tracking
Track how your 5-10% contingency is being drawn down with visual alerts.

## The Real Cost of a Bad Template

On a $350,000 project: missing overages, double-paying subs, unbilled change orders — easily **$18,700** in preventable losses. A professional template costs $49.

## Key Takeaways

1. Free templates break on real projects — they lack change orders, payments, and dashboards.
2. The "Committed" column catches overages before you pay for them.
3. Change orders must flow into the budget automatically.
4. A $49 template can save $10,000+ on a single project.`,
  },
  {
    slug: 'brrrr-calculator-evaluate-next-deal',
    title: 'BRRRR Calculator: How to Evaluate Your Next Deal in 10 Minutes',
    metaTitle: 'BRRRR Calculator: How to Evaluate Your Next Deal in 10 Minutes',
    metaDescription: 'Learn how to evaluate a BRRRR deal step by step using a calculator spreadsheet. Real numbers, real examples, and the exact metrics that matter.',
    targetKeyword: 'BRRRR calculator spreadsheet',
    secondaryKeywords: ['BRRRR method calculator', 'BRRRR strategy spreadsheet', 'BRRRR deal analyzer', 'BRRRR real estate calculator'],
    excerpt: 'The BRRRR method is the closest thing to a cheat code in real estate investing. Done wrong, you trap $50K in a property that barely cash flows. Here\'s how to run the numbers.',
    publishedAt: '2026-02-10',
    readTime: 14,
    relatedProduct: 'flip-brrrr-calculator',
    image: '/images/blog/brrrr-calculator.jpg',
    imageAlt: 'Real estate investor comparing house flip deals on computer with financial charts and spreadsheets',
    content: `The BRRRR method — Buy, Rehab, Rent, Refinance, Repeat — is the closest thing to a cheat code in real estate investing. Done right, you recover most of your capital at refinance and redeploy it into the next deal.

Done wrong, you trap $50,000 in a property that barely cash flows.

## What Makes BRRRR Different

With traditional buy-and-hold, your capital stays in the deal forever. With BRRRR, you:

1. **Buy** below market value (usually distressed)
2. **Rehab** to force appreciation
3. **Rent** at market rate
4. **Refinance** based on the new, higher value
5. **Repeat** using the cash pulled out

## The 5 Numbers That Make or Break a BRRRR Deal

1. **All-in cost** (purchase + closing + rehab + holding costs)
2. **After Repair Value (ARV)**
3. **Refinance proceeds** (typically 70-80% of ARV)
4. **Cash left in the deal** (all-in minus refinance proceeds)
5. **Cash flow after refinance**

## Step-by-Step: A Real BRRRR Deal

### The Property
- Memphis, TN — Asking $95,000
- Needs full cosmetic rehab
- Comparable sales: $165,000–$175,000
- Market rent: $1,350/month

### Step 1: Acquisition
- Purchase: $90,000
- Hard money: 80% LTV, 12% interest, 2 points
- Cash at closing: **$22,140**

### Step 2: Rehab Budget
Kitchen, baths, flooring, paint, electrical, landscaping + 10% contingency = **$35,000**

### Step 3: Holding Costs (3 months)
Hard money interest + insurance + taxes + utilities = **$3,285**

### Step 4: All-In Cost
$90,000 + $2,700 + $1,440 + $35,000 + $3,285 = **$132,425**

### Step 5: ARV
Conservative estimate based on 3 comps: **$167,000**

### Step 6: Refinance
75% LTV = $125,250 loan. After paying off hard money ($72,000) and closing costs ($3,000): **$50,250 cash back**

### Step 7: Cash Left in Deal
$60,425 invested – $50,250 recovered = **$10,175** (83% capital recovery)

### Step 8: Post-Refinance Cash Flow
After all expenses and new mortgage: **–$101/month**

### Verdict
This deal doesn't work as written. But drop the purchase to $80,000 and the math flips — you pull out ALL your capital with positive cash flow.

## Common BRRRR Mistakes

1. **Ignoring holding costs** — can add $5,000–$8,000
2. **Overestimating ARV** — use sold comps, not listing prices
3. **Underestimating rehab** — always add 10-15% contingency
4. **Forgetting refinance closing costs** — $2,500–$4,000
5. **Not stress-testing** — what if ARV is 5% low?

## Key Takeaways

1. BRRRR success depends entirely on running ALL the numbers.
2. Holding costs during rehab are real. Budget for them.
3. Be conservative with ARV.
4. Negative cash flow after refinance kills the "Repeat."
5. A BRRRR calculator turns a 3-hour analysis into 10 minutes.`,
  },
  {
    slug: 'how-to-track-construction-change-orders-excel',
    title: 'How to Track Construction Change Orders in Excel (Without Losing Money)',
    metaTitle: 'How to Track Construction Change Orders in Excel (Without Losing Money)',
    metaDescription: 'Learn how to build a construction change order tracking system in Excel. Step-by-step guide with templates, formulas, and real-world examples to prevent cost overruns.',
    targetKeyword: 'construction change order tracking Excel',
    secondaryKeywords: ['change order log template', 'construction change order spreadsheet', 'how to track change orders', 'change order management Excel'],
    excerpt: 'Change orders are where construction budgets go to die. The average custom home project sees 15-20 change orders — here\'s how to track every one in Excel without losing your mind (or your margin).',
    publishedAt: '2026-02-13',
    readTime: 15,
    relatedProduct: 'construction-budget-tracker',
    image: '/images/blog/construction-change-orders.jpg',
    imageAlt: 'Construction manager reviewing change order documents with Excel spreadsheet on laptop',
    content: `Change orders are where construction budgets go to die.

The average custom home project sees 15-20 change orders. A commercial project? Easily 50+. Each one shifts your budget, your schedule, and your margin — and if you're tracking them in email threads and sticky notes, you're already behind.

The good news: you don't need expensive construction management software to stay on top of change orders. A well-built Excel spreadsheet can handle everything from initial request to final payment. In this guide, we'll build one from scratch.

## What Is a Construction Change Order?

A change order is a formal modification to the original construction contract. It can change the scope of work, the contract price, or the project schedule — usually all three.

Common triggers include:

- **Owner-requested changes** ("Can we add recessed lighting in the living room?")
- **Design errors or omissions** (The architect forgot the HVAC chase)
- **Unforeseen conditions** (We hit rock 4 feet down)
- **Code compliance** (The inspector requires a larger electrical panel)
- **Material substitutions** (The specified tile is discontinued)

Each change order needs to be documented, priced, approved, and tracked against the overall budget. Miss one step and you're either eating the cost or fighting about it later.

## Why Email and Paper Don't Work

Most contractors start tracking change orders the same way: an email to the owner, a verbal approval, and a mental note to "add it to the final bill."

Here's what goes wrong:

### Problem 1: Lost Approvals

"I never approved that." If you don't have a documented approval trail, you're in he-said-she-said territory. On a $15,000 change order, that's an expensive argument to lose.

### Problem 2: Budget Drift

You approved 12 change orders over 3 months. Each one seemed reasonable — $2,000 here, $5,000 there. But without a running total tied to your original budget, you don't realize the project is $47,000 over budget until it's too late.

### Problem 3: Unbilled Work

Your crew completed the extra work, but the change order paperwork never made it to the invoice. At project closeout, you discover $8,000 in approved changes that were never billed. Good luck collecting months after the fact.

### Problem 4: Schedule Impact Blindness

That "simple" change order to move a wall added 3 days to the framing schedule, which pushed electrical rough-in, which pushed insulation, which pushed drywall. But nobody updated the schedule because the change order was handled informally.

## Building Your Change Order Tracker in Excel

Here's how to build a change order tracking system that actually works. We'll create three connected components:

### Component 1: The Change Order Log

This is your master list — every change order on the project in one place.

Create a new worksheet called "CO Log" with these columns:

- **CO Number** (CO-001, CO-002, etc.)
- **Date Submitted**
- **Submitted By** (Owner, Architect, Field, Subcontractor)
- **Description** (Clear, one-line summary)
- **CSI Division** (Links to your budget categories)
- **Estimated Cost** (Your initial pricing)
- **Approved Cost** (Final negotiated amount)
- **Status** (Pending / Approved / Rejected / Voided)
- **Date Approved**
- **Approved By**
- **Schedule Impact** (Days added/subtracted)
- **Budget Line** (Which budget category is affected)
- **Notes**

### The Key Formulas

At the top of your log, add summary cells:

**Total Approved COs:**
\`=SUMIFS(G:G, H:H, "Approved")\`

**Total Pending COs:**
\`=SUMIFS(F:F, H:H, "Pending")\`

**Total COs (Approved + Pending):**
\`=SUMIFS(G:G, H:H, "Approved") + SUMIFS(F:F, H:H, "Pending")\`

**Total Schedule Impact:**
\`=SUMIFS(K:K, H:H, "Approved")\`

These four numbers should be visible without scrolling. They're the first thing you check every morning.

### Component 2: The Budget Integration

Your change order log is useless if it doesn't talk to your budget. Here's how to connect them:

In your main budget worksheet, add two columns:

- **Approved COs** — pulls the sum of approved change orders for that budget line
- **Revised Budget** — original budget + approved COs

The formula for Approved COs:
\`=SUMIFS('CO Log'!G:G, 'CO Log'!L:L, A5, 'CO Log'!H:H, "Approved")\`

This automatically updates your budget every time a change order is approved. No manual entry, no missed updates.

### Component 3: The Change Order Detail Sheet

For each significant change order (anything over $2,500 or with schedule impact), create a detail section on a "CO Details" tab:

- **CO Number and Description**
- **Itemized cost breakdown** (labor, materials, equipment, subcontractor markup)
- **Markup percentage** (typically 10-20% overhead + profit)
- **Supporting documentation references** (photos, RFIs, emails)
- **Schedule impact analysis**
- **Signature/approval lines**

## Best Practices for Change Order Tracking

### 1. Number Everything Sequentially

Never skip numbers. Never reuse numbers. If CO-007 gets rejected, it stays as CO-007 with status "Rejected." This creates an audit trail.

### 2. Log It Immediately

The moment someone mentions a change — in a meeting, on a call, in the field — create a line item in the log. Even if the details aren't finalized, get it documented with status "Pending."

### 3. Track Pending COs as Seriously as Approved Ones

Pending change orders are future budget hits. If you have $80,000 in pending COs, your budget isn't what the "Approved" column says — it's $80,000 worse. Use conditional formatting to highlight this risk.

### 4. Set Up Conditional Formatting Alerts

Color-code your tracker:

- **Red:** Pending COs over 14 days old (these are stalling — chase them)
- **Yellow:** COs approved but not yet billed
- **Green:** COs approved, billed, and paid

The formula for the 14-day alert:
\`=AND(H5="Pending", TODAY()-B5>14)\`

### 5. Include Owner and Contractor Markup

Don't forget to apply your contractual markup to change orders. If your contract allows 15% overhead and 10% profit on changes, build these into your pricing template. Many contractors leave thousands on the table by quoting change orders at cost.

### 6. Weekly Change Order Review

Every week, review your CO log with your project team:

- Any new pending COs?
- Any COs pending longer than 7 days?
- Any COs completed but not invoiced?
- What's the cumulative impact on budget and schedule?

This 15-minute review prevents 90% of change order problems.

## Common Change Order Tracking Mistakes

### Mistake 1: Not Tracking Deductive Change Orders

Change orders can reduce the contract too. If the owner deletes the second-floor deck, that's a deductive CO. Track it the same way — it affects your budget, your schedule, and your subcontractor contracts.

### Mistake 2: Combining Multiple Changes into One CO

Each change should be its own line item. When you bundle "move the kitchen island + add a bathroom exhaust fan + upgrade to quartz countertops" into one CO, you can't track which items affected which budget lines.

### Mistake 3: Not Getting Written Approval Before Starting Work

This is the most expensive mistake. Verbal approval is not approval. Never start change order work without a signed (or at minimum, emailed) authorization. Your Excel tracker should have blank approval dates flagged in red.

### Mistake 4: Forgetting Time-and-Materials Tracking

Some change orders are priced T&M (time and materials). For these, you need a separate tracking mechanism — daily labor hours, material receipts, equipment logs. Link these totals back to the CO log so you can invoice accurately.

## Real-World Example: $385K Residential Remodel

Let's walk through a real scenario:

**Original contract:** $385,000
**Change orders over 6 months:**

| CO# | Description | Cost | Status |
|-----|-------------|------|--------|
| CO-001 | Upgrade to tankless water heater | $2,800 | Approved |
| CO-002 | Add recessed lighting (12 cans) | $3,400 | Approved |
| CO-003 | Relocate HVAC return | $1,900 | Approved |
| CO-004 | Unforeseen asbestos abatement | $6,200 | Approved |
| CO-005 | Owner deletes built-in bookshelves | -$3,100 | Approved |
| CO-006 | Upgrade hardwood to wide-plank | $4,800 | Approved |
| CO-007 | Add outdoor electrical outlets (4) | $1,100 | Pending |
| CO-008 | Change window manufacturer | $0 | Rejected |

**Running totals:**
- Approved COs: $16,000 (4.2% of contract)
- Pending COs: $1,100
- Revised contract: $401,000
- Schedule impact: +8 days

Without tracking, this contractor would have estimated their budget impact as "maybe $10,000 in extras." The actual number is $16,000 approved with another $1,100 pending. That's the difference between a profitable project and a break-even one.

## When to Upgrade from Excel

Excel works beautifully for most residential and small commercial projects. But you might need dedicated software when:

- You're managing **5+ active projects** simultaneously
- You have **multiple people** entering change orders
- You need **real-time collaboration** in the field
- Your projects regularly exceed **$2 million**
- You need **digital signatures** and automated approval workflows

For everything else, a well-structured Excel tracker gives you 90% of the functionality at 0% of the software cost.

## Key Takeaways

1. **Every change order gets logged immediately** — even before pricing is finalized.
2. **Connect your CO log to your budget** with SUMIFS formulas so budget updates are automatic.
3. **Track pending COs separately** — they represent future budget risk.
4. **Never start change order work without written approval.** Your tracker should flag missing approvals.
5. **Review your CO log weekly** — 15 minutes prevents thousands in missed billings.
6. **A proper change order tracker pays for itself** on the first project — in recovered billings, prevented disputes, and margin protection.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
