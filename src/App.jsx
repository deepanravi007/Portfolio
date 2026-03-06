import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Monitor, Award, Briefcase, GraduationCap } from 'lucide-react';
import './index.css';

// --- Subcomponents ---

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.section 
      ref={ref}
      className="section-container"
      style={{ y, opacity, scale, height: '120vh' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '2rem',
          border: '2px solid rgba(255,255,255,0.1)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          <img src="/profile.jpg" alt="R. Deepan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h1 className="hero-text">R. DEEPAN</h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          marginTop: '1rem',
          fontWeight: 500,
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          Assistant Librarian
        </p>
      </motion.div>
    </motion.section>
  );
};

const Summary = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 0.5"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section className="section-container" ref={ref} style={{ minHeight: '80vh' }}>
      <motion.div 
        style={{ opacity, y, maxWidth: '800px', textAlign: 'center' }}
      >
        <h2 className="section-title">Professional Summary</h2>
        <p style={{ fontSize: '1.5rem', lineHeight: 1.6, color: 'var(--text-secondary)', fontWeight: 400 }}>
          With seven years of experience shelving and organizing printed materials and digital resources, I am well-versed in guest assistance and the digitization of libraries. Focused on maximizing patron satisfaction while balancing team support and operations needs.
        </p>
      </motion.div>
    </section>
  );
};

const ExperienceCard = ({ title, company, period, tasks, index }) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{ marginBottom: '2rem', width: '100%', maxWidth: '800px', textAlign: 'left' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{title}</h3>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginTop: '0.5rem' }}>{company}</h4>
        </div>
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }}>
          {period}
        </span>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task, i) => (
          <li key={i} style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--accent)', marginRight: '10px' }}>•</span>
            <span style={{ lineHeight: 1.5 }}>{task}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

const Experience = () => {
  const experiences = [
    {
      title: "Assistant Librarian",
      company: "Vels Institute of Science Technology & Advanced Studies - Chennai",
      period: "Jan 2022 - Current",
      tasks: [
        "Located requested books on shelves and in the library database and fetched items for patrons.",
        "Researched, planned and set up attractive and informative library exhibits.",
        "Instructed students on research techniques and the use of online resources.",
        "Gathered and utilized diverse technologies for modern and more effective digitalisation of the library."
      ]
    },
    {
      title: "Assistant Librarian",
      company: "SRM Trichy Arts and Science College - Tiruchirappalli",
      period: "Jun 2019 - Nov 2021",
      tasks: [
        "Catalogued and sorted books and library materials.",
        "Maintained and updated patron records in the library system database.",
        "Drove expansion of library collections and programs in response to student and faculty needs and special requests."
      ]
    },
    {
      title: "Assistant Librarian",
      company: "SKP Engineering College - Tiruvannamalai",
      period: "Feb 2018 - May 2019",
      tasks: [
        "Handled check-in and check-out process of library books and materials at the circulation desk.",
        "Answered questions from patrons and helped to find desired materials.",
        "Maintained a secure environment by monitoring visitors at the front desk."
      ]
    }
  ];

  return (
    <section className="section-container" style={{ padding: '4rem 2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
        <Briefcase size={32} color="var(--accent)" style={{ marginRight: '1rem' }} />
        <h2 className="section-title" style={{ marginBottom: 0 }}>Experience</h2>
      </div>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} index={i} />
        ))}
      </div>
    </section>
  );
};

const SkillsGrid = () => {
  const skills = [
    { title: "Library Automation", icon: <BookOpen size={24} /> },
    { title: "Classification Systems", icon: <BookOpen size={24} /> },
    { title: "Research Support", icon: <Award size={24} /> },
    { title: "Koha Mgmt Software", icon: <Monitor size={24} /> },
    { title: "D-Space Archiving", icon: <Monitor size={24} /> },
    { title: "Vidwan Portal", icon: <Monitor size={24} /> },
    { title: "Anti-Plagiarism (Turnitin)", icon: <Award size={24} /> },
  ];

  return (
    <section className="section-container" style={{ minHeight: '80vh' }}>
      <h2 className="section-title">Digitalization & Skills</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        width: '100%',
        maxWidth: '1000px',
        marginTop: '2rem'
      }}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem 1rem' }}
          >
            <div style={{ color: 'var(--accent)' }}>{skill.icon}</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 500 }}>{skill.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Education = () => {
    const educationItems = [
        {
            degree: "Master of Library and Information Science",
            institution: "Annamalai University",
            year: "2016 - 2017"
        },
        {
            degree: "Bachelor of Library and Information Science",
            institution: "Annamalai University",
            year: "2015 - 2016"
        },
        {
             degree: "Bachelor Computer Applications",
             institution: "TBML College",
             year: "2012 - 2015"
        }
    ]

    return (
        <section className="section-container" style={{ minHeight: '80vh', paddingBottom: '10rem' }}>
             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
                <GraduationCap size={32} color="var(--accent)" style={{ marginRight: '1rem' }} />
                <h2 className="section-title" style={{ marginBottom: 0 }}>Education</h2>
            </div>
            <div style={{ width: '100%', maxWidth: '800px' }}>
                {educationItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        style={{
                            padding: '2rem',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>{item.degree}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{item.institution}</p>
                        </div>
                        <span style={{ color: 'var(--accent)', fontWeight: 500 }}>{item.year}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

function App() {
  return (
    <main style={{ backgroundColor: '#000' }}>
      <Hero />
      <Summary />
      <Experience />
      <SkillsGrid />
      <Education />
    </main>
  );
}

export default App;
