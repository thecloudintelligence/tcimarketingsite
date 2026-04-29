import Navbar from './components/Navbar'
import Scripts from './components/Scripts'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <a id="button" className="" href="#home">
        <Image src="/img/arrow-up-right.svg" alt="scroll to top" className="scroll" width={32} height={32} />
      </a>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">
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
          <div className="div-14">
            <div className="div-15">
              <div className="column">
                <div className="div-16">
                  <div className="div-17">
                    Your Path to
                    <br />
                    Intelligent Solutions
                  </div>
                  <div className="div-18">
                    <div className="div-19"></div>
                    <div className="div-20">
                      Bridging the Gaps, Transforming Industries
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-2">
                <div className="div-21">
                  <div className="div-22">
                    <div className="div-23">20k+</div>
                    <div className="div-24">
                      Businesses
                      <br />
                      Transformed
                    </div>
                  </div>
                  <div className="div-25">
                    <div className="div-26">30k+</div>
                    <div className="div-27">
                      Happy
                      <br />
                      Customers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Rest of the page content would go here - this is a simplified version */}
        {/* You'll need to convert the remaining sections from index.html */}
        
        <div className="div-206">
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
            <a href="https://calendly.com/maidrees/discovery-call?month=2023-11" target="_blank" rel="noopener noreferrer">
              <div className="getTouchArrow">
                <div className="getTouchArrow2">
                  <Image src="/img/arrow-up-right.svg" alt="arrow" width={84} height={84} />
                </div>
              </div>
            </a>
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
                      <a href="#privacy-policy" data-toggle="modal" data-target="#exampleModal">
                        Privacy Policy
                      </a>
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
      </div>
      <Scripts />
    </>
  )
}
