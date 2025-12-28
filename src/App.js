import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <div className="profile-image-container">
            <img 
              src="/images/profile.jpg" 
              alt="Profile" 
              className="profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="profile-image-placeholder">
              <span>Add your profile photo</span>
            </div>
          </div>
          <div className="header-text">
            <h1 className="name">Mariiam Raiimzhanova</h1>
            <p className="title">Computer Science Student | IT Intern</p>
            <p className="location">📍 Bishkek, Kyrgyzstan</p>
            <div className="contact-info">
              <a href="https://www.linkedin.com/in/mariiam-raiimzhanova-37bba625b" target="_blank" rel="noopener noreferrer" className="contact-link">
                LinkedIn
              </a>
              <span className="separator">•</span>
              <a href="https://github.com/markodesu" target="_blank" rel="noopener noreferrer" className="contact-link">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* About Section */}
        <section className="section">
          <h2 className="section-title">About Me</h2>
          <div className="section-content">
            <p>
              I am a Computer Science undergraduate at the University of Central Asia (Class of 2027) 
              with hands-on experience in IT support, IoT systems, and software development. I have worked 
              on real-world projects involving hardware configuration, networking, dashboard deployment, and 
              smart agriculture systems. I am particularly interested in building practical, reliable systems 
              and am seeking IT internship opportunities to further develop my technical and professional skills.
            </p>
            <p style={{marginTop: '1rem'}}>
              I am particularly interested in applying technology to real-world problems in sustainability and health. 
              I value hands-on learning, interdisciplinary collaboration, and continuous improvement. I am actively 
              looking for mentorship and professional growth opportunities in the tech industry.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <div className="section-content">
            <div className="experience-item">
              <div className="experience-header">
                <h3 className="job-title">Intern — Climate-Smart Agriculture Demonstration Plot Project</h3>
                <span className="job-period">Oct 2025 – Present</span>
              </div>
              <p className="company-name">University of Central Asia | Kyrgyzstan</p>
              <ul className="job-description">
                <li>Designed the software and hardware architecture for a climate-smart agriculture system</li>
                <li>Worked with IoT devices including Arduino Uno/Mega, ESP8266, and Raspberry Pi</li>
                <li>Assembled hardware components and developed software for multiple subsystems</li>
                <li>Built, tested, and integrated a working prototype into a greenhouse environment on UCA's Naryn campus</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3 className="job-title">IT Intern</h3>
                <span className="job-period">Jun 2025 – Aug 2025</span>
              </div>
              <p className="company-name">OSCE Academy in Bishkek | Bishkek, Kyrgyzstan</p>
              <ul className="job-description">
                <li>Provided on-site IT support, including hardware maintenance and operating system installation</li>
                <li>Configured and replaced network equipment</li>
                <li>Assisted in installing telephone and network wiring</li>
                <li>Performed system backups using Acronis True Image</li>
                <li>Supported technical operations during academic and institutional events</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="section-content">
            <div className="education-item">
              <div className="education-header">
                <h3 className="degree">Bachelor of Science in Computer Science</h3>
                <span className="education-period">2022 – 2027</span>
              </div>
              <p className="institution">University of Central Asia</p>
              <p className="education-details">Prep year included</p>
            </div>
            <div className="education-item">
              <div className="education-header">
                <h3 className="degree">High School Diploma</h3>
                <span className="education-period">Graduated</span>
              </div>
              <p className="institution">Aichurok High School, Bishkek</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <div className="section-content">
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Programming Languages</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Python</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Frameworks & Web Technologies</h4>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Spring Boot</span>
                  <span className="skill-tag">Spring MVC</span>
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Systems & Tools</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Arduino Uno/Mega</span>
                  <span className="skill-tag">ESP8266</span>
                  <span className="skill-tag">Raspberry Pi</span>
                  <span className="skill-tag">Acronis True Image</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>IT & Systems Skills</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Hardware Maintenance</span>
                  <span className="skill-tag">OS Installation</span>
                  <span className="skill-tag">Networking</span>
                  <span className="skill-tag">Technical Support</span>
                  <span className="skill-tag">System Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="section-content">
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image-container">
                  <img 
                    src="/images/project1.jpg" 
                    alt="Medical Chatbot" 
                    className="project-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="project-image-placeholder">
                    <span>Project Image</span>
                  </div>
                </div>
                <h3 className="project-title">Medical Chatbot (NLP API)</h3>
                <p className="project-description">
                  Developed an AI-powered chatbot to answer common medical-related questions. 
                  Integrated NLP APIs to process and respond to user queries.
                </p>
              </div>

              <div className="project-card">
                <div className="project-image-container">
                  <img 
                    src="/images/project2.jpg" 
                    alt="Production Dashboards" 
                    className="project-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="project-image-placeholder">
                    <span>Project Image</span>
                  </div>
                </div>
                <h3 className="project-title">Production-Ready Dashboards</h3>
                <p className="project-description">
                  Designed and deployed interactive dashboards for data visualization and reporting. 
                  Focused on usability, data clarity, and deployment readiness.
                </p>
              </div>

              <div className="project-card">
                <div className="project-image-container">
                  <img 
                    src="/images/project3.jpg" 
                    alt="GitHub Projects" 
                    className="project-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="project-image-placeholder">
                    <span>GitHub</span>
                  </div>
                </div>
                <h3 className="project-title">Personal Projects</h3>
                <p className="project-description">
                  Multiple software and web projects available on GitHub. 
                  Check out my work: <a href="https://github.com/markodesu" target="_blank" rel="noopener noreferrer" style={{color: '#667eea', textDecoration: 'none'}}>github.com/markodesu</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hackathons & Competitions Section */}
        <section className="section">
          <h2 className="section-title">Hackathons & Competitions</h2>
          <div className="section-content">
            <div className="experience-item">
              <div className="experience-header">
                <h3 className="job-title">Digital Farmer Hackathon</h3>
                <span className="job-period">Top 10 Teams</span>
              </div>
              <p className="company-name">Team Competition</p>
              <ul className="job-description">
                <li>Collaborated in a team to develop a digital solution addressing agricultural challenges</li>
                <li>Participated in rapid prototyping, problem-solving, and project presentation under time constraints</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research & Publications Section */}
        <section className="section">
          <h2 className="section-title">Research & Publications</h2>
          <div className="section-content">
            <div className="experience-item">
              <div className="experience-header">
                <h3 className="job-title">Attitude matters more: The impact of perceived competence and attitudes toward science on science engagement among university students</h3>
                <span className="job-period">May 2024</span>
              </div>
              <p className="company-name">International Journal of Science Education, Taylor & Francis</p>
              <p className="education-details" style={{marginTop: '0.5rem'}}>
                Role: Contributor (Data Collection) — Acknowledged in the publication
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="section">
          <h2 className="section-title">Certifications</h2>
          <div className="section-content">
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Meta Certifications</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Advanced React (2024)</span>
                  <span className="skill-tag">Programming with JavaScript (2024)</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Other Certifications</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Spring Framework Specialization - LearnQuest (2024)</span>
                  <span className="skill-tag">Inheritance and Data Structures in Java - UPenn (2024)</span>
                  <span className="skill-tag">Additional Java & Spring certifications (LinkedIn)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="section">
          <h2 className="section-title">Languages</h2>
          <div className="section-content">
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Language Proficiency</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Kyrgyz (Native)</span>
                  <span className="skill-tag">Russian (Fluent)</span>
                  <span className="skill-tag">English (Fluent)</span>
                  <span className="skill-tag">Turkish (Advanced)</span>
                  <span className="skill-tag">German (Intermediate)</span>
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

