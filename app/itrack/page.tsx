import Scripts from '../components/Scripts'
import SiteFooter from '../components/SiteFooter'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'iTrack Hospital IOT System - The Cloud Intelligence Inc.',
  description: 'Cutting-edge IOT Enabled Healthcare Asset Management System',
}

export default function ITrackPage() {
  return (
    <div className="itrack-page">
      <a id="button" className="" href="#home">
        <Image src="/img/arrow-up-right.svg" alt="scroll to top" className="scroll" width={32} height={32} />
      </a>
      <div className="div">
        <div className="div-2">
          <div className="div-3" id="home">
            <div className="div-4 fixed-top bg-white">
              <nav
                className="navbar navbar-expand-lg navbar-light bg-light"
                style={{ width: '100%', backgroundColor: 'transparent !important' }}
              >
                <Link className="navbar-brand" href="/home">
                  <Image src="/img/tci-logo-color.png" alt="TCI Logo" className="img-2-logo" width={143} height={40} />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="nav-link" href="/home">
                        Home <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/home#about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/home#our-solutions">
                        Solutions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="#testimonials">
                        Testimonials
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="#faq">
                        FAQ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/careers">
                        Careers
                      </Link>
                    </li>
                    <div className="div-13 mobileFAQ">
                      <Link href="#div-206">Get in touch</Link>
                    </div>
                  </ul>
                </div>
                <div className="div-13 desktop">
                  <Link href="#div-206">Get in touch</Link>
                </div>
              </nav>
            </div>
          </div>
          <div className="div-11">
            <div className="div-12">
              <div className="column">
                <div className="div-13">
                  <Image loading="lazy" src="/img/iTrack.png" alt="iTrack" className="img-2-itrack" width={230} height={230} />
                  <div className="div-14">
                    Cutting-edge
                    {/* <br /> */}
                    IOT Enabled Healthcare
                    {/* <br /> */}
                    Asset Management System
                  </div>
                  <div className="div-15">
                    Designed to revolutionize asset and employee
                    <br />
                    management within healthcare facilities
                  </div>
                  <div className="div-16">
                    <a href="#core-features">View features</a>
                  </div>
                </div>
              </div>
              <div className="column-2">
                <Image
                  loading="lazy"
                  src="/img/itrack-hero.png"
                  alt="iTrack Hero"
                  className="img-3"
                  width={600}
                  height={600}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="div-17">
          <div className="d-flex justify-content-center flex-column mx-auto">
            <div className="div-18">The iTrack Advantage</div>
            <div className="div-19">Why iTrack Stands Out as Your Top Choice for Hospital IoT Solutions</div>
          </div>
          <div className="div-20">
            <div className="div-21">
              <div className="column-3">
                <div className="div-22">
                  <Image loading="lazy" src="/img/Comprehensive.svg" alt="Comprehensive" className="img-4" width={64} height={64} />
                  <div className="div-23">
                    Comprehensive
                    <br />
                    IoT Solution
                  </div>
                </div>
              </div>
              <div className="column-4">
                <div className="div-24">
                  <Image loading="lazy" src="/img/Interactive.svg" alt="Interactive" className="img-5" width={64} height={64} />
                  <div className="div-25">
                    Interactive
                    <br />
                    Spatial Map
                  </div>
                </div>
              </div>
              <div className="column-5">
                <div className="div-26">
                  <Image loading="lazy" src="/img/Asset.svg" alt="Asset" className="img-6" width={64} height={64} />
                  <div className="div-27">
                    Efficient Asset
                    <br />
                    Tracking
                  </div>
                </div>
              </div>
              <div className="column-6">
                <div className="div-28">
                  <Image loading="lazy" src="/img/Monitoring.svg" alt="Monitoring" className="img-7" width={64} height={64} />
                  <div className="div-29">
                    Precise Employee<br /> Monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-30" id="core-features">
          <div className="div-31">Core Features</div>
          <div className="div-32">Empowering Hospitals with Advanced Functionality</div>
        </div>
        <div className="div-33">
          <div className="div-34">
            <div className="column-7">
              <div className="div-35">
                <div className="div-36">
                  <div className="div-37">AI Powered</div>
                  <div className="div-38">Health Analytics</div>
                </div>
                <div className="div-39">
                  We provide multiple AI Health analytics system for to ensure patient health is our priority. Here's a
                  few health metrics that we measure.
                </div>
                <div className="div-40">
                  <Image loading="lazy" src="/img/correct.svg" alt="Check" className="img-8" width={24} height={24} />
                  <div className="div-41">Track assets and team</div>
                </div>
                <div className="div-42">
                  <Image loading="lazy" src="/img/correct.svg" alt="Check" className="img-9" width={24} height={24} />
                  <div className="div-43">Gamification and reward system</div>
                </div>
                <div className="div-44">
                  <Image loading="lazy" src="/img/correct.svg" alt="Check" className="img-10" width={24} height={24} />
                  <div className="div-45">Charts and graphs</div>
                </div>
              </div>
            </div>
            <div className="column-8">
              <div className="div-46">
                <Image
                  loading="lazy"
                  src="/img/health-analytics.png"
                  alt="Health Analytics"
                  className="div-47"
                  width={500}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="div-61">
          <div className="div-62">
            <div className="column-9">
              <Image
                loading="lazy"
                src="/img/core-feature.png"
                alt="Core Feature"
                className="img-13"
                width={500}
                height={500}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="column-10">
              <div className="div-63">
                <div className="div-64">
                  <div className="div-65">Live location</div>
                  <div className="div-66">For Staff & Assets</div>
                </div>
                <div className="div-67">
                  We provide multiple AI Health analytics system for to ensure patient health is our priority. Here's a
                  few health metrics that we measure.
                </div>
                <div className="div-68">
                  <div className="div-69">
                    <div className="div-70">0.145ms</div>
                    <div className="div-71">Response speed</div>
                  </div>
                  <div className="div-72">
                    <div className="div-73">50M+</div>
                    <div className="div-74">LLM Datas</div>
                  </div>
                </div>
                <div className="div-75">
                  <div className="div-76">
                    <div className="div-77">99.8%</div>
                    <div className="div-78">Tracking accuracy</div>
                  </div>
                  <div className="div-79">
                    <div className="div-80">0.2ms</div>
                    <div className="div-81">Update speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-82">
          <div className="div-83">Our Reputation</div>
          <div className="div-84">Building Trust, One Success at a Time</div>
          <div className="div-85">
            <div className="div-86">
              <div className="div-87">412+</div>
              <div className="div-88">Companies helped</div>
            </div>
            <div className="div-89"></div>
            <div className="div-90">
              <div className="div-91">20M</div>
              <div className="div-92">Patients healed</div>
            </div>
            <div className="div-93"></div>
            <div className="div-94">
              <div className="div-95">15</div>
              <div className="div-96">Years of excellence</div>
            </div>
            <div className="div-97"></div>
            <div className="div-98">
              <div className="div-99">97%</div>
              <div className="div-100">Patient satisfaction</div>
            </div>
          </div>
          <Image
            loading="lazy"
            src="/img/reputation-desktop.png"
            alt="Reputation Desktop"
            className="img-14"
            width={1200}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            loading="lazy"
            src="/img/reputation.png"
            alt="Reputation Mobile"
            className="img-141 mobile pt-5"
            width={600}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="div-101">
          <div className="div-102">
            <div className="column-11">
              <div className="div-103">
                <div className="div-104">iTrack has revolutionized how we manage our hospital resources.</div>
                <div className="div-105">
                  The real-time asset tracking and employee monitoring have significantly improved our operational
                  efficiency.
                  <br />
                  It's like having an extra set of eyes and hands to ensure that we can deliver the best patient care
                  possible. iTrack is an invaluable addition to our healthcare ecosystem.&quot; - Dr. Sarah Miller,
                  Chief Medical Officer, HealthWell Hospital
                </div>
                <div className="div-106">
                  <Image
                    loading="lazy"
                    src="/img/mehroos.png"
                    alt="Dr Mahroos Ali"
                    className="img-15"
                    width={64}
                    height={64}
                  />
                  <div className="div-107">
                    <div className="div-108">Dr Mahroos Ali</div>
                    <div className="div-109">Chairman @ ANFAS Hospital Group</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-12">
              <Image loading="lazy" src="/img/pattern.svg" alt="Pattern" className="img-16" width={400} height={460} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
        <div className="div-110">
          <div className="div-31 mb-5" id="testimonials">
            Testimonials
          </div>
          <div className="div-111">
            <div className="column-13">
              <div className="div-112">Hear what our customers have to say about us</div>
            </div>
            <div className="column-14">
              <div className="div-113">
                Discover what our satisfied clients have to say about the impact of TCI's innovative solutions on their
                businesses and industries.
              </div>
            </div>
          </div>
        </div>
        <div className="div-114">
          <div className="div-115">
            <div className="column-15">
              <div className="div-116">
                <div className="div-117">
                  <Image loading="lazy" src="/img/quote.svg" alt="Quote" className="img-17" width={33} height={33} />
                </div>
                <div className="div-118">
                  TCI's innovative solutions have been a game-changer for our hospital. Their iTrack system has
                  revolutionized the way we manage our assets and staff. We're more efficient, responsive, and our
                  patients are reaping the benefits. TCI is a true partner in our pursuit of excellence.
                </div>
                <div className="div-119">
                  <Image loading="lazy" src="/img/adnan.png" alt="Adnan Jaweed" className="img-18" width={44} height={44} />
                  <div className="div-120">
                    <div className="div-121">Adnan Jaweed</div>
                    <div className="div-122">Founder @ Supa Stellar</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-16">
              <div className="div-123">
                <div className="div-124">
                  <Image loading="lazy" src="/img/quote.svg" alt="Quote" className="img-19" width={33} height={33} />
                </div>
                <div className="div-125">
                  TCI's technology solutions have optimized our logistics operations in ways we never imagined. With
                  their real-time IoT solutions, our supply chain is smarter, more responsive, and more cost-effective.
                  We couldn't be happier with the results.
                </div>
                <div className="div-126">
                  <Image loading="lazy" src="/img/mehroos.png" alt="Mahroos Ali" className="img-20" width={44} height={44} />
                  <div className="div-127">
                    <div className="div-128">Mahroos Ali</div>
                    <div className="div-129">Founder @ VioletMars</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-17">
              <div className="div-130">
                <div className="div-131">
                  <Image loading="lazy" src="/img/quote.svg" alt="Quote" className="img-21" width={33} height={33} />
                </div>
                <div className="div-132">
                  Working with TCI has been a game-changer for our healthcare startup. Their miDoc platform has
                  provided us with the tools to offer our patients top-notch care. We're seeing improved engagement and
                  patient outcomes. TCI is helping us set new standards in healthcare.
                </div>
                <div className="div-133">
                  <Image loading="lazy" src="/img/meraj.png" alt="Meraj Asif" className="img-22" width={44} height={44} />
                  <div className="div-134">
                    <div className="div-135">Meraj Asif</div>
                    <div className="div-136">Founder @ midoc</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-137">
          <div className="div-138" id="faq">
            <div className="div-139">Frequently Asked Questions</div>
            <div className="div-140">Answers to common questions</div>
            <div className="div-191">
              <div className="faq-item">
                <div className="faq-question">
                  <div className="div-194">What industries do we serve with our innovative solutions?</div>
                  <Image loading="lazy" src="/img/plus-icon.png" alt="Toggle" className="toggle-icon" width={20} height={20} />
                </div>
                <div className="faq-answer" style={{ display: 'none' }}>
                  Our expertise primarily transforms and enhances the Healthcare and Logistics sectors, empowering them
                  with cutting-edge digital advancements using Artificial Intelligence and Internet Of Things.
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-question">
                  <div className="div-194">What sets us apart in the field of AI and enterprise solutions?</div>
                  <Image loading="lazy" src="/img/plus-icon.png" alt="Toggle" className="toggle-icon" width={20} height={20} />
                </div>
                <div className="faq-answer">
                  Our services include custom, ethically designed solutions centered around data analytics, machine
                  learning, and training models using Large Language Models (LLMs), specifically tailored for healthcare
                  applications. This combination of our deep industry knowledge and a commitment to our clients ensures
                  we provide innovative, effective, and regulation-compliant AI outcomes.
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-question">
                  <div className="div-194">How does our IoT based Asset Tracking system benefit the healthcare industry?</div>
                  <Image loading="lazy" src="/img/plus-icon.png" alt="Toggle" className="toggle-icon" width={20} height={20} />
                </div>
                <div className="faq-answer">
                  Our unique IoT-based Asset Tracking System revolutionizes healthcare through innovative asset tracking
                  and management which includes tracking, inventory and predictive maintenance thereby optimizing overall
                  resource allocation. This improves patient care, operational efficiency, and data-driven decision-making
                  in healthcare facilities.
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-question">
                  <div className="div-194">Can I request a demo of your solutions for my business?</div>
                  <Image loading="lazy" src="/img/plus-icon.png" alt="Toggle" className="toggle-icon" width={20} height={20} />
                </div>
                <div className="faq-answer">
                  please feel free to book for an discovery call just for 30 mins. <br />
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeGg3v4FF7ae72nhs54X_6W-zS0IcpvONRMrIBVqZts8f1i_w/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    Contact Form
                  </a>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-question">
                  <div className="div-194">Is data security a priority for our solutions?</div>
                  <Image loading="lazy" src="/img/plus-icon.png" alt="Toggle" className="toggle-icon" width={20} height={20} />
                </div>
                <div className="faq-answer">
                  Prioritizing data security in IoT asset tracking and AI healthcare apps is vital to protect sensitive
                  patient data and comply with regulations considering HIPAA, GDPR. Implementing a zero-trust
                  architecture enhances this by continuously verifying every access request, significantly reducing the
                  risk of data breaches and maintaining robust security.
                </div>
              </div>
            </div>
          </div>
        </div>
        <SiteFooter />

        {/* Privacy Policy Modal */}
        <div
          className="modal fade"
          style={{ overflow: 'hidden' }}
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" style={{ height: '100vh' }} role="document">
            <div className="modal-content" style={{ height: '500px' }}>
              <div
                className="modal-header justify-content-center flex-column align-items-center"
                style={{ background: '#265bb7' }}
              >
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="modalClose">
                    x
                  </span>
                </button>
                <h5 className="modal-title" id="exampleModalLabel">
                  Privacy Policy of
                </h5>
                <h4 className="modal-title" id="exampleModalLabel">
                  The Cloud Intelligence Inc.
                </h4>
              </div>
              <div className="modal-body" style={{ overflow: 'hidden scroll', height: '100vh' }}>
                <span>Last Updated: 13/11/2023</span>
                <br />
                <br />
                <h4>1. Introduction</h4>
                <p>
                  This Privacy Policy applies to the marketing site of The Cloud Intelligence Inc. ("we", "us", or
                  "our"), located at <a href="www.thecloudintelligence.com">www.thecloudintelligence.com</a>, and
                  explains how we collect, use, disclose, and safeguard your information when you visit our site.
                </p>
                <br />
                <h4>2. Information Collection</h4>
                <p>
                  We collect information in the following ways:
                  <br />
                </p>
                <p>
                  <strong>Information You Provide:</strong> This includes personal information you enter when filling
                  out forms, subscribing to newsletters, or contacting us for inquiries, such as your name, email
                  address, and phone number.
                </p>
                <p>
                  <strong>Automatically Collected Information:</strong> We automatically collect certain information
                  when you visit our site, such as your IP address, browser type, operating system, and information
                  about your use of our site through cookies and similar technologies.
                </p>
                <br />
                <h4>3. Use of Information</h4>
                <p>The information we collect is used to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services.</li>
                  <li>
                    Communicate with you, including responding to your inquiries and sending newsletters or marketing
                    materials.
                  </li>
                  <li>Enhance the user experience on our site.</li>
                  <li>
                    Analyze and understand how our services are used for business development and marketing strategies.
                  </li>
                </ul>
                <br />
                <h4>4. Sharing of Information</h4>
                <p>We may share your information with:</p>
                <ul>
                  <li>Third-party service providers who perform services on our behalf.</li>
                  <li>
                    In response to legal requests or as required by applicable law, court orders, or government
                    regulations.
                  </li>
                  <li>In connection with a merger, sale, or asset transfer.</li>
                </ul>
                <br />
                <h4>5. Data Security</h4>
                <p>
                  We implement reasonable security measures to protect your information from unauthorized access,
                  alteration, disclosure, or destruction.
                </p>
                <br />
                <h4>6. Your Rights</h4>
                <p>
                  You have certain rights regarding your personal information, including the right to access, correct,
                  delete, or restrict its use. To exercise these rights, please contact us at [contact details].
                </p>
                <br />
                <h4>7. Third-Party Links</h4>
                <p>
                  Our site may contain links to third-party websites. We are not responsible for the privacy practices
                  of these external sites.
                </p>
                <br />
                <h4>8. Changes to This Policy</h4>
                <p>
                  We reserve the right to modify this privacy policy at any time. We will notify you of any changes by
                  updating the "Last Updated" date of this privacy policy.
                </p>
                <br />
                <h4>9. Contact Us</h4>
                <p>
                  If you have questions about this policy, please contact us at:
                  <br />
                  The Cloud Intelligence Inc. 12600 Deerfield Pkwy Suite 100,
                  <br />
                  Alpharetta, GA 30004
                  <br /> <a href="mailto:info@thecloudintelligence.com">info@thecloudintelligence.com</a>
                  <br />
                  <a href="tel:+14708615206">+1 470-861-5206</a>
                </p>
              </div>
              <div className="modal-footer position-sticky">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scripts />
    </div>
  )
}
