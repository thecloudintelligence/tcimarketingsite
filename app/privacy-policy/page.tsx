import Link from 'next/link'
import Navbar from '../components/Navbar'
import Scripts from '../components/Scripts'
import SiteFooter from '../components/SiteFooter'

export const metadata = {
  title: 'Privacy Policy - The Cloud Intelligence Inc.',
  description: 'Privacy Policy for The Cloud Intelligence Inc.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main
        className="legal-page"
        style={{ background: '#ffffff', minHeight: '100vh', color: '#1f2937', paddingTop: '120px', paddingBottom: '80px' }}
      >
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ color: '#111827', fontSize: '42px', marginBottom: '10px' }}>Privacy Policy</h1>
          <p style={{ color: '#4b5563', marginBottom: '30px' }}>Effective Date: April 28, 2026 | Last Updated: April 28, 2026</p>
          <h2 style={{ color: '#111827', marginTop: '30px' }}>1. Introduction</h2>
          <p>
            The Cloud Intelligence Inc. (&quot;TCI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a United States-based technology company that provides IT
            consulting, AI and cloud solutions, managed services, and product development. This Privacy Policy explains
            how we collect, use, protect, share, and retain information in connection with our website, business
            operations, and client engagements.
          </p>
          <p>
            Privacy is a core operating principle at TCI. We apply confidentiality, access control, and security
            standards across all services and relationships to ensure information is handled responsibly and lawfully.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>2. Scope of This Policy</h2>
          <p>
            This policy applies broadly to TCI&apos;s public website interactions, business development communications, client
            delivery activities, and supporting vendor relationships. Where a client agreement, data processing addendum,
            business associate agreement, or other contract includes stricter privacy terms, those contractual terms
            govern the relevant engagement.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>3. Information We Collect</h2>
          <p>
            We collect information in several contexts. Through our website, we collect technical and usage data such as
            browser type, device attributes, pages visited, timestamps, referring URLs, and approximate regional location
            inferred from IP address. When you contact us, we may collect business contact information such as your name,
            email address, phone number, job title, company name, and inquiry details.
          </p>
          <p>
            During client engagements, we may access business, technical, and operational information necessary to
            provide contracted services. Depending on scope, this may include architecture documents, source code,
            configuration data, and information contained in client-managed systems.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>4. Lawful Basis and Consent</h2>
          <p>
            We process information under recognized legal bases, including contractual necessity, legitimate interests,
            legal obligation, and consent where required. When consent is the legal basis, it can be withdrawn at any
            time without affecting prior lawful processing.
          </p>
          <p>
            For sensitive or regulated data, including protected health information where applicable, we apply additional
            safeguards and process data only under valid legal and contractual authority.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>5. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies for core site functionality, performance analytics, and preference
            management. We may use trusted analytics tools such as Google Analytics for aggregate reporting. You can
            manage cookie settings through your browser and use available opt-out tools where supported.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>6. How We Use Information</h2>
          <p>
            We use information to operate and improve services, respond to inquiries, deliver contracted work, maintain
            security, perform quality and risk management, and comply with legal, regulatory, and contractual
            obligations. We do not repurpose client data for unrelated commercial use without explicit authorization.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>7. Data Sharing and Disclosure</h2>
          <p>
            We do not sell personal information. We may share information with vetted service providers and delivery
            partners when necessary for legitimate business operations and only under appropriate contractual protections.
            We may also disclose information when legally required, to protect rights and safety, or in connection with a
            merger, acquisition, or restructuring.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>8. Cross-Border Transfers</h2>
          <p>
            Because TCI operates across jurisdictions, information may be transferred internationally as part of service
            delivery or support. Where required, we use recognized transfer mechanisms and contractual safeguards to
            maintain an appropriate level of protection for transferred data.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>9. Data Security</h2>
          <p>
            We apply layered administrative, technical, and physical safeguards, including encryption in transit, access
            controls, role-based permissions, secure credential handling, and monitored operational controls. We maintain
            incident response procedures for detection, containment, remediation, and required notifications.
          </p>
          <p>
            No method of transmission or storage is absolutely secure; however, we continuously improve controls to
            reduce risk and maintain resilience.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>10. Privacy by Design and Workforce Standards</h2>
          <p>
            TCI follows privacy-by-design principles by embedding privacy and data minimization into solution planning,
            architecture, and delivery workflows. Access is granted on a least-privilege basis and reviewed regularly.
            Employees, contractors, and partners are bound by confidentiality obligations and are expected to follow
            defined handling standards for sensitive information.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>11. Individual Privacy Rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct, delete, restrict, or object to
            processing of your personal information, and to receive data portability where applicable. You may also have
            rights related to consent withdrawal and non-discrimination. We respond to verified requests in accordance
            with applicable legal timelines.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>12. Regulatory Compliance</h2>
          <p>
            Our privacy and security program is designed to align with applicable U.S. federal and state privacy laws,
            HIPAA obligations where applicable, GDPR requirements for relevant data subjects, and Indian legal frameworks
            including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>13. Data Retention</h2>
          <p>
            We retain information only as long as necessary for legitimate business purposes, legal compliance,
            contractual requirements, and dispute resolution. At the end of applicable retention periods, data is deleted,
            returned, or irreversibly anonymized in accordance with policy and contract.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>14. Additional Disclosures and Updates</h2>
          <p>
            Our services are not directed to children under 13, and we do not knowingly collect personal information from
            children through our public channels. Our website may contain links to third-party sites governed by their
            own privacy practices. We may update this policy periodically to reflect legal, technical, and operational
            changes; updated versions are published with revised dates.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>15. Governing Law and Jurisdiction</h2>
          <p>
            This Privacy Policy is governed by applicable laws of the United States. Where relevant to operations in
            India or other jurisdictions with mandatory local privacy requirements, those requirements also apply to the
            extent required by law.
          </p>

          <h2 style={{ color: '#111827', marginTop: '30px' }}>16. Contact Information</h2>
          <p>
            The Cloud Intelligence Inc.
            <br />
            12600 Deerfield Pkwy, Suite 100
            <br />
            Alpharetta, GA 30004, United States
            <br />
            <a href="mailto:info@thecloudintelligence.com">info@thecloudintelligence.com</a>
            <br />
            <a href="tel:+14708615206">+1 470-861-5206</a>
          </p>

          <div style={{ marginTop: '36px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#1d4ed8' }}>
              Back to Home
            </Link>
            <Link href="/security-policy" style={{ color: '#1d4ed8' }}>
              Security Policy
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
      <Scripts />
    </>
  )
}
