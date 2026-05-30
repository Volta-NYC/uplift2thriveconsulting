import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Uplift 2 Thrive Consulting LLC collects, uses, shares, and protects your personal information.",
};

const contactBlock = (
  <p>
    Chanté Ramsey, CEO
    <br />
    <a href={`mailto:${site.email}`}>{site.email}</a>
    <br />
    <a href={site.phoneHref}>{site.phone}</a>
    <br />
    {site.address.line1}, {site.address.city}, {site.address.state}{" "}
    {site.address.zip}, {site.address.country}
  </p>
);

export default function PrivacyPolicyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="December 1, 2025">
      <p>
        We value your privacy very highly. Please read this Privacy Policy
        carefully before using the{" "}
        <a href={site.url}>{site.url}</a> website (the &ldquo;Website&rdquo;)
        operated by {site.legalName}, a Limited Liability Company formed in New
        York, United States (&ldquo;us&rdquo;, &ldquo;we&rdquo;,
        &ldquo;our&rdquo;), as this Privacy Policy contains important information
        regarding your privacy and how we may use the information we collect
        about you.
      </p>
      <p>
        Your access to or use of the Website is conditional upon your acceptance
        of and compliance with this Privacy Policy, which applies to everyone who
        wishes to access or use the Website. By accessing or using the Website,
        you agree to be bound by this Privacy Policy.
      </p>

      <h2>What information we collect and store</h2>
      <p>
        We collect and store information that you enter on this Website, as well
        as information gathered automatically, including:
      </p>
      <ul>
        <li>
          <strong>Identifying information</strong> — name, phone number, email
          address, IP address, and device identifier.
        </li>
        <li>
          <strong>Internet or electronic activity</strong> — information about
          your interactions with our website, application, and advertisements.
        </li>
        <li>
          <strong>Sensitive personal information</strong> — geolocation
          information.
        </li>
      </ul>
      <p>
        Information submitted by you (name, phone, email) is used to perform our
        services, audit transactions, provide customer service, process
        payments, market our offerings, and verify your information. Information
        gathered through cookies and tracking pixels (IP address, device
        identifier, activity, geolocation) is used primarily for analytics. We
        are not required by law to collect this information, and we do not combine
        or link the personal information that we hold about you.
      </p>

      <h2>With whom we share your personal information</h2>
      <p>
        We share your identifying information (name, phone, email) with content
        and customer management systems, email service providers, financial
        transaction processors, and hosting providers — to manage our
        interactions with you, analyze your interactions, process transactions,
        and enforce our Terms of Service. Activity and geolocation data may be
        shared with data analytics providers to analyze interactions and serve
        advertisements. These third parties will store the personal information
        provided to them.
      </p>

      <h2>How we protect your personal information</h2>
      <ul>
        <li>Limiting the personal information we collect to strictly necessary only</li>
        <li>Using SSL encryption or other secure technologies beyond internal networks</li>
        <li>Destroying and/or deleting personal information once it is no longer needed</li>
        <li>Requiring our employees to sign confidentiality agreements</li>
        <li>Implementing and monitoring intrusion prevention and detection systems</li>
        <li>Maintaining up-to-date software and safeguards</li>
      </ul>

      <h2>Sale of your information</h2>
      <p>We do not sell your personal information.</p>

      <h2>Cookies</h2>
      <p>
        A cookie is a small piece of data stored on your device by your browser.
        This Website sets cookies to analyze traffic and ad interactions,
        identify whether you are signed in, test content, store your preferences,
        and recognize you when you return. Most browsers accept cookies
        automatically; you can modify your browser settings to decline them,
        though this may prevent you from taking full advantage of the Website.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        This Website is intended for a general audience and does not offer
        services to children. Should a child whom we know to be under 18 send us
        personal information, we will use it only to inform them that they cannot
        use this Website.
      </p>

      <h2>Analytics programs</h2>
      <p>
        This Website uses Google Analytics. To opt out, please visit{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout/"
          target="_blank"
          rel="noopener noreferrer"
        >
          tools.google.com/dlpage/gaoptout
        </a>
        .
      </p>

      <h2>Your rights</h2>
      <p>
        All visitors and users of this Website have rights regarding their
        personal information, including the right to:
      </p>
      <ol>
        <li>Access the personal information we hold about you</li>
        <li>Receive it in a portable, readily usable format</li>
        <li>Ask us to transmit it to another provider where technically feasible</li>
        <li>Request that we amend information we have collected about you</li>
        <li>Withdraw your consent to the processing of your personal information</li>
        <li>Request that we restrict processing of your personal information</li>
        <li>Request that we delete some or all of your personal information</li>
        <li>Lodge a complaint with the competent authorities</li>
        <li>Opt out of the use of your information for direct marketing</li>
        <li>Opt out of sales of your personal information</li>
        <li>Use a pseudonym in certain circumstances</li>
        <li>Opt out of tracking of your location</li>
        <li>Opt out of profiling and automated decision-making</li>
      </ol>

      <h2>Exercising your rights</h2>
      <p>
        You may exercise the rights above by submitting a consumer request to:
      </p>
      {contactBlock}
      <p>
        We will need to verify your identity (name, phone number, email address)
        prior to effectuating your request, and will respond to most requests
        within 30 days of receipt.
      </p>

      <h2>Complaints &amp; accountability</h2>
      <p>
        Chanté Ramsey is accountable and responsible for our privacy practices
        and procedures. You may lodge a complaint by contacting:
      </p>
      {contactBlock}

      <h2>Location of data processing</h2>
      <p>All data processing activities undertaken by us take place in North America.</p>

      <h2>Do Not Track</h2>
      <p>
        We do not support the &ldquo;Do Not Track&rdquo; browser preference. You
        can enable or disable it via your browser&rsquo;s settings.
      </p>

      <h2>Changes to this Privacy Policy</h2>
      <p>
        We reserve the right to amend this Privacy Policy at any time and will
        notify you of changes by posting the updated policy to this website. If
        you have any questions, please contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
