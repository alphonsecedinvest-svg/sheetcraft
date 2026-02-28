import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | SheetCraft',
  description: 'Terms of Service for SheetCraft digital products.',
};

export default function TermsPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-neutral prose-sm sm:prose-base">
          <h1 className="text-3xl font-bold tracking-tight text-sc-text mb-2">Terms of Service</h1>
          <p className="text-sc-text-muted text-sm mb-10">Last updated: February 28, 2026</p>

          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the SheetCraft website
            at <strong>sheetcraft.com</strong> and purchase of digital products offered by
            <strong> Cedinvest SA</strong>, a company incorporated under the laws of Switzerland
            (CHE-102.555.321), with its registered office at Route d&apos;Autafond 10, 1782 Belfaux,
            Switzerland (&quot;we&quot;, &quot;us&quot;, &quot;Company&quot;).
          </p>
          <p>
            By accessing this website or purchasing any product, you agree to be bound by these Terms.
            If you do not agree, please do not use our services.
          </p>

          <h2>1. Products &amp; Delivery</h2>
          <p>
            SheetCraft sells digital spreadsheet templates in Microsoft Excel (.xlsx) and/or
            Google Sheets format. All products are delivered electronically via instant download
            after successful payment. No physical goods are shipped.
          </p>

          <h2>2. License &amp; Permitted Use</h2>
          <p>
            Upon purchase, you receive a <strong>personal, non-exclusive, non-transferable license</strong> to
            use the template for your own business or personal projects. You may:
          </p>
          <ul>
            <li>Use the template for unlimited personal or internal business projects.</li>
            <li>Modify, customize, and adapt the template to your needs.</li>
            <li>Print or share completed (filled-in) documents with clients, partners, or lenders.</li>
          </ul>
          <p>You may <strong>not</strong>:</p>
          <ul>
            <li>Resell, redistribute, sublicense, or share the original (blank) template file.</li>
            <li>Upload the template to any marketplace, file-sharing site, or public repository.</li>
            <li>Claim authorship of the template design or formulas.</li>
            <li>Use the template to create a competing product or service.</li>
          </ul>

          <h2>3. Pricing &amp; Payment</h2>
          <p>
            All prices are listed in US Dollars (USD) and are inclusive of applicable taxes unless
            otherwise stated. Payment is processed securely by our payment provider,{' '}
            <strong>Lemon Squeezy</strong> (Lemon Squeezy LLC), which handles all credit card and
            payment processing. We do not store your payment information.
          </p>
          <p>
            Lemon Squeezy acts as the Merchant of Record for all transactions. VAT/sales tax is
            calculated and collected by Lemon Squeezy based on your location, in compliance with
            applicable tax regulations.
          </p>

          <h2>4. Refund Policy</h2>
          <p>
            Due to the digital nature of our products, <strong>all sales are final</strong>. However,
            we want you to be fully satisfied:
          </p>
          <ul>
            <li>
              <strong>30-Day Money-Back Guarantee:</strong> If you are unsatisfied with your purchase
              for any reason, contact us within 30 days of purchase at{' '}
              <a href="mailto:support@sheetcraft.com">support@sheetcraft.com</a> and we will issue
              a full refund — no questions asked.
            </li>
            <li>
              Refund requests after 30 days will be reviewed on a case-by-case basis.
            </li>
            <li>
              Refunds are processed through Lemon Squeezy and typically appear within 5–10 business days.
            </li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, template designs, formulas,
            and software — is the property of Cedinvest SA or its licensors and is protected by
            Swiss and international copyright laws. The SheetCraft name and logo are trademarks of
            Cedinvest SA.
          </p>

          <h2>6. Disclaimer of Warranties</h2>
          <p>
            Our templates are provided &quot;as is&quot; and &quot;as available.&quot; While we strive
            for accuracy, the templates are tools to assist your work — they are <strong>not</strong>{' '}
            financial, legal, tax, or professional advice. You are solely responsible for verifying
            all calculations and data before making business decisions.
          </p>
          <p>
            We do not warrant that the templates will be error-free, uninterrupted, or suitable for
            any particular purpose. Use at your own risk and professional judgment.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Cedinvest SA shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages arising from your
            use of our products or website. Our total liability shall not exceed the amount you paid
            for the product in question.
          </p>

          <h2>8. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our website or products for any unlawful purpose.</li>
            <li>Attempt to reverse-engineer, decompile, or extract source formulas for redistribution.</li>
            <li>Interfere with the website&apos;s operation or security.</li>
            <li>Misrepresent your identity or affiliation when contacting support.</li>
          </ul>

          <h2>9. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party services (Lemon Squeezy, Microsoft, Google).
            We are not responsible for the content, privacy practices, or terms of these services.
          </p>

          <h2>10. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be posted on this
            page with an updated date. Your continued use of the website after changes constitutes
            acceptance of the revised Terms.
          </p>

          <h2>11. Governing Law &amp; Jurisdiction</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of Switzerland.
            Any disputes shall be subject to the exclusive jurisdiction of the courts of the
            Canton of Fribourg, Switzerland.
          </p>

          <h2>12. Contact</h2>
          <p>
            For any questions regarding these Terms, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@sheetcraft.com">support@sheetcraft.com</a></li>
            <li><strong>Company:</strong> Cedinvest SA</li>
            <li><strong>Address:</strong> Route d&apos;Autafond 10, 1782 Belfaux, Switzerland</li>
            <li><strong>Company Registration:</strong> CHE-102.555.321</li>
          </ul>
        </div>
      </Container>
    </main>
  );
}
