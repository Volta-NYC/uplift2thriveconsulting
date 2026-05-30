import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your access to and use of the Uplift 2 Thrive Consulting website.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="January 1, 2026">
      <p>
        Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before
        using the <a href={site.url}>{site.url}</a> website (the
        &ldquo;Website&rdquo;) operated by {site.legalName}, a Limited Liability
        Company formed in New York, United States. These Terms contain important
        information regarding limitations of our liability. Your access to and use
        of this Website is conditional upon your acceptance of and compliance with
        these Terms. By accessing or using the Website, you agree to be bound by
        them.
      </p>

      <h2>Prohibited uses</h2>
      <p>
        You agree to use this Website in accordance with all applicable laws and
        these Terms at all times. The following is a non-exhaustive list of
        prohibited uses. You agree that you will not:
      </p>
      <ul>
        <li>Impersonate or attempt to impersonate {site.legalName} or its representatives</li>
        <li>Misrepresent your identity or affiliation with any person or entity</li>
        <li>Send advertising or promotional material, including spam or chain mail</li>
        <li>Engage in conduct that restricts or inhibits any person&rsquo;s use of the Website</li>
        <li>Use the Website in a manner that could disable, overburden, or impair it</li>
        <li>Use any robot, spider, or automated means to access or copy material</li>
        <li>Introduce viruses, trojan horses, worms, logic bombs, or other harmful materials</li>
        <li>Attempt to gain unauthorized access to any part of the Website or its servers</li>
        <li>Attack the Website via a denial-of-service or distributed denial-of-service attack</li>
        <li>Use the Website in any way that violates applicable laws or regulations</li>
      </ul>

      <h2>No warranty on website</h2>
      <p>
        This Website is provided &ldquo;as is.&rdquo; No warranty, express or
        implied — including any implied warranty of merchantability, satisfactory
        quality, or fitness for a particular purpose — shall apply to this
        Website, whether arising by law, course of dealing, course of
        performance, usage of trade, or otherwise.
      </p>

      <h2>Availability, errors and inaccuracies</h2>
      <p>
        We assume no liability for the availability, errors, or inaccuracies of
        the information, products, or services provided on this Website.
        Information may contain errors or may not be complete or current, and
        products or services may be incorrectly priced or unavailable. We reserve
        the right to correct any pricing errors. The inclusion or offering of any
        product or service does not constitute an endorsement or recommendation
        by us.
      </p>

      <h2>Damages and limitation of liability</h2>
      <p>
        In no event shall {site.legalName} be liable for any direct, indirect,
        punitive, incidental, special, or consequential damages arising out of,
        relating to, or in any way connected with your access to, display of, or
        use of this Website — whether based on negligence, contract, tort, strict
        liability, consumer protection statutes, or otherwise — even if we have
        been advised of the possibility of such damages.
      </p>
      <p>
        The aggregate liability of {site.legalName} arising out of or relating to
        this Website shall be limited to the amount of fees actually received by{" "}
        {site.legalName} from you. This limitation reflects the allocation of risk
        between you and us and will survive even if any limited remedy is found to
        have failed of its essential purpose.
      </p>

      <h2>Links to third-party websites</h2>
      <p>
        This Website may contain hyperlinks to websites operated by third parties.
        We provide these for your reference only, do not control such websites,
        and are not responsible for their contents or practices. It is your
        responsibility to ensure that anything you click or download is free of
        viruses or other destructive items. Our inclusion of hyperlinks does not
        imply any endorsement or association.
      </p>

      <h2>Intellectual property &amp; DMCA</h2>
      <p>
        All contents of this Website are © 2023–2026 {site.legalName} or third
        parties. All rights reserved. Unless specified otherwise, all logos,
        designs, text, graphics, pictures, information, data, software, and sound
        files are the proprietary property of {site.legalName} or third parties.
      </p>
      <p>
        If you believe in good faith that content on the Website infringes your
        intellectual property rights, you may send us a written notice titled
        &ldquo;Infringement of Intellectual Property Rights — DMCA&rdquo;
        including: a signature of the authorized person; a description of the work
        and its URL; your name, email, address, and telephone number; and a
        good-faith statement that the disputed use is not authorized. Submit
        claims to Chanté Ramsey at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>,{" "}
        {site.phone}, {site.address.line1}, {site.address.city},{" "}
        {site.address.state} {site.address.zip}, {site.address.country}.
      </p>

      <h2>Governing law &amp; dispute resolution</h2>
      <p>
        These Terms are governed by the laws of the State of New York, United
        States, without regard to conflict-of-laws provisions. Our failure to
        enforce any right or provision will not be considered a waiver. If any
        provision is held invalid, the remaining provisions remain in effect. Any
        controversy or claim arising out of or relating to these Terms shall be
        resolved in a court of competent jurisdiction in Kings County, New York.
        You and {site.legalName} agree that each may bring claims against the
        other only in an individual capacity, and not as a plaintiff or class
        member in any class or representative action.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We reserve the right to make changes to these Terms of Service at any
        time. If you have any questions, please contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
