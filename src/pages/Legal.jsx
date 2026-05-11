import PageShell from "../components/PageShell";

function Section({ title, children }) {
  return (
    <section className="container-x mt-10 max-w-3xl">
      <h2 className="font-serif text-2xl text-earth-50">{title}</h2>
      <div className="mt-3 text-earth-200 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export function Privacy() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="How Fishing & Outdoor Club collects, uses, and protects your information. Last updated May 11, 2026."
    >
      <Section title="1. Introduction">
        <p>
          Fishing &amp; Outdoor Club ("we", "us", "our") publishes outdoor lifestyle
          content at fishingoutdoorclub.com. This Privacy Policy explains what
          personal information we collect, how we use it, and the choices you have.
          By using our website you agree to the practices described here.
        </p>
      </Section>
      <Section title="2. Information We Collect">
        <p>
          We collect information you provide directly (name, email when you subscribe
          to our newsletter or contact us), and information collected automatically
          (IP address, browser type, device, pages viewed) through analytics tools
          such as Google Analytics. We do not collect financial account numbers.
        </p>
      </Section>
      <Section title="3. How We Use Information">
        <p>
          We use information to deliver newsletters you opted into, respond to your
          messages, measure aggregate traffic, improve the magazine, and prevent
          abuse. We never sell your personal information.
        </p>
      </Section>
      <Section title="4. Cookies & Consent Mode">
        <p>
          We use cookies for analytics and basic site functionality. We honor Google
          Consent Mode v2: analytics and advertising storage are denied by default
          until you accept via our cookie banner. You can change your choice anytime
          by clearing your browser storage.
        </p>
      </Section>
      <Section title="5. Third-Party Services">
        <p>
          We use Google Analytics for measurement, an email service for newsletter
          delivery, and a hosting provider for the site. These providers process
          information on our behalf under their own privacy terms.
        </p>
      </Section>
      <Section title="6. Data Retention">
        <p>
          Newsletter emails are retained until you unsubscribe. Analytics data is
          retained for up to 26 months. Contact messages are retained up to two
          years for context unless you ask us to delete them sooner.
        </p>
      </Section>
      <Section title="7. Your Rights">
        <p>
          Depending on where you live, you may have rights to access, correct, port,
          or delete your data, and to opt out of certain processing. Email
          fishingoutdoorclub@gmail.com to make a request and we will respond within
          30 days.
        </p>
      </Section>
      <Section title="8. Children's Privacy">
        <p>
          The site is not directed at children under 13. We do not knowingly collect
          information from children under 13. If you believe a child has provided us
          with personal information, please contact us so we can delete it.
        </p>
      </Section>
      <Section title="9. International Transfers">
        <p>
          We are based in the United States. If you access the site from outside the
          U.S., your information will be transferred to and processed in the U.S.
        </p>
      </Section>
      <Section title="10. Security">
        <p>
          We use reasonable administrative, technical, and physical measures to
          protect your information. No method of transmission is 100% secure.
        </p>
      </Section>
      <Section title="11. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will post the
          updated version with a new "last updated" date.
        </p>
      </Section>
      <Section title="12. Contact">
        <p>
          Email: fishingoutdoorclub@gmail.com<br />
          Mailing address: 89 Lakeview Blvd, Denver, CO 80201, USA
        </p>
      </Section>
    </PageShell>
  );
}

export function Terms() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Service"
      description="The agreement between you and Fishing & Outdoor Club when you use our website, content, or community."
    >
      {[
        ["1. Acceptance of Terms", "By accessing or using fishingoutdoorclub.com you agree to be bound by these Terms. If you do not agree, do not use the site."],
        ["2. Eligibility", "You must be at least 13 years old to use the site. Some services may require you to be 18 or older."],
        ["3. Account & Newsletter", "If you subscribe to our newsletter, you agree to provide accurate information and to receive communications. You may unsubscribe anytime."],
        ["4. Acceptable Use", "You agree not to misuse the site: no scraping at unreasonable volume, no attempts to bypass security, no harassing other members, no posting illegal content."],
        ["5. Editorial Content", "All articles, photographs, videos, and guides are © Fishing & Outdoor Club or licensed to us. You may share short excerpts with attribution and a link back; full reposting requires written permission."],
        ["6. User Submissions", "If you submit a trip report, photo, or comment, you grant us a non-exclusive, royalty-free license to publish, edit, and promote it. You retain ownership."],
        ["7. Outdoor Safety Disclaimer", "Outdoor activities carry inherent risk. Our content is general information, not personal advice. You are responsible for your own safety, fitness, and decisions in the field."],
        ["8. Third-Party Links", "We sometimes link to third-party sites and gear retailers. We are not responsible for their content, practices, or products."],
        ["9. Affiliate Disclosure", "Some links may be affiliate links. We only recommend gear we've tested. Editorial decisions are not influenced by affiliate relationships."],
        ["10. Intellectual Property", "Our trademarks, logos, and brand assets may not be used without prior written permission."],
        ["11. Disclaimers", "The site is provided 'as is' without warranties of any kind. We do not guarantee uptime, accuracy, or fitness for a particular purpose."],
        ["12. Limitation of Liability", "To the maximum extent permitted by law, Fishing & Outdoor Club is not liable for any indirect, incidental, or consequential damages arising from your use of the site or our content."],
        ["13. Indemnification", "You agree to indemnify and hold us harmless from any claim arising out of your misuse of the site or violation of these Terms."],
        ["14. Termination", "We may suspend or terminate access at our discretion if these Terms are violated."],
        ["15. Governing Law", "These Terms are governed by the laws of the State of Colorado, USA, without regard to conflict-of-law principles. Disputes will be heard in courts located in Denver County, Colorado."],
        ["16. Changes to These Terms", "We may update these Terms at any time. Continued use after changes constitutes acceptance."],
        ["17. Contact", "Questions about these Terms: fishingoutdoorclub@gmail.com — 89 Lakeview Blvd, Denver, CO 80201, USA."],
      ].map(([title, body]) => (
        <Section key={title} title={title}>
          <p>{body}</p>
        </Section>
      ))}
    </PageShell>
  );
}

export function Refund() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Refund Policy"
      description="Our promise on subscriptions, gear shop orders, and digital downloads."
    >
      <Section title="1. Overview">
        <p>
          We want you to feel good about supporting independent outdoor writing. This
          Refund Policy covers paid subscriptions, our outdoor gear shop, and digital
          guides or downloads.
        </p>
      </Section>
      <Section title="2. Paid Subscriptions">
        <p>
          Annual subscriptions may be refunded within 30 days of purchase for any
          reason — prorated refunds may be offered thereafter at our discretion.
          Monthly subscriptions may be canceled anytime; the current month remains
          active until the end of the billing period.
        </p>
      </Section>
      <Section title="3. Physical Gear Shop Orders">
        <p>
          Unused gear in original condition may be returned within 30 days of
          delivery for a full refund minus return shipping. Items damaged in transit
          will be replaced or refunded — please notify us within 7 days of delivery
          with photos.
        </p>
      </Section>
      <Section title="4. Digital Downloads">
        <p>
          Digital guides and downloadable content are non-refundable once accessed.
          If you experienced a technical issue downloading the file, contact us
          within 7 days and we will resolve it.
        </p>
      </Section>
      <Section title="5. How to Request a Refund">
        <p>
          Email fishingoutdoorclub@gmail.com with your order number and a brief
          explanation. We respond to refund requests within 3 business days and
          process approved refunds within 5–10 business days to your original
          payment method.
        </p>
      </Section>
      <Section title="6. Exceptions">
        <p>
          Final-sale items, gift cards, and shipping fees are non-refundable. We
          may decline refunds for repeated, fraudulent, or abusive return patterns.
        </p>
      </Section>
      <Section title="7. Contact">
        <p>
          Refund questions: fishingoutdoorclub@gmail.com — 89 Lakeview Blvd,
          Denver, CO 80201, USA.
        </p>
      </Section>
    </PageShell>
  );
}
