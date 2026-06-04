const en = {
  // ── Nav ──────────────────────────────────────────────
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Background',
    contact: 'Contact',
    hire: 'Hire Me →',
  },

  // ── Hero ─────────────────────────────────────────────
  hero: {
    badge: 'Seeking IT Role · Japan · 2026',
    line1: 'LEARNING.',
    line2: 'BUILDING.',
    line3: 'GROWING.',
    roles: ['HTML & CSS', 'JavaScript', 'TypeScript', 'React Developer'],
    cta1: 'View My Work →',
    cta2: 'Say Hello',
    stat1n: '1+',
    stat1l: 'Designer Exp.',
    stat2n: 'BSc',
    stat2l: 'CSE Degree',
    stat3n: '4',
    stat3l: 'Languages',
  },

  // ── Marquee ───────────────────────────────────────────
  marquee: {
    items: [
      'React',
      '✦',
      'TypeScript',
      '✦',
      'JavaScript',
      '✦',
      'HTML & CSS',
      '✦',
      'Git',
      '✦',
      'Figma',
      '✦',
      'Responsive Design',
      '✦',
      'Vite',
      '✦',
    ],
  },

  // ── About ─────────────────────────────────────────────
  about: {
    eyebrow: 'About Me',
    badge: 'JUNIOR\nDEV',
    location: 'Kawasaki, Japan · 2026',
    heading1: 'CSE graduate,',
    heading2: 'ready',
    heading3: 'to contribute.',
    p1: "Hi! I'm <strong>Shima Taklima Kabir</strong>, a frontend developer with a <strong>B.Sc. in Computer Science & Engineering (CSE)</strong> from Britannia University. I have <strong>1 year of professional experience</strong> as a <strong>Junior Designer</strong> at e-Soft in Bangladesh, building web interfaces with <strong>HTML, CSS, and JavaScript</strong>.",
    p2: "Based in <strong>Kawasaki, Japan</strong>, I'm <strong>actively seeking an IT role</strong> and continue to grow through TypeScript, React, and personal projects. I focus on user-friendly UI/UX and writing maintainable, reusable code.",
    meta: [
      ['Status', 'Actively seeking IT role in Japan'],
      ['Location', 'Kawasaki, Kanagawa'],
      ['Focus', 'Frontend / Web Development'],
      ['Languages', 'Bengali · English · Japanese · Hindi'],
    ],
    langBadges: [
      { icon: '🇧🇩', text: 'Bengali · Native' },
      { icon: '🇬🇧', text: 'English · Fluent' },
      { icon: '🇯🇵', text: 'Japanese · Professional Working Proficiency' },
      { icon: '🇮🇳', text: 'Hindi · Working Proficiency' },
    ],
    cv: 'Download CV ↓',
    socials: [
      { name: 'GitHub', url: 'https://github.com/shima-taklima' },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/taklima-kabir-shima-33bb33276/',
      },
      { name: 'Twitter', url: 'https://x.com/shimataklima' },
    ],
  },

  // ── Skills ────────────────────────────────────────────
  skills: {
    eyebrow: 'Skills & Technologies',
    note: 'Skills developed through <strong>Udemy courses</strong> and applied in real projects. Percentages reflect current proficiency — improving every day.',
    heading1: 'My Current',
    heading2: 'Tech Stack',
    group1: 'Core Languages & Frameworks',
    group2: 'Tools & Concepts',
    alsoLabel: "Technologies I've worked with",
    coursesLabel: 'Completed Courses',
    front: [
      { n: 'HTML5 & CSS3', v: 80 },
      { n: 'JavaScript (ES6+)', v: 70 },
      { n: 'TypeScript', v: 60 },
      { n: 'React', v: 65 },
    ],
    tools: [
      { n: 'Git & GitHub', v: 65 },
      { n: 'Responsive Design', v: 75 },
      { n: 'CSS Flexbox / Grid', v: 78 },
      { n: 'VS Code / Dev Tools', v: 80 },
    ],
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Git',
      'GitHub',
      'Flexbox',
      'CSS Grid',
      'Responsive Design',
      'Vite',
      'npm',
      'Figma (basics)',
    ],
    courses: [
      {
        name: 'The Complete JavaScript Course',
        platform: 'Udemy',
        instructor: 'Jonas Schmedtmann',
        status: 'Completed',
      },
      {
        name: 'React — The Complete Guide',
        platform: 'Udemy',
        instructor: 'Maximilian Schwarzmüller',
        status: 'Completed',
      },
      {
        name: 'Understanding TypeScript',
        platform: 'Udemy',
        instructor: 'Maximilian Schwarzmüller',
        status: 'Completed',
      },
      {
        name: 'Build Responsive Websites with HTML & CSS',
        platform: 'Udemy',
        instructor: 'Jonas Schmedtmann',
        status: 'Completed',
      },
    ],
  },

  // ── Projects ──────────────────────────────────────────
  projects: {
    eyebrow: 'Projects',
    heading1: "Things I've",
    heading2: 'Built',
    note: 'Projects completed during my courses — each one taught me something new. All live and on GitHub.',
    github: 'GitHub Profile ↗',
    live: 'Live ↗',
    githubLink: 'GitHub ↗',
    items: [
      {
        num: '01',
        cat: 'HTML & CSS',
        year: '2024',
        title: 'Omnifood — Landing Page',
        desc: 'A fully responsive landing page for a fictional food delivery startup. Built with pure HTML and CSS using Flexbox and Grid. Features smooth scrolling, sticky nav, and mobile hamburger menu.',
        tags: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive'],
        live: 'https://tarotaro.github.io/omnifood', // TODO
        github: 'https://github.com/tarotaro/omnifood', // TODO
      },
      {
        num: '02',
        cat: 'JavaScript',
        year: '2024',
        title: 'Bankist — Banking App',
        desc: 'A simulated online banking UI with login, money transfers, loan requests, and account closure. Built with vanilla JavaScript using arrays, DOM manipulation, and timers.',
        tags: ['JavaScript', 'DOM', 'Arrays', 'CSS3'],
        live: 'https://tarotaro.github.io/omnifood', // TODO
        github: 'https://github.com/tarotaro/omnifood', // TODO
      },
      {
        num: '03',
        cat: 'React',
        year: '2025',
        title: 'usePopcorn — Movie Tracker',
        desc: 'A React app that lets users search movies via the OMDB API, view details, rate them, and track a personal watchlist. Practiced useState, useEffect, custom hooks, and localStorage.',
        tags: ['React', 'Hooks', 'API', 'localStorage'],
        live: 'https://tarotaro.github.io/omnifood', // TODO
        github: 'https://github.com/tarotaro/omnifood', // TODO
      },
      {
        num: '04',
        cat: 'TypeScript & React',
        year: '2025',
        title: 'Budget Tracker App',
        desc: 'A personal finance tracker built with React and TypeScript. Add/remove expenses by category, view spending summaries, and filter by date. My first TypeScript project end-to-end.',
        tags: ['TypeScript', 'React', 'Context API', 'Vite'],
        live: 'https://tarotaro.github.io/omnifood', // TODO
        github: 'https://github.com/tarotaro/omnifood', // TODO
      },
    ],
  },

  // ── Experience ────────────────────────────────────────
  experience: {
    eyebrow: 'Background',
    heading1: 'Education &',
    heading2: 'Experience',
    note: 'B.Sc. CSE graduate with 1 year of junior designer experience (HTML/CSS/JS) in Bangladesh, professional working proficiency in Japanese, and ongoing frontend development in Japan.',
    ongoing: 'ONGOING',
    nextLabel: "What's Next",
    nexts: [
      {
        goal: 'Next.js',
        detail:
          'Currently reading docs and building a blog project to learn SSR/SSG.',
      },
      {
        goal: 'Testing',
        detail:
          'Planning to learn React Testing Library and Jest for writing proper tests.',
      },
      {
        goal: 'IT Job in Japan',
        detail:
          'Actively applying for IT and frontend/web development roles across Japan.',
      },
    ],
    items: [
      {
        org: 'Self-Directed Learning',
        period: 'Jan 2024 — Present',
        loc: 'Online / Udemy',
        role: 'Frontend Developer (Self-study)',
        desc: 'Structured frontend education covering HTML, CSS, JavaScript, TypeScript, and React. Completed four Udemy courses and shipped multiple live portfolio projects.',
        tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
        isCurrent: true,
      },
      {
        org: 'Kanrin Japanese Language School',
        period: 'Apr 2024 — Jun 2025',
        loc: 'Japan',
        role: 'Japanese Language Program',
        desc: 'Completed full-time Japanese language training while preparing for professional work in Japan. Graduated June 2025.',
        tags: ['Japanese', 'JLPT N2', 'JLPT N3'],
        isCurrent: false,
      },
      {
        org: 'Foreign Worker Support Training',
        period: 'Jan 2024 — Mar 2024',
        loc: 'Japan',
        role: 'Work & Settlement Support Program',
        desc: 'Completed training on working and settling in Japan as a foreign professional.',
        tags: ['Japan Work Culture', 'Professional Training'],
        isCurrent: false,
      },
      {
        org: 'e-Soft Co., Ltd.',
        period: 'Jan 2021 — Feb 2022',
        loc: 'Bangladesh',
        role: 'Junior Designer',
        desc: 'Designed and built web interfaces using HTML, CSS, and JavaScript. One year of hands-on frontend experience in a professional IT environment.',
        tags: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
        isCurrent: false,
      },
      {
        org: 'Britannia University',
        period: 'Jun 2016 — Jun 2020',
        loc: 'Bangladesh',
        role: 'B.Sc. Computer Science & Engineering (CSE)',
        desc: 'Completed a Bachelor of Science degree in Computer Science and Engineering, building a strong foundation in programming and software development.',
        tags: ['CSE', 'Computer Science', 'Software Engineering'],
        isCurrent: false,
      },
    ],
  },

  // ── Contact ───────────────────────────────────────────
  contact: {
    eyebrow: 'Get In Touch',
    heading1: "Let's Talk",
    heading2: 'Opportunities',
    heading3: 'Together.',
    intro:
      "I'm <strong>actively seeking an IT role in Japan</strong> — frontend development, web engineering, or related positions. If you think I'd be a good fit, I'd love to hear from you!",
    quote:
      '"B.Sc. CSE graduate with 1 year of junior designer experience, multilingual (Bengali, English, Japanese, Hindi), and strong motivation to grow as an IT professional in Japan."',
    links: [
      [
        'Email',
        'taklimakabir120@gmail.com',
        'mailto:taklimakabir120@gmail.com',
      ],
      ['Phone', '080-7672-9428', 'tel:08076729428'],
      [
        'GitHub',
        'github.com/shima-taklima',
        'https://github.com/shima-taklima',
      ],
      [
        'LinkedIn',
        'linkedin.com/in/taklima-kabir-shima-33bb33276',
        'https://www.linkedin.com/in/taklima-kabir-shima-33bb33276/',
      ],
    ],
    labelName: 'Your Name',
    labelEmail: 'Email Address',
    labelMessage: 'Message',
    placeholderName: 'Your name',
    placeholderEmail: 'your@email.com',
    placeholderMessage:
      'Hi! I saw your portfolio and would love to chat about...',
    send: 'Send Message →',
    sending: 'Sending...',
    successTitle: 'Thanks for reaching out!',
    successBody: "I'll get back to you as soon as possible.",
    another: 'Send Another',
    errorTitle: 'Something went wrong',
    errorBody:
      'Your message could not be sent. Please try again or email me directly.',
    tryAgain: 'Try again',
    spamNote: 'Your information is never shared or sold.',
  },

  // ── Footer ────────────────────────────────────────────
  footer: {
    tagline: 'IT Developer · BSc CSE · Seeking role in Japan',
    copy: '· Built with React + Tailwind CSS · Deployed on GitHub Pages',
    socials: [
      { name: 'GitHub', url: 'https://github.com/shima-taklima' },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/taklima-kabir-shima-33bb33276/',
      },
      { name: 'Twitter', url: 'https://x.com/shimataklima' },
    ],
  },
};

export default en;
