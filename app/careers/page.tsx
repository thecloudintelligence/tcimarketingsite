import Navbar from '../components/Navbar'
import Scripts from '../components/Scripts'
import SiteFooter from '../components/SiteFooter'
import Link from 'next/link'
import Image from 'next/image'

export default function CareersPage() {
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
          <div className="div-14 careers-hero">
            <div className="div-15 careers-hero-single">
              <div className="div-16 careers-hero-content">
                <div className="div-17">
                  Join Our Team
                  <br />
                  Build the Future
                </div>
                <div className="div-18">
                  <div className="div-19"></div>
                  <div className="div-20">
                    Explore exciting career opportunities in AI, IoT, and cloud-based solutions
                  </div>
                </div>
                <div className="careers-hero-features">
                  <div className="careers-feature-item">
                    <div className="careers-feature-title">Innovation</div>
                    <div className="careers-feature-desc">Cutting-edge Technology</div>
                  </div>
                  <div className="careers-feature-item">
                    <div className="careers-feature-title">Growth</div>
                    <div className="careers-feature-desc">Career Development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div className="div-28" id="careers" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
          <div className="div-29" style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div className="div-52 w-100 mb-5">
              <div className="div-53">Open Positions</div>
              <div className="div-54">Join us in transforming industries with innovative technology solutions</div>
            </div>
            <div className="div-33" style={{ marginTop: '60px' }}>
              <div className="div-34" style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h3 style={{ color: '#eaeef9', fontSize: '32px', fontWeight: '600', marginBottom: '12px', letterSpacing: '-1.28px' }}>
                    Machine Learning Engineer / AI Engineer
                  </h3>
                  <p style={{ color: '#d0d8e8', fontSize: '18px', marginBottom: '20px' }}>Full-time Position</p>
                  <p style={{ color: '#d0d8e8', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
                    Join our team to develop cutting-edge AI solutions using OpenAI, Hugging Face, and Microsoft Azure AI services. We're looking for passionate engineers to help transform industries with innovative technology.
                  </p>
                  <div style={{ marginTop: '24px' }}>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Design and develop machine learning models and AI systems using OpenAI, Hugging Face, and Microsoft Azure AI services
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Implement and optimize deep learning algorithms for production
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Work with large datasets to train and validate models
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Collaborate with product teams to integrate AI capabilities from OpenAI, Hugging Face, and Azure AI platforms
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Research and implement state-of-the-art AI technologies
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h3 style={{ color: '#eaeef9', fontSize: '32px', fontWeight: '600', marginBottom: '12px', letterSpacing: '-1.28px' }}>
                    Requirements
                  </h3>
                  <p style={{ color: '#d0d8e8', fontSize: '18px', marginBottom: '20px' }}>What We're Looking For</p>
                  <p style={{ color: '#d0d8e8', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
                    We seek talented individuals with expertise in modern AI technologies and cloud platforms.
                  </p>
                  <div style={{ marginTop: '24px' }}>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Strong experience with Python, TensorFlow, PyTorch, Hugging Face Transformers, or similar frameworks
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Knowledge of NLP, computer vision, or reinforcement learning
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Experience with OpenAI APIs, Hugging Face models and libraries, and Microsoft Azure AI/ML platforms (Azure ML, Azure OpenAI Service)
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Experience with cloud AI platforms (Azure ML, Azure OpenAI Service)
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Bachelor's or Master's degree in Computer Science, AI, or related field
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Job Listing - Senior / System Analyst Developer */}
            <div className="div-33" style={{ marginTop: '80px' }}>
              <div className="div-34" style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h3 style={{ color: '#eaeef9', fontSize: '32px', fontWeight: '600', marginBottom: '12px', letterSpacing: '-1.28px' }}>
                    Senior / System Analyst Developer
                  </h3>
                  <p style={{ color: '#d0d8e8', fontSize: '18px', marginBottom: '20px' }}>Full-time Position</p>
                  <p style={{ color: '#d0d8e8', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
                    Join our team to design and develop enterprise-level web applications using modern Java technologies and cloud platforms. We're looking for experienced developers to build scalable, secure, and high-performance solutions.
                  </p>
                  <div style={{ marginTop: '24px' }}>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Develop and maintain enterprise web applications using Java, J2EE, Spring, Spring MVC, and Spring JDBC
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Design and implement RESTful APIs, microservices, and GraphQL endpoints
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Build large multi-system, enterprise applications with focus on scalability and performance
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Develop applications with good usability principles, cross-browser compatibility, and web security best practices
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Perform requirement analysis and application design for complex enterprise systems
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h3 style={{ color: '#eaeef9', fontSize: '32px', fontWeight: '600', marginBottom: '12px', letterSpacing: '-1.28px' }}>
                    Requirements
                  </h3>
                  <p style={{ color: '#d0d8e8', fontSize: '18px', marginBottom: '20px' }}>What We're Looking For</p>
                  <p style={{ color: '#d0d8e8', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
                    We seek experienced developers with strong expertise in Java enterprise technologies and cloud platforms.
                  </p>
                  <div style={{ marginTop: '24px' }}>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        10+ years demonstrated experience in developing web applications using two or more of these technologies - Java, J2EE, Servlets, Spring, Spring MVC, Spring JDBC, database interactions, and related testing tools/methodologies
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Hands-on experience with Java 11/17, Spring, Spring Boot, MQ, Kafka, MongoDB, APIs development, and cloud (Azure)
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        5+ years demonstrated experience in requirement analysis and application design
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Experience with RESTful APIs, Spring Boot, Microservices, GraphQL, and MongoDB
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Experience with Agile practices, daily Stand-Up/Scrum and accountability to the software development team
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Experience with web security (XSRF, cross-site scripting defense), accessibility, markup standards, and performance optimization
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                        flexShrink: 0, 
                        marginTop: '8px',
                        boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                      }}></div>
                      <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                        Excellent written and verbal communication skills
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Job Listing - Information Security Analyst */}
            <div className="div-33" style={{ marginTop: '80px' }}>
              <div className="div-34" style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h3 style={{ color: '#eaeef9', fontSize: '32px', fontWeight: '600', marginBottom: '12px', letterSpacing: '-1.28px' }}>
                    Information Security Analyst
                  </h3>
                  <p style={{ color: '#d0d8e8', fontSize: '18px', marginBottom: '20px' }}>Full-time Position</p>
                  <p style={{ color: '#d0d8e8', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
                    Responsible for simulating cyberattacks on systems, networks, and applications to identify vulnerabilities before malicious actors can exploit them.
                  </p>
                  <div style={{ marginTop: '24px' }}>
                    {[
                      ['Security Testing & Assessments', 'Conduct penetration testing on web applications, network and infrastructure, Linux and Windows desktops/servers, APIs, cloud environments, and mobile apps. Perform vulnerability assessments using automated tools and manual techniques, and simulate real-world cyberattacks to evaluate system resilience.'],
                      ['Exploitation & Analysis', 'Identify and exploit weaknesses in systems and applications; analyze security flaws, misconfigurations, and insecure code; test authentication systems, access controls, and network defenses; identify exploitable credentials and attack paths.'],
                      ['Reporting & Documentation', 'Document all findings, methodologies, and evidence of vulnerabilities; prepare detailed technical and executive reports; communicate risks and remediation recommendations to stakeholders.'],
                      ['Remediation & Security Improvement', 'Recommend solutions to address security gaps, work with development and infrastructure teams to implement fixes, and validate remediation through re-testing and follow-ups.'],
                      ['Tooling & Automation', 'Use security tools such as Metasploit, Nmap, Burp Suite, Kali, vulnerability scanners, and Pentera Console and Surface; develop scripts (Python, Bash) to automate testing; design custom exploits and testing methodologies.'],
                      ['Continuous Learning & Threat Research', 'Stay current on emerging threats, exploitation techniques, and security vulnerabilities (OWASP, CVEs); research new attack vectors and penetration testing techniques.'],
                    ].map(([title, body]) => (
                      <div key={title} style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                          flexShrink: 0,
                          marginTop: '8px',
                          boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                        }}></div>
                        <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                          <strong style={{ color: '#eaeef9' }}>{title}:</strong> {body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h3 style={{ color: '#eaeef9', fontSize: '32px', fontWeight: '600', marginBottom: '12px', letterSpacing: '-1.28px' }}>
                    Requirements
                  </h3>
                  <p style={{ color: '#d0d8e8', fontSize: '18px', marginBottom: '20px' }}>What We&apos;re Looking For</p>
                  <p style={{ color: '#d0d8e8', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
                    We seek experienced security professionals with strong expertise in offensive security, threat detection, and incident investigation.
                  </p>
                  <div style={{ marginTop: '24px' }}>
                    {[
                      'Hands-on experience with SIEM platforms such as Splunk, Microsoft Sentinel, QRadar, or Elastic',
                      'Strong knowledge of Threat Modeling methodologies and attack path analysis',
                      'Experience creating and tuning correlation rules, analytics, alerts, and dashboards',
                      'Hands-on experience with EDR/XDR solutions such as CrowdStrike, Microsoft Defender, SentinelOne, or Carbon Black',
                      'Experience analyzing security logs from endpoints, networks, cloud platforms, and identity systems',
                      'Experience with incident investigation and security monitoring',
                    ].map((item) => (
                      <div key={item} style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start' }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #2a57be 0%, #4a7cff 100%)',
                          flexShrink: 0,
                          marginTop: '8px',
                          boxShadow: '0 0 8px rgba(42, 87, 190, 0.5)'
                        }}></div>
                        <p style={{ color: '#d0d8e8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LCA Notices Button Section */}
        <div className="lca-notices-section">
          <div className="lca-notices-container">
            <Link href="/lca-notices" className="lca-notices-button">
              <span>LCA Notices</span>
              <Image src="/img/arrow-up-right.svg" alt="arrow" className="lca-arrow-icon" width={20} height={20} />
            </Link>
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
