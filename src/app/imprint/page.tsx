import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imprint | SheetCraft',
  description: 'Legal notice and company information for SheetCraft.',
};

export default function ImprintPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-neutral prose-sm sm:prose-base">
          <h1 className="text-3xl font-bold tracking-tight text-sc-text mb-2">Imprint</h1>
          <p className="text-sc-text-muted text-sm mb-10">Legal Notice (Impressum)</p>

          <h2>Company Information</h2>
          <ul>
            <li><strong>Company Name:</strong> Cedinvest SA</li>
            <li><strong>Legal Form:</strong> Société Anonyme (Corporation) under Swiss law</li>
            <li><strong>Registered Office:</strong> Route d&apos;Autafond 10, 1782 Belfaux, Switzerland</li>
            <li><strong>Company Registration:</strong> CHE-102.555.321 (Canton of Fribourg)</li>
            <li><strong>Incorporated:</strong> December 1, 1976</li>
          </ul>

          <h2>Authorized Representative</h2>
          <ul>
            <li><strong>Name:</strong> Aurèle Schaller, Administrator</li>
            <li><strong>Authority:</strong> Individual signatory</li>
          </ul>

          <h2>Contact</h2>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@sheetcraft.com">support@sheetcraft.com</a></li>
            <li><strong>Website:</strong> <a href="https://sheetcraft.com">sheetcraft.com</a></li>
          </ul>

          <h2>VAT</h2>
          <p>
            Cedinvest SA is not currently registered for Swiss VAT. Sales tax on digital products
            sold internationally is handled by our Merchant of Record, Lemon Squeezy LLC, which
            calculates and collects applicable VAT/sales tax based on the buyer&apos;s location.
          </p>

          <h2>Hosting</h2>
          <ul>
            <li><strong>Website hosting:</strong> Vercel Inc., San Francisco, CA, USA</li>
            <li><strong>Payment processing:</strong> Lemon Squeezy LLC (Merchant of Record)</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content published on sheetcraft.com — including text, graphics, logos, images,
            template designs, spreadsheet formulas, and software — is the intellectual property
            of Cedinvest SA unless otherwise noted. Reproduction, distribution, or any form of
            commercial use without prior written consent is prohibited.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The information and templates provided on this website are for general informational
            purposes only. They do not constitute financial, legal, tax, or professional advice.
            Cedinvest SA makes no guarantees regarding the accuracy or completeness of any
            information and assumes no liability for decisions made based on the use of our products.
          </p>
          <p>
            External links on this website lead to third-party content for which we assume no
            responsibility.
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            We are committed to resolving disputes amicably. If you have a complaint, please
            contact us at <a href="mailto:support@sheetcraft.com">support@sheetcraft.com</a>.
          </p>
          <p>
            The European Commission provides an online dispute resolution platform at{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>. We are neither obligated nor willing to participate in online dispute resolution
            proceedings before a consumer arbitration board.
          </p>
        </div>
      </Container>
    </main>
  );
}
