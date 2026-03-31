import './App.css'

function App() {
  const services = [
    {
      title: 'Technical Documentation',
      description:
        'Create high-quality documentation for software and hardware products, including in-product help and release content.',
    },
    {
      title: 'Agile Project Delivery',
      description:
        'Collaborate with product, engineering, and design teams in sprint cycles to ship clear and customer-focused outcomes.',
    },
    {
      title: 'Marketing Operations',
      description:
        'Support marcom initiatives with HubSpot and Salesforce integration, email campaigns, and analytics-backed improvements.',
    },
  ]

  const projects = [
    {
      name: 'ServiceNow',
      category: 'Sr. Staff Technical Writer | 2017-Present',
      result:
        'Developed ITSM documentation across 6 applications, improved usability through analytics, and supported new content architecture.',
    },
    {
      name: 'Internap',
      category: 'Sr. Writer/Manager - Managed Hosting | 2015-2016',
      result:
        'Managed delivery workflows across seven datacenters and coordinated multi-team implementation plans for customer projects.',
    },
    {
      name: 'LitePoint Corporation',
      category: 'Technical Writer / Marcom Manager | 2008-2015',
      result:
        'Owned end-to-end documentation, localization, and marcom deliverables for wireless test solution products.',
    },
  ]

  const timeline = [
    {
      role: 'Sr. Staff Technical Writer',
      company: 'ServiceNow',
      years: '2017-Present',
      highlights:
        'Developed ITSM documentation for six applications, created in-product help content, and improved usability using web analytics and user feedback.',
    },
    {
      role: 'Sr. Writer/Manager - Managed Hosting',
      company: 'Internap',
      years: '2015-2016',
      highlights:
        'Owned deliverables for managed hosting implementations across seven datacenters and coordinated project scope, resources, and schedules.',
    },
    {
      role: 'Sole Technical Writer / Marcom Manager',
      company: 'LitePoint Corporation',
      years: '2008-2015',
      highlights:
        'Led product documentation, API docs, localization, and marketing operations including HubSpot, Salesforce integrations, and campaign reporting.',
    },
    {
      role: 'Senior Technical Writer',
      company: 'Cisco Systems',
      years: '2006-2008',
      highlights:
        'Led documentation efforts for DOCSIS 3.0 downstream channel bonding and communicated complex hardware-software implementation details clearly.',
    },
    {
      role: 'Senior Technical Writer',
      company: 'Phoenix Technologies',
      years: '2004-2006',
      highlights:
        'Created and edited security, imaging, and recovery documentation, coordinated translations, and won the "Above the Call" award for delivery under tight deadlines.',
    },
    {
      role: 'Technical Writer',
      company: 'HP Shopping',
      years: '2004',
      highlights:
        'Wrote schema reference material and user-interface requirements documentation for offshore training and implementation alignment.',
    },
    {
      role: 'Information Developer',
      company: 'PeopleSoft',
      years: '2002-2003',
      highlights:
        'Developed implementation documentation from PRDs and produced new and updated guidance for services procurement workflows.',
    },
    {
      role: 'Technical Writer',
      company: 'Broadbase / Kana Software',
      years: '1999-2001',
      highlights:
        'Designed user, installation, reference, and OEM manuals plus online help for analytics products using FrameMaker and RoboHTML.',
    },
  ]

  const skills = [
    'Technical writing for software and hardware products',
    'Agile and scrum collaboration with cross-functional teams',
    'Project management for localization and vendor workflows',
    'In-product help and customer-centric content strategy',
    'HubSpot, Salesforce, Google Analytics, and campaign reporting',
    'Tools: Confluence, Smartsheet, FrameMaker, RoboHelp, MadCap Flare, DITA, DocBook',
  ]

  const certifications = [
    'PMP',
    'Certified Scrum Master (CSM)',
    'HubSpot Inbound Marketing',
    'Certificate in Technical Writing, De Anza College',
    'M.S. in Marine Biology',
  ]

  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#home">
          Rekha Raman
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Highlights</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="eyebrow">Technical Writer | Project Manager | Marcom</p>
          <h1>Helping teams ship clear documentation and customer-focused product content.</h1>
          <p className="lead">
            I am a senior technical writing and project management professional
            based in San Jose, with deep experience across cloud platforms,
            hosting operations, and cross-functional delivery.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:r_rekha02@yahoo.com">
              Email Rekha
            </a>
            <a
              className="btn btn-secondary"
              href="http://www.linkedin.com/in/rekharaman/"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </a>
          </div>
          <div className="hero-stats" aria-label="Key metrics">
            <article>
              <h2>19+ yrs</h2>
              <p>Industry experience</p>
            </article>
            <article>
              <h2>PMP + CSM</h2>
              <p>Certified delivery focus</p>
            </article>
            <article>
              <h2>Cross-functional</h2>
              <p>Docs, marcom, and operations</p>
            </article>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Everything needed to launch with confidence</h2>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-heading">
            <p className="eyebrow">Career highlights</p>
            <h2>Impact delivered across documentation and operations</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.name} className="project-item">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.category}</p>
                </div>
                <p className="project-result">{project.result}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-heading">
            <p className="eyebrow">Experience timeline</p>
            <h2>Career progression and role ownership</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article key={`${item.company}-${item.years}`} className="timeline-item">
                <p className="timeline-years">{item.years}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p>{item.highlights}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-heading">
            <p className="eyebrow">Skills and certifications</p>
            <h2>Core capabilities and credentials</h2>
          </div>
          <div className="skills-layout">
            <ul className="skills-list">
              {skills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="certifications">
              <h3>Certifications</h3>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="testimonial">
          <blockquote>
            "Rekha combines technical depth, project discipline, and customer
            empathy to deliver content that drives product adoption."
          </blockquote>
          <p>Recognized with the "Do the Right Thing" award at ServiceNow</p>
        </section>

        <section id="contact" className="section contact">
          <div>
            <p className="eyebrow">Let us connect</p>
            <h2>Available for technical writing and documentation leadership roles.</h2>
            <p>
              Reach out for opportunities in technical documentation, agile
              project leadership, and marcom operations.
            </p>
          </div>
          <a className="btn btn-primary" href="mailto:r_rekha02@yahoo.com">
            r_rekha02@yahoo.com
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
