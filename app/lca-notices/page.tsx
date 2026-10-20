import Navbar from '../components/Navbar'
import Scripts from '../components/Scripts'
import SiteFooter from '../components/SiteFooter'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'LCA Notices - The Cloud Intelligence Inc.',
  description: 'LCA Notices - The Cloud Intelligence Inc.',
}

export default function LCANoticesPage() {
  return (
    <>
      <a id="button" className="" href="#home">
        <Image src="/img/arrow-up-right.svg" alt="scroll to top" className="scroll" width={32} height={32} />
      </a>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4" style={{ position: 'relative' }}>
              <Image
                loading="lazy"
                src="/img/3d-circle.png"
                alt="background"
                className="img"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="div-5" id="home">
                <Navbar />
              </div>
            </div>
          </div>
        </div>

        {/* LCA Notices Page Content */}
        <div className="lca-notices-page">
          <div className="lca-notices-header">
            <h1 className="lca-notices-title">LCA Notices</h1>
            <p className="lca-notices-subtitle">Labor Condition Application Notices</p>
          </div>

          <div className="lca-notices-container">
            <ul className="lca-notices-list">
              <li className="lca-notice-item">
                <a
                  href="https://midocfileserver.blob.core.windows.net/tcimarketing/m0kpMP1NL78XbBtpDtmX39L24cK7h6en8hhRsJHtpagogsz/2026/02/261017-234598.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lca-notice-link"
                >
                  <div className="lca-notice-info">
                    <div className="lca-notice-icon">
                      <Image
                        src="/img/PDF_file_icon.svg"
                        alt="PDF"
                        width={28}
                        height={28}
                        style={{ width: '28px', height: '28px' }}
                      />
                    </div>
                    <div className="lca-notice-text">
                      <span className="lca-notice-name">LCA Notice - 261017-234598</span>
                    </div>
                  </div>
                  <Image src="/img/arrow-up-right.svg" alt="open" className="lca-notice-arrow" width={24} height={24} />
                </a>
              </li>
              <li className="lca-notice-item">
                <a
                  href="https://midocfileserver.blob.core.windows.net/tcimarketing/m0kpMP1NL78XbBtpDtmX39L24cK7h6en8hhRsJHtpagogsz/2026/01/260113-220989.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lca-notice-link"
                >
                  <div className="lca-notice-info">
                    <div className="lca-notice-icon">
                      <Image 
                        src="/img/PDF_file_icon.svg" 
                        alt="PDF" 
                        width={28} 
                        height={28}
                        style={{ width: '28px', height: '28px' }}
                      />
                    </div>
                    <div className="lca-notice-text">
                      <span className="lca-notice-name">LCA Notice - 260113-220989</span>
                    </div>
                  </div>
                  <Image src="/img/arrow-up-right.svg" alt="open" className="lca-notice-arrow" width={24} height={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <SiteFooter />
      </div>
      <Scripts />
    </>
  )
}
