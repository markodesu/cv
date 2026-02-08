import React from 'react';
import './App.css';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-content">
          <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>MR</a>
          <ul className="navbar-menu">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
          </ul>
          <div className="navbar-social">
            <a href="https://github.com/markodesu" target="_blank" rel="noopener noreferrer" className="navbar-social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mariiam-raiimzhanova-37bba625b" target="_blank" rel="noopener noreferrer" className="navbar-social-link">
              LinkedIn
            </a>
            <a href="https://codeforces.com/profile/markodesu" target="_blank" rel="noopener noreferrer" className="navbar-social-link">
              Codeforces
            </a>
            <a href="mailto:rr.otaku@gmail.com" className="navbar-social-link">
              Email
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Screen */}
      <section className="hero-section" id="home">
        <div className="hero-left">
          <div className="hero-badge">🇰🇬 From Kyrgyzstan</div>
          <h1 className="hero-name">Mariiam Raiimzhanova</h1>
          <p className="hero-title">
            Computer Science Student | <span className="highlight-blue">IT Intern</span> | <span className="highlight-purple">Developer</span>
          </p>
          <a href="mailto:rr.otaku@gmail.com" className="hero-cta">Get in Touch</a>
        </div>
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img 
              src="/images/pow.png" 
              alt="Mariiam Raiimzhanova" 
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hero-image-placeholder">
              <span>Add your profile photo</span>
            </div>
          </div>
        </div>
      </section>

      <main className="main-content">
        {/* About Section */}
        <section className="section" id="about">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Learn more about my background, passions, and career goals</p>
          <div className="section-content">
            <p>
              I am a Computer Science undergraduate at the University of Central Asia with hands-on experience in
              IT support, IoT systems, and software development. I enjoy working on practical, real-world problems
              where technology meets sustainability and health, from building climate-smart agriculture systems to
              developing deployed dashboards and intelligent chatbots. What drives me most is turning complex technical 
              ideas into reliable, usable solutions. I value continuous learning, collaboration, and hands-on experimentation, 
              and I am currently seeking IT internship opportunities where I can grow professionally while contributing meaningfully 
              to impactful projects.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section" id="experience">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey and key accomplishments</p>
          <div className="section-content">
            <div className="experience-item">
              <div className="experience-header">
                <h3 className="job-title">Glocal Insight & Innovation Project</h3>
                <span className="job-period">Jan 28–30</span>
              </div>
              <p className="company-name">International medical convergence challenge (Soonchunhyang Univ., IUK, UCA)</p>
              <ul className="job-description">
                <li>Conducted rapid field research in Kyrgyzstan hospitals and developed <strong>K‑Fast Track</strong>: Phase 1 — QR-based digital Medical ID web platform; Phase 2 — planned AI and smartwatch SOS integration.</li>
                <li>Addressed high stroke fatality linked to limited MRI/CT access; our team was one of three awarded.</li>
              </ul>
            </div>
            <div className="experience-item">
              <div className="experience-header">
                <h3 className="job-title">Intern for Smart-Agriculture Plot Project</h3>
                <span className="job-period">Oct 2025 - Present</span>
              </div>
              <p className="company-name">University of Central Asia</p>
              <ul className="job-description">
                <li>Designed the software and hardware structure for a climate-smart agriculture system using IoT technologies.</li>
                <li>Assembled and configured IoT devices (Arduino Uno/Mega, ESP8266, Raspberry Pi) and developed supporting software components.</li>
                <li>Built, tested, and integrated a working prototype for deployment in a greenhouse environment.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3 className="job-title">IT intern</h3>
                <span className="job-period">Jun 2025 - Aug 2025</span>
              </div>
              <p className="company-name">OSCE Academy in Bishkek</p>
              <ul className="job-description">
                <li>Provided on-site IT support, including hardware maintenance, operating system installation, and troubleshooting.</li>
                <li>Configured and replaced network equipment, assisted with network and telephone wiring, and performed system backups using Acronis True Image.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3 className="job-title">Research Contributor</h3>
                <span className="job-period">2024</span>
              </div>
              <p className="company-name">International Journal of Science Education</p>
              <ul className="job-description">
                <li>
                  Contributed to data collection for a peer-reviewed study published in International Journal of Science Education (Taylor & Francis, 2024). 
                  <a href="https://doi.org/10.1080/09500693.2024.2354943" target="_blank" rel="noopener noreferrer">View publication (DOI)</a>
                </li>
                <li>Acknowledged contributor in the publication.</li>
              </ul>
            </div>

            
          </div>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work and achievements</p>
          <div className="section-content">
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image-container">
                      <a href="https://daa-dip-dashboard.vercel.app/daa" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="/images/dashboard.png" 
                          alt="Dashboard Project" 
                          className="project-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      </a>
                      <div className="project-image-placeholder">
                        <span>Project Image</span>
                      </div>
                    </div>
                    <h3 className="project-title">
                      <a href="https://daa-dip-dashboard.vercel.app/daa" target="_blank" rel="noopener noreferrer">Dashboard</a>
                    </h3>
                    <p className="project-description">
                      I have deployed a dashboard using React for the Frontend on Vercel for Design and Analysis of Algorithms course. Click to open.
                    </p>
              </div>

              <div className="project-card">
                <div className="project-image-container">
                    <a href="https://github.com/markodesu/MediMind" target="_blank" rel="noopener noreferrer">
                      <img 
                        src="/images/medchat.png" 
                        alt="MediMind Project" 
                        className="project-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    </a>
                    <div className="project-image-placeholder">
                      <span>Project Image</span>
                    </div>
                  </div>
                  <h3 className="project-title">
                    <a href="https://github.com/markodesu/MediMind" target="_blank" rel="noopener noreferrer">MediMind</a>
                  </h3>
                  <p className="project-description">
                    I have built a medical chatbot using NLP techniques to assist users with health-related questions. Click to view source.
                  </p>
              </div>

              <div className="project-card">
                <div className="project-image-container">
                    <a href="https://med-platform-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/images/med-platform.png"
                        alt="Med Platform"
                        className="project-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    </a>
                    <div className="project-image-placeholder">
                      <span>Project Image</span>
                    </div>
                  </div>
                  <h3 className="project-title">
                    <a href="https://med-platform-eta.vercel.app/" target="_blank" rel="noopener noreferrer">Med Platform</a>
                  </h3>
                  <p className="project-description">
                    Demo site from the Glocal Insight project — a prototype of the K‑Fast Track medical platform.
                  </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section" id="education">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background and achievements</p>
          <div className="section-content">
            <div className="education-item">
              <div className="education-header">
                <h3 className="degree">Bachelor's Degree in Computer Science</h3>
                <span className="education-period">2022 - 2027</span>
              </div>
              <p className="institution"><a href="https://www.ucentralasia.org/" target="_blank" rel="noopener noreferrer" className="institution-link">University of Central Asia</a></p>
              <p className="education-details">
                <li>Coursework in programming, data structures, object-oriented design, web development, databases, and computer systems.</li>
                <li>Completed practical projects involving software development, system design, and data-driven applications.</li>
                <li>Actively engaged in hands-on learning through internships, hackathons, and applied university projects.</li>
              </p>
            </div>

            <div className="education-item">
              <div className="education-header">
                <h3 className="degree">High School Diploma</h3>
                <span className="education-period">2016 - 2021</span>
              </div>
              <p className="institution">Aichurok High School</p>
              <p className="education-details">
                <li>Completed secondary education with focus on science and mathematics.</li>
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="section" id="certifications">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional credentials and completed courses</p>
          <div className="section-content">
            <div className="certification-item">
              <h3 className="certification-title">Advanced React</h3>
              <p className="certification-issuer">Meta (2024)</p>
            </div>
            <div className="certification-item">
              <h3 className="certification-title">Spring Framework Specialization</h3>
              <p className="certification-issuer">LearnQuest (2024)</p>
            </div>
            <div className="certification-item">
              <h3 className="certification-title">Programming with JavaScript</h3>
              <p className="certification-issuer">Meta (2024)</p>
            </div>
            <div className="certification-item">
              <h3 className="certification-title">Inheritance & Data Structures in Java</h3>
              <p className="certification-issuer">University of Pennsylvania (2024)</p>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="section" id="languages">
          <h2 className="section-title">Languages</h2>
          <p className="section-subtitle">Fluency and proficiency levels</p>
          <div className="section-content">
            <div className="languages-grid">
              <div className="language-item">
                <h3 className="language-name">Kyrgyz</h3>
                <p className="language-level">Native</p>
              </div>
              <div className="language-item">
                <h3 className="language-name">Russian</h3>
                <p className="language-level">Fluent</p>
              </div>
              <div className="language-item">
                <h3 className="language-name">English</h3>
                <p className="language-level">Fluent</p>
              </div>
              <div className="language-item">
                <h3 className="language-name">Turkish</h3>
                <p className="language-level">Advanced</p>
              </div>
              <div className="language-item">
                <h3 className="language-name">German</h3>
                <p className="language-level">Intermediate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section" id="skills">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
          <div className="section-content">
            <div className="skills-grid">
              <div className="skill-category">
                <div className="skill-icon">💻</div>
                <h4>Programming</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Python</span>
                </div>
              </div>
              <div className="skill-category">
                <div className="skill-icon">🌐</div>
                <h4>Web Technologies</h4>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Spring Boot</span>
                  <span className="skill-tag">HTML/CSS</span>
                </div>
              </div>
              <div className="skill-category">
                <div className="skill-icon">🔧</div>
                <h4>Tools & Systems</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">IoT</span>
                  <span className="skill-tag">Linux</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section (Optional) */}
        <section className="section">
          <h2 className="section-title">Gallery</h2>
          <div className="section-content">
            <div className="gallery-grid">
              <div className="gallery-item">
                <img 
                  src="/images/lol.jpg" 
                  alt="Gallery 1" 
                  className="gallery-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="gallery-placeholder">
                  <span>Image 1</span>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/osce.png" 
                  alt="Gallery 2" 
                  className="gallery-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="gallery-placeholder">
                  <span>Image 2</span>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/IMG_7582.jpg" 
                  alt="Gallery 3" 
                  className="gallery-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="gallery-placeholder">
                  <span>Image 3</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mariiam Raiimzhanova. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

