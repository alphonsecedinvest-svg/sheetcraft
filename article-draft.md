# Simple Bookkeeping Spreadsheet for Small Contractors (Excel Template)

Most small contractors don't go out of business because they can't swing a hammer. They go out of business because they don't know where their money went.

You bid a job at $45,000, complete it on time, collect the final check—and somehow only cleared $2,800. Your material bills were higher than expected. A sub you forgot about sent an invoice three months late. And you just realized you haven't paid quarterly estimated taxes, so now you owe penalties on top of the tax bill.

This is the reality for contractors who treat bookkeeping as an afterthought. The good news? You don't need QuickBooks, an accounting degree, or a $300/month software subscription to stay on top of your finances. A well-built Excel spreadsheet, updated weekly, gives you everything you need to run a profitable contracting business.

In this guide, we'll build a simple bookkeeping system designed specifically for small contractors—one that tracks income, expenses, job profitability, and tax obligations without overwhelming you with accounting jargon.

## Why Most Contractor Bookkeeping Fails

Before we build anything, let's talk about why bookkeeping breaks down for contractors:

### Problem 1: Commingled Accounts
Your business checking account, personal checking account, and business credit card all look the same in your mind. You pay for materials with the business card, grab lunch with the personal card, and occasionally swipe the wrong one at the gas station. Come tax time, you're sorting through six months of statements trying to remember which Home Depot run was for which job.

### Problem 2: Delayed Invoicing
You finish a phase, move on to the next job, and forget to bill the client. Three weeks later, you remember—and now you're chasing payment while your own material bills are due. Cash flow crunches kill more contractors than slow projects.

### Problem 3: No Job-Level Visibility
You know you made money last month. You think. But you can't tell whether the kitchen remodel was profitable or whether you're subsidizing the bathroom job with the deck project. Without job-level tracking, you're flying blind on pricing—and underbidding jobs without realizing it.

### Problem 4: Tax Time Panic
April 15th arrives and you hand your accountant a shoebox of receipts. They charge you extra for the cleanup, miss deductions because documentation is missing, and you end up paying more tax than you should have—plus penalties for not making quarterly payments.

## The Simple Contractor Bookkeeping System

You need four components:
1. **Income Tracker**—every dollar that comes in, categorized by source and job
2. **Expense Tracker**—every dollar that goes out, categorized by type and job
3. **Job Profitability Dashboard**—real-time P&L for each active project
4. **Tax Summary**—quarterly estimates and year-end totals

Let's build them in Excel.

## Component 1: The Income Tracker

Create a tab called **"Income"** with these columns:

| Date | Source | Job/Project | Description | Amount | Payment Method | Invoice # | Deposit Status |
|------|--------|-------------|-------------|--------|----------------|-----------|----------------|
| 03/15/26 | Smith Kitchen | Job-2026-04 | 30% deposit | $8,500 | Check #1421 | INV-104 | Deposited |
| 03/22/26 | Johnson Bath | Job-2026-03 | Progress payment | $6,200 | ACH | INV-102 | Deposited |
| 04/02/26 | Retail Customer | Materials | Countertop sale | $1,400 | Credit Card | INV-105 | Deposited |

**Key formula:** Monthly income summary by job
```
=SUMIFS(E:E, C:C, "Job-2026-04", A:A, ">="&DATE(2026,3,1), A:A, "<"&DATE(2026,4,1))
```

This lets you see exactly how much each job generated in any given month.

**Pro tip:** Use a consistent job numbering system (Year-Sequential, e.g., Job-2026-04). It makes filtering and reporting infinitely easier than descriptive names like "Smith Kitchen."

## Component 2: The Expense Tracker

Create a tab called **"Expenses"** with these columns:

| Date | Vendor | Category | Job | Description | Amount | Payment Method | Receipt |
|------|--------|----------|-----|-------------|--------|----------------|---------|
| 03/16/26 | Home Depot | Materials | Job-2026-04 | Lumber for framing | $1,847.23 | Business CC | PDF-1042 |
| 03/18/26 | ABC Plumbing | Subcontractor | Job-2026-04 | Rough-in labor | $2,400.00 | Check #412 | PDF-1043 |
| 03/20/26 | Verizon | Phone/Internet | Overhead | Monthly service | $145.00 | Auto-debit | PDF-1044 |

**Critical distinction:** The "Job" column is blank for overhead expenses (insurance, phone, marketing). These don't get allocated to specific projects—they're costs of running the business.

**Expense categories to use:**
- Materials (lumber, concrete, fixtures, finishes)
- Subcontractors (electrical, plumbing, HVAC, roofing)
- Labor (W-2 employees, if any)
- Equipment rental
- Permits and fees
- Fuel and vehicle expenses
- Insurance (liability, vehicle, workers' comp)
- Phone and internet
- Marketing and advertising
- Office supplies
- Professional services (accountant, lawyer)
- Meals and entertainment
- Miscellaneous

**Key formula:** Monthly expenses by category
```
=SUMIFS(F:F, C:C, "Materials", A:A, ">="&DATE(2026,3,1), A:A, "<"&DATE(2026,4,1))
```

## Component 3: Job Profitability Dashboard

This is where the magic happens. Create a **"Job Dashboard"** tab that pulls data from your Income and Expense tabs to show real-time profitability.

| Job # | Client | Contract Value | Income to Date | Expenses to Date | Gross Profit | Profit % | Status |
|-------|--------|----------------|----------------|------------------|--------------|----------|--------|
| Job-2026-04 | Smith | $28,500 | $8,500 | $6,247 | $2,253 | 26.5% | Active |
| Job-2026-03 | Johnson | $18,000 | $14,400 | $11,200 | $3,200 | 22.2% | Active |
| Job-2026-02 | Miller | $12,000 | $12,000 | $9,800 | $2,200 | 18.3% | Complete |

**Formulas:**
- Income to Date: `=SUMIFS(Income!E:E, Income!C:C, A2)`
- Expenses to Date: `=SUMIFS(Expenses!F:F, Expenses!D:D, A2)`
- Gross Profit: `=D2-E2`
- Profit %: `=IF(D2=0,0,F2/D2)`

**Conditional formatting:** Highlight profit margins below 15% in red. This flags jobs that are underperforming while you can still fix them—not after you've absorbed the loss.

**Include overhead allocation:** To see true net profit, add a row for "Overhead Allocation" (5-10% of contract value). Small contractors often forget that overhead exists—until they try to scale and realize they've been pricing jobs too low to cover their real costs.

## Component 4: The Tax Summary

Create a **"Tax Summary"** tab that calculates quarterly estimated payments and year-end totals:

| Category | Q1 | Q2 | Q3 | Q4 | Annual Total |
|----------|-----|-----|-----|-----|--------------|
| Gross Income | $47,200 | — | — | — | $47,200 |
| Cost of Goods Sold | $28,400 | — | — | — | $28,400 |
| Gross Profit | $18,800 | — | — | — | $18,800 |
| Overhead Expenses | $6,200 | — | — | — | $6,200 |
| Net Profit | $12,600 | — | — | — | $12,600 |
| Est. Tax Due (25%) | $3,150 | — | — | — | $3,150 |
| Quarterly Payment | $3,150 | — | — | — | — |

**The 25% rule of thumb:** Set aside 25-30% of net profit for taxes. This covers federal income tax (variable by bracket), self-employment tax (15.3%), and state taxes. If you're married filing jointly with household income under $100K, 25% is usually sufficient. Over $150K, budget 30%.

**Formulas:**
- Gross Income: `=SUMIFS(Income!E:E, Income!A:A, ">="&DATE(2026,1,1), Income!A:A, "<"&DATE(2026,4,1))`
- COGS (Materials + Subs): `=SUMIFS(Expenses!F:F, Expenses!C:C, "Materials", Expenses!A:A, ">="&DATE(2026,1,1), Expenses!A:A, "<"&DATE(2026,4,1)) + SUMIFS(Expenses!F:F, Expenses!C:C, "Subcontractor", Expenses!A:A, ">="&DATE(2026,1,1), Expenses!A:A, "<"&DATE(2026,4,1))`

## Weekly Bookkeeping Routine (15 Minutes)

The system only works if you use it. Here's the 15-minute weekly process:

**Monday morning:**
1. Review last week's bank and credit card statements (5 min)
2. Enter any transactions you missed (5 min)
3. Update the Job Dashboard to see current profitability (3 min)
4. Check which invoices are outstanding and follow up (2 min)

**Monthly:**
1. Reconcile the spreadsheet to your bank statement
2. Review the Tax Summary tab and transfer estimated tax to a separate savings account
3. Review job profitability and adjust pricing on upcoming bids if needed

**Quarterly:**
1. Calculate actual quarterly estimated tax payment
2. Review year-to-date profit vs. prior year
3. Adjust quarterly payment amount if income is significantly different than projected

## Common Bookkeeping Mistakes Contractors Make

**1. Not separating business and personal** Open a dedicated business checking account and business credit card. Run all business expenses through them. No exceptions. When you mix personal and business, you lose deductions and create audit risk.

**2. Missing deductions** Every tank of gas for the work truck, every box of screws, every permit fee—it's all deductible. But only if you track it. Contractors who estimate "about $3,000 in miscellaneous expenses" leave money on the table.

**3. Forgetting to bill** The Income Tracker has a column for "Deposit Status." Use it. Set a rule: no payment, no next phase. Cash flow is survival.

**4. Not accounting for equipment** That $800 miter saw is a capital expense, not a material expense. It gets depreciated over time, not expensed immediately. Track equipment purchases separately.

**5. Ignoring the numbers** The Job Dashboard tells you which clients and project types are profitable. If bathroom remodels consistently show 22% margins and deck projects show 12% margins, stop bidding decks—or raise your deck prices by 15%.

## From Spreadsheet to Growth

Accurate bookkeeping isn't just about taxes. It's data. Over 6-12 months, you'll see patterns:
- Which subs deliver quality work on budget vs. which ones nickel-and-dime you
- Which materials suppliers offer the best net pricing
- Which project types have hidden costs you didn't anticipate
- Which clients pay on time vs. which ones require collections

Use this data to make business decisions. Fire the problematic sub. Negotiate volume discounts with your best supplier. Stop bidding the project types that don't pay. Prequalify clients for payment reliability.

The contractors who scale profitably aren't just good at building. They're good at business. And good business starts with knowing your numbers.

## Level Up: When to Move Beyond Excel

This spreadsheet handles 1-3 active projects and $250K-$750K in annual revenue comfortably. When should you consider dedicated accounting software?

**Consider QuickBooks or FreshBooks when:**
- You're running 5+ simultaneous projects
- You have employees (not just subs) and need payroll integration
- You need to generate AIA billing forms or complex financial reports
- You want automated bank feed reconciliation
- Your accountant strongly recommends it

Even then, keep this spreadsheet as a job-level profitability tool. Most small business accounting software is weak on project costing. The Excel dashboard + QuickBooks general ledger is a powerful combination for growing contractors.

## Get the Template

Building this from scratch takes a few hours. If you want a head start with formulas, conditional formatting, and a structure that's already proven, SheetCraft's Construction Budget Tracker includes a complete bookkeeping module that integrates with project budgeting, payment tracking, and profitability analysis.

[See the Construction Budget Tracker →](/products/construction-budget-tracker)

## Key Takeaways

1. **Separate business and personal finances completely.** No exceptions. Open dedicated accounts and run everything business-related through them.

2. **Track income and expenses by job.** Without job-level visibility, you can't tell which projects are actually profitable.

3. **Update weekly, not monthly.** Fifteen minutes every Monday prevents the three-hour panic session at tax time.

4. **Set aside 25-30% for taxes as you go.** Transfer it to a separate savings account so you're not scrambling when quarterly estimates are due.

5. **Review the Job Dashboard before every bid.** If your last three kitchens averaged 18% profit, bid the next one at a price that delivers 18%—not the 25% you wish you were making.

6. **Use your data to make decisions.** Bookkeeping isn't just record-keeping. It's business intelligence. The contractors who know their numbers win.