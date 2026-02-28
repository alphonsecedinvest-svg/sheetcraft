import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | SheetCraft',
  description: 'SheetCraft refund policy — 30-day money-back guarantee on all digital products.',
};

export default function RefundPolicyPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-neutral prose-sm sm:prose-base">
          <h1 className="text-3xl font-bold tracking-tight text-sc-text mb-2">Refund Policy</h1>
          <p className="text-sc-text-muted text-sm mb-10">Last updated: February 28, 2026</p>

          <p>
            At SheetCraft, we stand behind the quality of our templates. We offer a straightforward
            <strong> 30-day money-back guarantee</strong> on all purchases.
          </p>

          <h2>30-Day Money-Back Guarantee</h2>
          <p>
            If you are not satisfied with your purchase for any reason, you may request a full refund
            within <strong>30 days</strong> of the original purchase date. No questions asked.
          </p>

          <h2>How to Request a Refund</h2>
          <ol>
            <li>
              Email us at <a href="mailto:support@sheetcraft.com">support@sheetcraft.com</a> with
              your order number or the email used at checkout.
            </li>
            <li>We will process your refund within <strong>2 business days</strong>.</li>
            <li>
              The refund will be issued through Lemon Squeezy (our payment provider) to your
              original payment method. Please allow <strong>5–10 business days</strong> for the
              refund to appear on your statement.
            </li>
          </ol>

          <h2>After 30 Days</h2>
          <p>
            Refund requests received after the 30-day window will be reviewed on a case-by-case
            basis. We&apos;ll do our best to find a fair solution.
          </p>

          <h2>Important Notes</h2>
          <ul>
            <li>
              <strong>Digital products:</strong> Because our templates are delivered as downloadable
              files, we cannot &quot;take back&quot; the product. The refund is based entirely on
              the honor system and our trust in our customers.
            </li>
            <li>
              <strong>Abuse:</strong> We reserve the right to refuse refunds in cases of clear abuse
              (e.g., repeated purchases and refund requests).
            </li>
            <li>
              <strong>Currency:</strong> Refunds are issued in the original currency of purchase (USD).
              Exchange rate differences are not covered.
            </li>
          </ul>

          <h2>Contact</h2>
          <p>
            Questions about a refund? Reach out to us:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@sheetcraft.com">support@sheetcraft.com</a></li>
            <li><strong>Response time:</strong> Within 24 hours on business days.</li>
          </ul>

          <p className="text-sc-text-muted text-sm mt-8">
            SheetCraft is operated by Cedinvest SA, Route d&apos;Autafond 10, 1782 Belfaux, Switzerland (CHE-102.555.321).
          </p>
        </div>
      </Container>
    </main>
  );
}
