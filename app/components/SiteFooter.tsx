import Link from 'next/link'
import Image from 'next/image'
import GetInTouchForm from './GetInTouchForm'

export default function SiteFooter() {
  return (
    <div id="div-206" className="div-206">
      <div
        id="contact"
        style={{
          width: '100%',
          height: '100%',
          background: '#040913',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '24px',
          display: 'inline-flex',
        }}
      >
        <div className="get-in-touch">Get in touch</div>
        <GetInTouchForm />
      </div>
      <div className="div-208">
        <div className="div-209">
          <div className="column-31">
            <div className="div-210">
              <div className="div-211">
                <Image
                  loading="lazy"
                  src="/img/tci-logo-color.svg"
                  alt="TCI Logo"
                  className="img-43"
                  width={200}
                  height={60}
                />
                <div className="div-212">
                  We are a technology innovator, specializing in AI, IoT and cloud-based enterprise solutions. We
                  transform and empower mainly two vertical domains: Healthcare and Logistics.
                </div>
              </div>
              <ul className="footerLinks">
                <li className="footer-link">
                  <Link href="/#about">About</Link>
                </li>
                <li className="footer-link">
                  <Link href="/#our-solutions">Solutions</Link>
                </li>
                <li className="footer-link">
                  <Link href="/trainings">Trainings</Link>
                </li>
                <li className="footer-link">
                  <Link href="/#testimonials">Testimonials</Link>
                </li>
                <li className="footer-link">
                  <Link href="/#faq">FAQ</Link>
                </li>
                <li className="footer-link">
                  <Link href="/careers">Careers</Link>
                </li>
                <li className="footer-link d-none">
                  <Link href="#terms">Terms</Link>
                </li>
                <li className="footer-link">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="footer-link">
                  <Link href="/security-policy">Security Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="column-32">
            <Image
              loading="lazy"
              src="/img/bottom-boxes.svg"
              alt="decoration"
              className="img-44"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="div-220">
        <div className="div-221">Copyright© 2026 The Cloud Intelligence Inc.</div>
        <div className="div-222">
          <a
            href="https://www.linkedin.com/company/the-cloud-intelligence-inc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image loading="lazy" src="/img/linked.svg" alt="LinkedIn" className="img-47" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
