import Link from 'next/link'
import Navbar from '../components/Navbar'
import Scripts from '../components/Scripts'
import SiteFooter from '../components/SiteFooter'

export const metadata = {
  title: 'Security Policy - The Cloud Intelligence Inc.',
  description: 'Security policy and information security practices for The Cloud Intelligence Inc.',
}

export default function SecurityPolicyPage() {
  return (
    <>
      <Navbar />
      <main
        className="legal-page"
        style={{ background: '#ffffff', minHeight: '100vh', color: '#1f2937', paddingTop: '120px', paddingBottom: '80px' }}
      >
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ color: '#111827', fontSize: '42px', marginBottom: '10px' }}>Security Policy</h1>
          <p style={{ color: '#4b5563', marginBottom: '30px' }}>Last Updated: April 28, 2026</p>
          <p>
            Cloud Intelligence Inc. is a United States-based technology company providing product development, solution
            design, managed services, and consulting to clients across the country. The work we do and the information
            we handle in doing it demands a security posture that is rigorous, consistent, and worthy of the trust our
            clients place in us.
          </p>
          <p>
            This page describes how we approach information security across our organization, our client engagements, and
            the extended workforce we place with our clients.
          </p>

          <h2 style={{ color: '#eaeef9', marginTop: '30px' }}>Our Security Commitment</h2>
          <p>
            Security at Cloud Intelligence is not a compliance exercise. It is a core operating principle. We have built
            our security program around the understanding that our clients trust us with access to their systems, their
            data, and in many cases their customers&apos; information. That trust carries real responsibility, and we take
            it seriously.
          </p>
          <p>
            Our program is risk-based and continuously maintained. We assess our environment regularly, update our
            controls when circumstances change, and hold ourselves accountable through independent evaluation. Every
            person who works under the Cloud Intelligence name, whether a direct employee, a placed consultant, or a
            supporting vendor, is expected to uphold our security standards.
          </p>

          <h2 style={{ color: '#eaeef9', marginTop: '30px' }}>What We Protect</h2>
          <p>
            Depending on the nature of an engagement, the information in our care may include client business data,
            application source code and intellectual property, end-user personal information, and in certain engagements,
            protected health information or other sensitive regulated data. We apply controls appropriate to the
            sensitivity of each type of information and ensure that those controls follow the data regardless of where it
            lives or who is handling it.
          </p>

          <h2 style={{ color: '#eaeef9', marginTop: '30px' }}>How We Protect It</h2>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Encryption and Data Handling</h3>
          <p>
            Information is encrypted when it moves across networks and when it is stored. This applies to our own
            systems as well as to the environments we operate within on behalf of clients. We follow defined procedures
            for how data is classified, accessed, retained, and disposed of, and we ensure those procedures are
            understood and followed throughout the engagement lifecycle.
          </p>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Access and Identity</h3>
          <p>
            Access to systems and data is granted based on what each individual legitimately needs to perform their work.
            We enforce strong authentication requirements, including multi-factor verification, for access to sensitive
            systems and client environments. Access is reviewed regularly and removed without delay when a role ends or
            changes.
          </p>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Secure Delivery</h3>
          <p>
            Security is integrated into how we build and deliver. Whether we are developing a product, architecting a
            solution, or providing ongoing managed services, security considerations are part of the process from the
            start, not added on at the end. Our teams follow secure development practices, and the systems and solutions
            we deliver are reviewed for common vulnerabilities before they reach production.
          </p>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Vulnerability and Risk Management</h3>
          <p>
            We operate a structured vulnerability management process. Our systems and those under our management are
            assessed on a recurring basis. Identified risks are prioritized and addressed in order of their potential
            impact. We also conduct periodic independent security assessments to validate the effectiveness of our
            controls from an outside perspective.
          </p>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Monitoring and Response</h3>
          <p>
            Our environments are monitored continuously. Security events are logged, reviewed, and acted upon by
            qualified personnel. We maintain a formal incident response capability covering detection, containment,
            investigation, recovery, and post-incident review so that if something goes wrong, we are prepared to
            respond effectively and communicate transparently.
          </p>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Availability and Continuity</h3>
          <p>
            We maintain the infrastructure, backup procedures, and recovery plans necessary to keep our services and
            client commitments intact through disruptions. Our continuity capabilities are tested regularly to confirm
            they will function when needed.
          </p>

          <h2 style={{ color: '#eaeef9', marginTop: '30px' }}>Compliance and Standards</h2>
          <p>
            We design and operate our security program to meet the expectations of widely recognized information security
            standards. Our controls address the requirements of established trust frameworks covering security,
            availability, confidentiality, processing integrity, and privacy. Where our engagements involve health
            information or other regulated data categories, we apply the additional safeguards that U.S. law requires,
            including appropriate data handling agreements with clients and service providers.
          </p>
          <p>
            We comply with applicable U.S. federal and state laws governing data protection, privacy, and security. For
            clients in regulated industries, we are prepared to discuss the specific compliance requirements relevant to
            their environment and to demonstrate how our practices address them.
          </p>
          <p>
            As a general U.S. legal reference for commercial cybersecurity practices, we recognize Section 5 of the
            Federal Trade Commission (FTC) Act, which prohibits unfair or deceptive practices and is used by the FTC to
            enforce reasonable information security expectations.
          </p>

          <h2 style={{ color: '#eaeef9', marginTop: '30px' }}>Our People and the Extended Workforce</h2>
          <p>
            A significant part of what we do is placing skilled technology professionals with our clients to work as an
            integrated part of their teams. The security obligations we hold for ourselves extend fully to every
            individual we place.
          </p>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Screening and Onboarding</h3>
          <p>
            Every professional placed with a client goes through a defined onboarding process that includes verification
            of identity, background screening consistent with applicable U.S. law, and acknowledgment of our security and
            confidentiality obligations before they begin work.
          </p>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Security Training</h3>
          <p>
            Our consultants and placed professionals receive security awareness training and are kept current on the
            practices we expect of them. This includes responsible handling of client data, appropriate use of client
            systems, and clear understanding of what to do if they observe or suspect a security issue.
          </p>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Conduct and Confidentiality</h3>
          <p>
            All individuals operating under our name, whether on our own systems or within a client&apos;s environment, are
            bound by confidentiality obligations and our code of conduct. They are expected to handle client information
            with the same care that a client&apos;s own trusted employee would.
          </p>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Access Aligned to the Engagement</h3>
          <p>
            The access granted to any placed professional is scoped to what their specific role on the engagement
            requires. When an engagement ends or an individual transitions off a project, access is removed promptly and
            completely.
          </p>

          <h2 style={{ color: '#eaeef9', marginTop: '30px' }}>How We Manage Vendors and Service Providers</h2>
          <p>
            We work with a network of vendors and supporting service providers who enable us to deliver our services. We
            apply the same standard of care to these relationships that we apply internally.
          </p>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Selection and Due Diligence</h3>
          <p>
            Before engaging any vendor or service provider who may come into contact with client or company data, we
            evaluate their security practices. This includes review of their policies, controls, and where applicable,
            independent audit reports. Vendors who cannot demonstrate adequate security controls are not brought into our
            engagements.
          </p>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Clear Obligations by Contract</h3>
          <p>
            Every vendor and service provider operating within our delivery chain is required to sign agreements that
            establish defined security obligations, including requirements to maintain appropriate controls, limit data
            use to authorized purposes, notify us immediately in the event of a security incident, and return or
            securely destroy data when the engagement concludes. Where regulated data is involved, additional contractual
            protections apply.
          </p>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Scoped and Supervised Access</h3>
          <p>
            Vendor access to systems and data is limited strictly to what is necessary for the work at hand. Vendors do
            not receive open or general access. All access is defined, documented, and reviewed on a regular basis.
          </p>

          <h3 style={{ color: '#eaeef9', marginTop: '20px', fontSize: '24px' }}>Ongoing Accountability</h3>
          <p>
            We do not treat vendor security as a one-time check. We monitor the security posture of our significant
            vendors on an ongoing basis, follow developments that may affect their ability to protect information, and
            reassess our relationships when circumstances warrant.
          </p>

          <h2 style={{ color: '#eaeef9', marginTop: '30px' }}>Handling Sensitive and Regulated Information</h2>
          <p>
            We recognize that some clients operate in industries where the stakes around data protection are especially
            high and legal requirements are specific. For these engagements, we are prepared to:
          </p>
          <ul>
            <li>Apply additional access controls and data handling procedures tailored to the regulatory environment.</li>
            <li>Enter into data processing and handling agreements that reflect the obligations of both parties.</li>
            <li>
              Ensure every member of our team working on the engagement understands and complies with applicable
              requirements.
            </li>
            <li>Support client audit and compliance processes with appropriate documentation of our controls.</li>
          </ul>
          <p>
            We do not take a one-size-fits-all approach to regulated engagements. We work with our clients to understand
            their environment and configure our delivery model accordingly.
          </p>

          <h2 style={{ color: '#eaeef9', marginTop: '30px' }}>Transparency and Incident Communication</h2>
          <p>
            We believe that security incidents are handled best through honest, timely communication. If an incident
            occurs that affects client data or systems, we notify the relevant parties promptly, provide clear
            information about what happened and what we are doing about it, and support recovery through to resolution.
            Our obligations in this area are governed by applicable U.S. law and the terms of our client agreements.
          </p>

          <h2 style={{ color: '#eaeef9', marginTop: '30px' }}>Responsible Disclosure</h2>
          <p>
            If you believe you have found a security vulnerability in any system or service operated by Cloud
            Intelligence Inc., please send details, including enough information to reproduce the issue, to
            <a href="mailto:info@thecloudintelligence.com"> info@thecloudintelligence.com</a>.
          </p>
          <p>We ask that you:</p>
          <ul>
            <li>Limit your investigation to identifying and documenting the issue without unnecessary data access.</li>
            <li>Refrain from disrupting our services or those of our clients.</li>
            <li>Allow us a reasonable period to investigate and remediate before any public disclosure.</li>
          </ul>
          <p>
            We will acknowledge your report, investigate it thoroughly, and respond in good faith. We are grateful to
            those who take the time to report concerns responsibly.
          </p>

          <h2 style={{ color: '#eaeef9', marginTop: '30px' }}>Questions and Contact</h2>
          <p>
            If you have questions about our security practices, want to understand how we would approach a specific
            engagement, or need to report a concern, please reach out.
          </p>
          <p>
            <strong>Cloud Intelligence Inc.</strong>
            <br />
            12600 Deerfield Pkwy, Suite 100
            <br />
            Alpharetta, GA 30004, United States
            <br />
            <strong>Email:</strong> <a href="mailto:info@thecloudintelligence.com">info@thecloudintelligence.com</a>
            <br />
            <strong>Phone:</strong> <a href="tel:+14708615206">+1 470-861-5206</a>
          </p>

          <div style={{ marginTop: '36px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#9dc1ff' }}>
              Back to Home
            </Link>
            <Link href="/privacy-policy" style={{ color: '#9dc1ff' }}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
      <Scripts />
    </>
  )
}
