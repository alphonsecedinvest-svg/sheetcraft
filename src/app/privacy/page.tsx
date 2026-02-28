import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SheetCraft',
  description: 'Privacy Policy for SheetCraft — how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-neutral prose-sm sm:prose-base">
          <h1 className="text-3xl font-bold tracking-tight text-sc-text mb-2">Privacy Policy</h1>
          <p className="text-sc-text-muted text-sm mb-10">Last updated: February 28, 2026</p>

          <p>
            This Privacy Policy describes how <strong>Cedinvest SA</strong> (&quot;we&quot;, &quot;us&quot;),
            operator of SheetCraft (sheetcraft.com), collects, uses, and protects your personal data.
            We are committed to protecting your privacy in accordance with the Swiss Federal Act on
            Data Protection (FADP/nDSG) and, where applicable, the EU General Data Protection
            Regulation (GDPR).
          </p>

          <h2>1. Data Controller</h2>
          <ul>
            <li><strong>Company:</strong> Cedinvest SA</li>
            <li><strong>Address:</strong> Route d&apos;Autafond 10, 1782 Belfaux, Switzerland</li>
            <li><strong>Registration:</strong> CHE-102.555.321</li>
            <li><strong>Contact:</strong> <a href="mailto:privacy@sheetcraft.com">privacy@sheetcraft.com</a></li>
          </ul>

          <h2>2. Data We Collect</h2>

          <h3>2.1 Information you provide</h3>
          <ul>
            <li><strong>Purchase data:</strong> Name, email address, billing country — collected by
              Lemon Squeezy (our payment processor and Merchant of Record) to process your order.</li>
            <li><strong>Support communications:</strong> Email address and message content when you
              contact us.</li>
          </ul>

          <h3>2.2 Automatically collected data</h3>
          <ul>
            <li><strong>Analytics:</strong> We use privacy-friendly analytics to understand website
              traffic. This may include anonymized page views, referral sources, browser type,
              and approximate location (country level).</li>
            <li><strong>Cookies:</strong> See Section 6 below.</li>
          </ul>

          <h3>2.3 Data we do NOT collect</h3>
          <ul>
            <li>We do not store credit card numbers or payment details — these are handled entirely
              by Lemon Squeezy.</li>
            <li>We do not collect sensitive personal data (health, religion, biometrics, etc.).</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <ul>
            <li><strong>Order fulfillment:</strong> To deliver your purchased digital products.</li>
            <li><strong>Customer support:</strong> To respond to your inquiries and resolve issues.</li>
            <li><strong>Product improvement:</strong> To understand how our templates are used and
              improve our offerings.</li>
            <li><strong>Legal compliance:</strong> To comply with applicable laws, regulations, and
              legal processes.</li>
            <li><strong>Marketing (opt-in only):</strong> To send product updates or promotions,
              only if you have explicitly consented. You can unsubscribe at any time.</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <ul>
            <li><strong>Contract performance:</strong> Processing necessary to fulfill your purchase.</li>
            <li><strong>Legitimate interest:</strong> Analytics and website improvement.</li>
            <li><strong>Consent:</strong> Marketing communications and non-essential cookies.</li>
            <li><strong>Legal obligation:</strong> Tax and accounting requirements.</li>
          </ul>

          <h2>5. Data Sharing &amp; Third Parties</h2>
          <p>We share your data only with the following categories of service providers:</p>
          <ul>
            <li><strong>Lemon Squeezy</strong> (payment processing, order management) — USA.
              Acts as Merchant of Record.</li>
            <li><strong>Vercel</strong> (website hosting) — USA.</li>
            <li><strong>Email service provider</strong> (transactional emails) — if applicable.</li>
            <li><strong>Meta Platforms</strong> (advertising pixel, if active) — see Section 7.</li>
          </ul>
          <p>
            Where data is transferred outside Switzerland or the EEA, we ensure appropriate safeguards
            are in place (e.g., Standard Contractual Clauses, adequacy decisions).
          </p>
          <p>We do not sell your personal data to third parties.</p>

          <h2>6. Cookies</h2>
          <p>Our website uses the following types of cookies:</p>
          <ul>
            <li><strong>Essential cookies:</strong> Required for the website to function (e.g., session
              management). No consent needed.</li>
            <li><strong>Analytics cookies:</strong> Help us understand traffic patterns. Anonymized
              where possible.</li>
            <li><strong>Marketing cookies:</strong> Used for advertising measurement (e.g., Meta Pixel).
              Only activated with your consent.</li>
          </ul>
          <p>
            You can manage cookie preferences through your browser settings. Disabling cookies may
            affect website functionality.
          </p>

          <h2>7. Advertising &amp; Meta Pixel</h2>
          <p>
            We may use the Meta (Facebook) Pixel and Conversions API to measure advertising
            effectiveness and deliver relevant ads. This technology collects data about your
            interactions with our website and shares it with Meta Platforms, Inc.
          </p>
          <p>
            Data collected may include: pages visited, products viewed, purchases made (no payment
            details), device information, and IP address. This data is used to:
          </p>
          <ul>
            <li>Measure the performance of our advertising campaigns.</li>
            <li>Create custom audiences for targeted advertising.</li>
            <li>Optimize ad delivery.</li>
          </ul>
          <p>
            You can opt out of interest-based advertising through your{' '}
            <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer">
              Meta ad preferences
            </a>{' '}
            or through the{' '}
            <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">
              Digital Advertising Alliance opt-out
            </a>.
          </p>

          <h2>8. Data Retention</h2>
          <ul>
            <li><strong>Purchase records:</strong> Retained for 10 years (Swiss accounting obligations).</li>
            <li><strong>Support emails:</strong> Retained for 2 years after last interaction.</li>
            <li><strong>Analytics data:</strong> Anonymized and retained for up to 26 months.</li>
            <li><strong>Marketing data:</strong> Until you withdraw consent.</li>
          </ul>

          <h2>9. Your Rights</h2>
          <p>Under the Swiss FADP and GDPR (where applicable), you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data.</li>
            <li><strong>Rectification:</strong> Correct inaccurate data.</li>
            <li><strong>Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;).</li>
            <li><strong>Data portability:</strong> Receive your data in a structured, machine-readable format.</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interest.</li>
            <li><strong>Withdraw consent:</strong> At any time, without affecting prior processing.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:privacy@sheetcraft.com">privacy@sheetcraft.com</a>.
            We will respond within 30 days.
          </p>

          <h2>10. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            data, including HTTPS encryption, secure hosting, access controls, and regular security
            reviews.
          </p>

          <h2>11. Children&apos;s Privacy</h2>
          <p>
            Our products and website are not intended for individuals under 16 years of age.
            We do not knowingly collect data from minors. If you believe we have collected data
            from a minor, please contact us immediately.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated date. We encourage you to review this policy periodically.
          </p>

          <h2>13. Supervisory Authority</h2>
          <p>
            If you believe your data protection rights have been violated, you have the right to
            lodge a complaint with the{' '}
            <a href="https://www.edoeb.admin.ch/" target="_blank" rel="noopener noreferrer">
              Federal Data Protection and Information Commissioner (FDPIC)
            </a>{' '}
            in Switzerland, or with your local data protection authority if you are in the EU/EEA.
          </p>

          <h2>14. Contact</h2>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:privacy@sheetcraft.com">privacy@sheetcraft.com</a></li>
            <li><strong>Company:</strong> Cedinvest SA</li>
            <li><strong>Address:</strong> Route d&apos;Autafond 10, 1782 Belfaux, Switzerland</li>
          </ul>
        </div>
      </Container>
    </main>
  );
}
