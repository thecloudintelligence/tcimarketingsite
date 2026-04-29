import Navbar from './components/Navbar'
import Scripts from './components/Scripts'
import SiteFooter from './components/SiteFooter'
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
      </div>

      {/* About Section */}
      <div className="div-28" id="about">
        <div className="div-29">
          <div className="div-52 w-100 mb-5">
            <div className="div-53">About Us</div>
          </div>
          <div className="div-30">
            <div className="column-3">
              <div className="div-31">
                We are driven by a passion for innovation and a commitment
                <br />
                to transforming industries
              </div>
            </div>
            <div className="column-4">
              <div className="div-32">
                We believe in making the complex simple and the difficult
                accessible, offering solutions that redefine possibilities
              </div>
            </div>
          </div>
        </div>
        <div className="div-33">
          <div className="div-34">
            <div className="div-35">
              <div className="column-5">
                <div className="div-36">
                  <div className="div-37">
                    <Image loading="lazy" src="/img/ai-up.svg" alt="AI" className="img-3" width={32} height={32} />
                  </div>
                  <div className="div-38">
                    Artificial
                    <br />
                    Intelligence
                  </div>
                </div>
              </div>
              <div className="column-6">
                <div className="div-39">
                  Logistics
                  <br />
                  Solutions
                </div>
              </div>
              <div className="column-7">
                <div className="div-40">
                  <div className="div-41">
                    <div className="column-8">
                      <div className="div-42">
                        Cloud Based
                        <br />
                        Solutions
                      </div>
                    </div>
                    <div className="column-9">
                      <Image loading="lazy" src="/img/cloud-up.svg" alt="Cloud" className="img-4" width={118} height={91} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-43">
            <div className="div-44">
              <div className="column-10">
                <div className="div-45">
                  <Image loading="lazy" src="/img/internet-of-things.png" alt="IoT" className="img" width={400} height={145} style={{ width: '100%', height: 'auto' }} />
                </div>
              </div>
              <div className="column-11">
                <div className="div-47">
                  <div className="div-48">
                    <div className="column-12">
                      <div className="div-49">
                        <Image loading="lazy" src="/img/health-line2.png" alt="Health line" className="img-5" width={151} height={77} />
                        <Image loading="lazy" src="/img/health-line1.png" alt="Health line" className="img-6" width={174} height={77} />
                      </div>
                    </div>
                    <div className="column-13">
                      <div className="div-50">Healthcare Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="div-51" id="our-solutions">
        <div className="div-52">
          <div className="div-53">Our Solutions</div>
          <div className="div-54">Unlocking new possibilities with our solutions</div>
        </div>
        <div className="div-56">
          <div className="div-57">
            <div className="column-14">
              <div className="div-58">
                <div className="div-59">
                  <Image loading="lazy" src="/img/iTrack.png" alt="iTrack" className="img-17" width={230} height={230} />
                </div>
                <div className="div-67">
                  <div className="div-68">
                    <div className="div-69">
                      Cutting-edge<br />
                      IOT Enabled Healthcare<br />
                      Asset Management System
                    </div>
                    <div className="div-70">
                      Designed to revolutionize asset and employee management within healthcare facilities
                    </div>
                  </div>
                  <div className="div-71">
                    <div className="div-72">
                      <div className="div-73">
                        <Image loading="lazy" src="/img/ai.png" alt="AI" className="img-17" width={24} height={24} />
                        <div className="div-74">Comprehensive IoT Solution</div>
                      </div>
                      <div className="div-75">
                        <Image loading="lazy" src="/img/database.svg" alt="Database" className="img-18" width={24} height={24} />
                        <div className="div-76">Interactive Spatial Map</div>
                      </div>
                    </div>
                    <div className="div-77">
                      <div className="div-78">
                        <Image loading="lazy" src="/img/human.svg" alt="Human" className="img-19" width={24} height={24} />
                        <div className="div-79">Efficient Asset Tracking</div>
                      </div>
                      <div className="div-80">
                        <Image loading="lazy" src="/img/monitor.svg" alt="Monitor" className="img-20" width={24} height={24} />
                        <div className="div-81">Precise Employee Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-82 itrack">
                  <Link href="/itrack">View</Link>
                </div>
              </div>
            </div>
            <div className="column-15 itrackImage">
              <Image loading="lazy" src="/img/itrack-website.png" alt="iTrack Website" className="img-21" width={500} height={510} style={{ width: '100%', height: 'auto', maxWidth: '100%' }} />
            </div>
          </div>
        </div>
        <div className="div-56">
          <div className="div-57">
            <div className="column-14">
              <div className="div-58">
                <div className="div-59">
                  <Image loading="lazy" src="/img/micDoc.png" alt="miDoc" className="img-17" width={230} height={230} />
                </div>
                <div className="div-67">
                  <div className="div-68">
                    <div className="div-69">AI Powered Healthcare Assistant</div>
                    <div className="div-70">
                      With AI Integrated, Experience the future of healthcare.
                    </div>
                  </div>
                  <div className="div-71">
                    <div className="div-72">
                      <div className="div-73">
                        <Image loading="lazy" src="/img/ai.png" alt="AI" className="img-17" width={24} height={24} />
                        <div className="div-74">Transform health data into info.</div>
                      </div>
                      <div className="div-75">
                        <Image loading="lazy" src="/img/database.svg" alt="Database" className="img-18" width={24} height={24} />
                        <div className="div-76">Health trends to stay proactive.</div>
                      </div>
                    </div>
                    <div className="div-77">
                      <div className="div-78">
                        <Image loading="lazy" src="/img/human.svg" alt="Human" className="img-19" width={24} height={24} />
                        <div className="div-79">GenAI on medications.</div>
                      </div>
                      <div className="div-80">
                        <Image loading="lazy" src="/img/monitor.svg" alt="Monitor" className="img-20" width={24} height={24} />
                        <div className="div-81">Let doctor know you before you see him.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-82 itrack">
                  <a href="https://midoc.ai" target="_blank" rel="noopener noreferrer">View</a>
                </div>
              </div>
            </div>
            <div className="column-15">
              <Image loading="lazy" src="/img/miDoc.png" alt="miDoc" className="img-211" width={500} height={510} style={{ width: '100%', height: 'auto', maxWidth: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Pillars Section */}
      <div className="div-83">
        <div className="div-84">
          <div className="div-85">
            <div className="column-16">
              <Image loading="lazy" src="/img/pillar.png" alt="Pillars" className="img-22" width={500} height={658} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="column-17">
              <div className="div-86">
                <div className="div-87">
                  <div className="div-88">Pillars of Excellence</div>
                  <div className="div-89">Why we stand out in the tech landscape</div>
                </div>
                <div className="div-90">
                  <div className="div-91">
                    <div className="div-92">
                      <div className="div-93">Innovative Solutions</div>
                      <div className="div-94" style={{ display: 'block' }}>
                        TCI's core strength lies in its ability to develop and
                        implement innovative technology solutions that transform
                        industries and address core
                        <br />
                        business challenges.
                      </div>
                    </div>
                  </div>
                  <div className="div-91">
                    <div className="div-92">
                      <div className="div-93">AI & IoT Expertise</div>
                      <div className="div-94">
                        TCI's core strength lies in its ability to develop and
                        implement innovative technology solutions that transform
                        industries and address core
                        <br />
                        business challenges.
                      </div>
                    </div>
                  </div>
                  <div className="div-91">
                    <div className="div-92">
                      <div className="div-93">Data Security</div>
                      <div className="div-94">
                        TCI's core strength lies in its ability to develop and
                        implement innovative technology solutions that transform
                        industries and address core
                        <br />
                        business challenges.
                      </div>
                    </div>
                  </div>
                  <div className="div-91">
                    <div className="div-92">
                      <div className="div-93">Scalable Cloud Services</div>
                      <div className="div-94">
                        TCI's core strength lies in its ability to develop and
                        implement innovative technology solutions that transform
                        industries and address core
                        <br />
                        business challenges.
                      </div>
                    </div>
                  </div>
                  <div className="div-91">
                    <div className="div-92">
                      <div className="div-93">Seamless Integration</div>
                      <div className="div-94">
                        TCI's core strength lies in its ability to develop and
                        implement innovative technology solutions that transform
                        industries and address core
                        <br />
                        business challenges.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="div-109">
        <div className="div-110">
          <div className="div-111">Technology Stack</div>
          <div className="div-112">Empowering solutions with cutting-edge tools</div>
        </div>
        <div className="div-113">
          <div className="div-114">
            <div className="div-115">
              <div className="column-18">
                <div className="div-116">
                  <div className="div-117">
                    <Image loading="lazy" src="/img/brain.svg" alt="Brain" className="img-23" width={32} height={32} />
                  </div>
                  <div className="div-118">
                    <div className="div-119">AI & Machine Learning</div>
                    <div className="div-120">
                      TCI leverages AI and machine learning to drive data insights
                      and intelligent decision-making.
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-19">
                <div className="div-121">
                  <div className="div-122">
                    <Image loading="lazy" src="/img/laptop.svg" alt="Laptop" className="img-24" width={36} height={28} />
                  </div>
                  <div className="div-123">
                    <div className="div-124">IoT Infrastructure</div>
                    <div className="div-125">
                      Our IoT infrastructure facilitates real-time data collection
                      and analysis.
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-20">
                <div className="div-126">
                  <div className="div-127">
                    <Image loading="lazy" src="/img/cloud.svg" alt="Cloud" className="img-25" width={32} height={26} />
                  </div>
                  <div className="div-128">
                    <div className="div-129">Microsoft Azure</div>
                    <div className="div-130">
                      Providing the flexibility and reliability we need to deliver
                      cutting-edge technology.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-131">
            <div className="div-132">
              <div className="column-21">
                <div className="div-133">
                  <div className="div-134">
                    <Image loading="lazy" src="/img/man.svg" alt="Man" className="img-26" width={32} height={32} />
                  </div>
                  <div className="div-135">
                    <div className="div-136">AI-based Knowledge Hub</div>
                    <div className="div-137">
                      Building a smart companion for instant answers and expert
                      insights.
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-22">
                <div className="div-138">
                  <div className="div-139">
                    <Image loading="lazy" src="/img/chart.svg" alt="Chart" className="img-27" width={22} height={26} />
                  </div>
                  <div className="div-140">
                    <div className="div-141">Big Data Analytics</div>
                    <div className="div-142">
                      Our big data analytics tools provide valuable insights for
                      business improvement.
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-23">
                <div className="div-143">
                  <div className="div-144">
                    <Image loading="lazy" src="/img/code.svg" alt="Code" className="img-28" width={32} height={26} />
                  </div>
                  <div className="div-145">
                    <div className="div-146">Custom Software</div>
                    <div className="div-147">
                      TCI's custom software development is based on industry-leading
                      languages and frameworks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="div-148">
        <div className="div-149">
          <div className="column-24">
            <div className="div-150">
              <div className="div-151">
                <div className="div-152">
                  At TCI, we believe in the power of technology to drive meaningful
                  change.
                </div>
                <div className="div-153">
                  Our journey is about pushing the boundaries of what's possible and
                  creating solutions that transform industries. We're not just
                  keeping pace with change; we're pioneering it, and our mission is
                  to empower businesses with the tools they need to thrive in a
                  rapidly evolving world.
                </div>
              </div>
              <div className="div-154">
                <Image loading="lazy" src="/img/idress.png" alt="Idrees Mohammed" className="img-29" width={64} height={64} />
                <div className="div-155">
                  <div className="div-156">Idrees Mohammed</div>
                  <div className="div-157">Founder @ The Cloud Intelligence Inc.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-25">
            <Image loading="lazy" src="/img/pattern.svg" alt="Pattern" className="img-30" width={400} height={460} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="custom-container">
        <h1 className="custom-heading">Our Locations</h1>
        <p className="custom-paragraph">Come visit our friendly team at one of our offices.</p>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c03fda70-1a20-4dcf-aa0b-a6d162dd7e64?apiKey=d0e9d8ccbd874a5bb027c9e05150714e&"
          alt="Map"
          className="custom-image"
          width={1200}
          height={558}
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="custom-wrapper">
          <div className="custom-column">
            <div className="custom-card">
              <div className="custom-content">
                <div className="custom-info">
                  <div className="custom-label">Headquarters:</div>
                  <div className="custom-address">Idrees Mohammed, Founder and CEO</div>
                  <div className="custom-address">
                    The Cloud Intelligence Inc.<br />12600 Deerfield Pkwy<br />Suite 100,
                    Alpharetta, GA 30004
                  </div>
                  <a href="mailto:info@thecloudintelligence.com">info@thecloudintelligence.com</a>
                  <br />
                  <a href="tel:+14708615206">+1 470-861-5206</a>
                </div>
                <div className="location-flag">
                  <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b160b3c-41be-42fa-badf-2c7b7409e923?apiKey=d0e9d8ccbd874a5bb027c9e05150714e&"
                    alt="Flag"
                    className="custom-logo"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="custom-column">
            <div className="custom-card">
              <div className="custom-content">
                <div className="custom-info">
                  <div className="custom-label">Registered Office:</div>
                  <div className="custom-address">
                    The Cloud Intelligence Inc.<br />Tech Alpharetta, 2972 Webb Bridge
                    Road,<br />Alpharetta, Georgia, 30009
                  </div>
                </div>
                <div className="location-flag">
                  <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/27d22849-9b44-4881-abdf-84699c5e03ea?apiKey=d0e9d8ccbd874a5bb027c9e05150714e&"
                    alt="Flag"
                    className="custom-logo"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="div-158" id="testimonials">
        <div className="div-52 w-100 mb-5">
          <div className="div-53 testimonial">Testimonials</div>
        </div>
        <div className="div-159">
          <div className="div-160">
            <div className="column-26">
              <div className="div-161">Hear what our customers have to say about us</div>
            </div>
            <div className="column-27">
              <div className="div-162">
                Discover what our satisfied clients have to say about the impact of
                TCI's innovative solutions on their businesses and industries.
              </div>
            </div>
          </div>
        </div>
        <div className="div-163">
          <div className="div-164">
            <div className="column-28">
              <div className="div-165">
                <div className="div-166">
                  <Image loading="lazy" src="/img/quote.svg" alt="Quote" className="img-31" width={33} height={33} />
                </div>
                <div className="div-167">
                  TCI's innovative solutions have been a game-changer for our
                  hospital. Their iTrack system has revolutionized the way we manage
                  our assets and staff. We're more efficient, responsive, and our
                  patients are reaping the benefits. TCI is a true partner in our
                  pursuit of excellence.
                </div>
                <div className="div-168">
                  <Image loading="lazy" src="/img/adnan.png" alt="Adnan Jaweed" className="img-32" width={44} height={44} />
                  <div className="div-169">
                    <div className="div-170">Adnan Jaweed</div>
                    <div className="div-171">Founder @ Supa Stellar</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-29">
              <div className="div-172">
                <div className="div-173">
                  <Image loading="lazy" src="/img/quote.svg" alt="Quote" className="img-33" width={33} height={33} />
                </div>
                <div className="div-174">
                  TCI's technology solutions have optimized our logistics operations
                  in ways we never imagined. With their real-time IoT solutions, our
                  supply chain is smarter, more responsive, and more cost-effective.
                  We couldn't be happier with the results.
                </div>
                <div className="div-175">
                  <Image loading="lazy" src="/img/mehroos.png" alt="Mahroos Ali" className="img-34" width={44} height={44} />
                  <div className="div-176">
                    <div className="div-177">Mahroos Ali</div>
                    <div className="div-178">Founder @ VioletMars</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-30">
              <div className="div-179">
                <div className="div-180">
                  <Image loading="lazy" src="/img/quote.svg" alt="Quote" className="img-35" width={33} height={33} />
                </div>
                <div className="div-181">
                  The Cloud Intelligence Inc. revolutionized our operations with their
                  cutting-edge Gen AI solutions. Their expertise not only enhanced
                  our AI portfolio and compliance but also significantly improved our
                  efficiency and outcomes.
                </div>
                <div className="div-182">
                  <Image loading="lazy" src="/img/meraj.png" alt="Himanshu Kumar" className="img-36" width={44} height={44} />
                  <div className="div-183">
                    <div className="div-184">Himanshu Kumar</div>
                    <div className="div-185">Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="div-186" id="faq">
        <div className="div-187">
          <div className="div-188">
            <div className="div-189">Frequently Asked Questions</div>
            <div className="div-189 mobileFAQ">FAQ</div>
            <div className="div-190">Answers to common questions</div>
          </div>
          <div className="div-191">
            <div className="faq-item">
              <div className="faq-question">
                <div className="div-194">
                  What industries do we serve with our innovative solutions?
                </div>
                <Image loading="lazy" src="/img/plus-icon.png" alt="Toggle" className="toggle-icon" width={20} height={20} />
              </div>
              <div className="faq-answer">
                Our expertise primarily transforms and enhances the Healthcare and Logistics sectors, empowering them with
                cutting-edge digital advancements using Artificial Intelligence and Internet Of Things.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <div className="div-194">
                  What sets us apart in the field of AI and enterprise solutions?
                </div>
                <Image loading="lazy" src="/img/plus-icon.png" alt="Toggle" className="toggle-icon" width={20} height={20} />
              </div>
              <div className="faq-answer">
                Our services include custom, ethically designed solutions centered around data analytics, machine
                learning, and training models using Large Language Models (LLMs), specifically tailored for healthcare
                applications. This combination of our deep industry knowledge and a commitment to our clients ensures we
                provide innovative, effective, and regulation-compliant AI outcomes.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <div className="div-194">
                  How does our IoT based Asset Tracking system benefit the healthcare industry?
                </div>
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
                architecture enhances this by continuously verifying every access request, significantly reducing the risk
                of data breaches and maintaining robust security.
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />

      {/* Privacy Policy Modal */}
      <div
        className="modal fade"
        style={{ overflow: 'hidden', backdropFilter: 'blur(3px)' }}
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
                "our"), located at <a href="www.thecloudintelligence.com">www.thecloudintelligence.com</a>, and explains
                how we collect, use, disclose, and safeguard your information when you visit our site.
              </p>
              <br />
              <h4>2. Information Collection</h4>
              <p>
                We collect information in the following ways:
                <br />
              </p>
              <p>
                <strong>Information You Provide:</strong> This includes personal information you enter when filling out
                forms, subscribing to newsletters, or contacting us for inquiries, such as your name, email address, and
                phone number.
              </p>
              <p>
                <strong>Automatically Collected Information:</strong> We automatically collect certain information when
                you visit our site, such as your IP address, browser type, operating system, and information about your
                use of our site through cookies and similar technologies.
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
                Our site may contain links to third-party websites. We are not responsible for the privacy practices of
                these external sites.
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
      <Scripts />
    </>
  )
}
