/* ============================================================
   PORTFOLIO CONTENT
   ------------------------------------------------------------
   This is the ONLY file you need to edit to update your site.
   Replace the placeholder values below with your real details.
   ============================================================ */

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // inline SVG path data (24x24 viewBox)
}

export interface NavItem {
  id: string;     // must match a <section id="...">
  label: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string; // cover image URL or /public path
  link?: string;
}

export interface Skill {
  name: string;
  icon: string; // small logo URL or /public path
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description: string;
  image: string; // cover image URL or /public path
}

export interface ExtraCurricular {
  title: string;
  detail: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  image: string; // badge / logo URL or /public path
  link?: string;
}

export interface GalleryPhoto {
  src: string;
  caption: string;
}

export interface CodingProfile {
  platform: string;
  handle: string;
  stat: string;   // e.g. "1850 rating", "450 solved" — short highlight
  url: string;
  color: string;  // brand colour for the icon chip
  image: string;  // logo URL or /public path
}

/* ---- Hero / profile --------------------------------------- */
export const PROFILE = {
  name: 'Shubham Kondekar',
  title: 'Specialist Programmer L2 | Infosys',
  tagline:
    'I build clean, scalable web applications and love turning ideas into polished products.',
  // Replace with your own image URL or a file in /public
  photo: 'images/profile.svg',
  email: 'kondekarshubham123@gmail.com',
  location: 'India',
  // Put your CV at portfolio/public/resume.pdf (or change this to any URL)
  resume: 'resume.pdf',
};

export const SOCIALS: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/kondekarshubham123',
    icon: 'M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z',
  },
  {
    label: 'LinkedIn',
    url: 'https://in.linkedin.com/in/shubham-kondekar',
    icon: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-8.4H5.56v8.4h2.78zM6.95 8.7a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22zm11.39 9.64v-4.6c0-2.46-1.31-3.6-3.06-3.6-1.41 0-2.04.78-2.39 1.32v-1.14H10.1c.04.78 0 8.4 0 8.4h2.79v-4.69c0-.25.02-.5.09-.68.2-.5.66-1.02 1.43-1.02 1.01 0 1.41.77 1.41 1.9v4.49h2.52z',
  },
  {
    label: 'Email',
    url: 'mailto:kondekarshubham123@gmail.com',
    icon: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24-8 5-8-5V6l8 5 8-5v2.24z',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'work-experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'skills', label: 'Skills' },
  { id: 'coding-profiles', label: 'Coding Profiles' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'awards', label: 'Awards' },
  { id: 'extra-curricular', label: 'Extra Curricular' },
  { id: 'contact', label: 'Contact' },
];

/* ---- Work experience -------------------------------------- */
export const EXPERIENCES: Experience[] = [
  {
    role: 'Specialist Programmer L2',
    company: 'Infosys LTD',
    period: 'Oct 2025 - Present',
    location: 'Pune, India',
    points: [
      'Working with B2B e-commerce platform solutions to enhance application functionalities and user experience.',
      'Implemented OKTA integration to the application, providing seamless login mechanisms and improved security.',
      'Delivering high-quality deliverables and integrations with other services to strengthen platform capabilities.',
      'Supporting HackWithInfy events in Pune DC as a mentor, guiding college graduates and contributing to their professional growth.',
      'Building best-practice design quality solutions that align with industry standards.',
    ],
  },
  {
    role: 'Specialist Programmer L1',
    company: 'Infosys LTD',
    period: 'Oct 2023 - Sept 2024',
    location: 'Pune, India',
    points: [
      'Developed robust backend with Python Flask and optimized frontend with Angular 13, driving seamless full-stack performance.',
      'Enhanced application efficiency by implementing database indexing and concurrent solutions with Celery, reducing latency and boosting responsiveness.',
      'Led technical guidance for potential customers, increasing product adoption by over 20%.',
      'Conducted in-house sessions on Generative AI and DSA for WABE, fostering career growth and building strong connections within the organization.',
    ],
  },
  {
    role: 'Digital Specialist Engineer',
    company: 'Infosys LTD',
    period: 'Oct 2021 - Sept 2023',
    location: 'Pune, India',
    points: [
      'Developed multilingual functionality using Spacy, expanding chatbot platform to 18 languages for global reach.',
      'Key contributor to language neutralization and group bot on Coreyx, enhancing conversational AI for enterprise use cases.',
      'Led innovative Generative AI projects with ChatGPT API, boosting AI/ML capabilities within the team.',
      'Honored with STG Rise Award (Prodigy category) for excellence in project impact and execution.',
    ],
  },
];

/* ---- Education -------------------------------------------- */
export const EDUCATION: Education[] = [
  {
    degree: 'BSc in Computer Science and Engineering',
    institution: 'University Name',
    period: '2020 - 2024',
    detail: 'Graduated with honours. Focus on software engineering and AI.',
  },
  {
    degree: 'High School Diploma',
    institution: 'School Name',
    period: '2018 - 2020',
    detail: 'Science stream. Top of class in mathematics.',
  },
];

/* ---- Projects --------------------------------------------- */
export const PROJECTS: Project[] = [
  {
    title: 'Banking System',
    description:
      'A full-stack banking application with secure authentication, transactions and reporting.',
    tags: ['Angular', 'Node.js', 'PostgreSQL'],
    image: 'images/projects/banking.svg',
    link: '#',
  },
  {
    title: 'Food Ordering Platform',
    description:
      'A responsive food-delivery web app with real-time order tracking.',
    tags: ['React', 'Express', 'MongoDB'],
    image: 'images/projects/food-ordering.svg',
    link: '#',
  },
  {
    title: 'Video Sharing Application',
    description:
      'A video-sharing platform with uploads, comments and recommendations.',
    tags: ['Angular', 'Firebase', 'TypeScript'],
    image: 'images/projects/video-sharing.svg',
    link: '#',
  },
  {
    title: 'Meeting Tools',
    description:
      'A suite of tools to schedule, run and summarise team meetings.',
    tags: ['Vue', 'Python', 'FastAPI'],
    image: 'images/projects/meeting-tools.svg',
    link: '#',
  },
];

/* ---- Gallery (taped polaroids, horizontal scroll) ---------
   Swap the placeholder URLs for your own photos (or files in /public). */
export const GALLERY: GalleryPhoto[] = [
  { src: 'images/gallery/photo-1.svg', caption: 'Hackathon win 🏆' },
  { src: 'images/gallery/photo-2.svg', caption: 'Team offsite' },
  { src: 'images/gallery/photo-3.svg', caption: 'Speaking at a meetup' },
  { src: 'images/gallery/photo-4.svg', caption: 'Graduation day 🎓' },
  { src: 'images/gallery/photo-5.svg', caption: 'Side-project demo' },
  { src: 'images/gallery/photo-6.svg', caption: 'Workshop with friends' },
];

/* ---- Skills ----------------------------------------------- */
export const SKILLS: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'TypeScript', icon: 'images/skills/typescript.svg' },
      { name: 'Python', icon: 'images/skills/python.svg' },
      { name: 'Java', icon: 'images/skills/java.svg' },
      { name: 'SQL', icon: 'images/skills/sql.svg' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'Angular', icon: 'images/skills/angular.svg' },
      { name: 'Tailwind CSS', icon: 'images/skills/tailwindcss.svg' },
      { name: 'RxJS', icon: 'images/skills/rxjs.svg' },
      { name: 'HTML/CSS', icon: 'images/skills/html5.svg' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'FastAPI', icon: 'images/skills/fastapi.svg' },
      { name: 'Flask', icon: 'images/skills/flask.svg' },
      { name: 'PostgreSQL', icon: 'images/skills/postgresql.svg' },
      { name: 'MongoDB', icon: 'images/skills/mongodb.svg' },
      { name: 'MySQL', icon: 'images/skills/mysql.svg' },
      { name: 'Spring Boot', icon: 'images/skills/springboot.svg' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: 'images/skills/git.svg' },
      { name: 'Docker', icon: 'images/skills/docker.svg' },
      { name: 'CI/CD', icon: 'images/skills/cicd.svg' },
      { name: 'Jenkins', icon: 'images/skills/jenkins.svg' },
      { name: 'Kubernetes', icon: 'images/skills/kubernetes.svg' },
    ],
  },
  {
    category: 'AI Tools',
    items: [
      { name: 'Claude', icon: 'images/skills/claude.svg' },
      { name: 'Antigravity', icon: 'images/skills/antigravity.svg' },
      { name: 'GitHub Copilot', icon: 'images/skills/copilot.svg' },
    ],
  },
];

/* ---- Certification verification profiles ------------------ */
export const CERT_PROFILES: { label: string; url: string }[] = [
  {
    label: 'Microsoft Learn',
    url: 'https://learn.microsoft.com/en-us/users/shubham-kondekar/',
  },
  {
    label: 'AWS Skill Builder',
    url: 'https://skillsprofile.skillbuilder.aws/user/shubham-kondekar/certification-badges',
  },
];

/* ---- Coding profiles -------------------------------------- */
export const CODING_PROFILES: CodingProfile[] = [
  {
    platform: 'LeetCode',
    handle: '@kondekarshubham123',
    stat: 'View profile',
    url: 'https://leetcode.com/kondekarshubham123',
    color: '#ffa116',
    image: 'images/coding/leetcode.svg',
  },
  {
    platform: 'HackerRank',
    handle: '@kondekarshubham1',
    stat: 'View profile',
    url: 'https://www.hackerrank.com/profile/kondekarshubham1',
    color: '#2ec866',
    image: 'images/coding/hackerrank.svg',
  },
  {
    platform: 'TopCoder',
    handle: '@kondekarshubham',
    stat: 'View profile',
    url: 'https://profiles.topcoder.com/kondekarshubham',
    color: '#29a8e0',
    image: 'images/coding/topcoder.svg',
  },
  {
    platform: 'Kaggle',
    handle: '@shubhamkondekar',
    stat: 'View profile',
    url: 'https://www.kaggle.com/shubhamkondekar',
    color: '#20beff',
    image: 'images/coding/kaggle.svg',
  },
];

/* ---- Awards ----------------------------------------------- */
export const AWARDS: Award[] = [
  {
    title: 'Best All-Round Student',
    issuer: 'University Name',
    year: '2024',
    description: 'Awarded for outstanding academic and extracurricular achievement.',
    image: 'images/awards/award-1.svg',
  },
  {
    title: 'Hackathon Winner',
    issuer: 'Tech Fest',
    year: '2023',
    description: 'First place among 50+ teams for an AI-powered solution.',
    image: 'images/awards/award-2.svg',
  },
  {
    title: "Dean's List",
    issuer: 'University Name',
    year: '2022',
    description: 'Recognised for top academic performance for three consecutive semesters.',
    image: 'images/awards/award-3.svg',
  },
];

/* ---- Extra curricular ------------------------------------- */
export const EXTRA_CURRICULAR: ExtraCurricular[] = [
  { title: 'AI Multi-Agent Challenge', detail: 'Finalist', year: '2024' },
  { title: 'Public Speaking Contest', detail: 'Winner', year: '2024' },
  { title: 'Open Source — Hacktoberfest', detail: 'Contributor', year: '2024' },
  { title: 'National Swimming Championship', detail: 'Participant', year: '2023' },
  { title: 'Coding Competition', detail: 'Top 10', year: '2023' },
  { title: 'Debate Tournament', detail: 'Semi-finalist', year: '2023' },
];

/* ---- Certifications (external: Microsoft, AWS, etc.) ------- */
export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    year: 'Beginner',
    image: 'images/certs/microsoft.svg',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/shubham-kondekar/2FA9AA207A3637F?sharingId=D1E474A0B3A1FDB',
  },
  {
    name: 'GitHub Foundations Certified (GH-900)',
    issuer: 'GitHub',
    year: 'Beginner',
    image: 'images/certs/github.svg',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/shubham-kondekar/9E9323D1485BB291?sharingId=D1E474A0B3A1FDB',
  },
  {
    name: 'GitHub Administration Certified (GH-100)',
    issuer: 'GitHub',
    year: 'Intermediate',
    image: 'images/certs/github.svg',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/shubham-kondekar/4315412984B8A84C?sharingId=D1E474A0B3A1FDB',
  },
  {
    name: 'GitHub Actions Certified (GH-200)',
    issuer: 'GitHub',
    year: 'Intermediate',
    image: 'images/certs/github.svg',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/shubham-kondekar/D0CC11F37BE7EFA0?sharingId=D1E474A0B3A1FDB',
  },
  {
    name: 'GitHub Copilot Certified (GH-300)',
    issuer: 'GitHub',
    year: 'Intermediate',
    image: 'images/certs/github.svg',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/shubham-kondekar/B9F2A8CA9E41E7D3?sharingId=D1E474A0B3A1FDB',
  },
  {
    name: 'GitHub Advanced Security (GH-500)',
    issuer: 'GitHub',
    year: 'Intermediate',
    image: 'images/certs/github.svg',
    link: 'https://learn.microsoft.com/api/credentials/share/en-in/shubham-kondekar/9EABCFAF59CB7D12?sharingId=D1E474A0B3A1FDB',
  },
  {
    name: 'Microsoft Azure Developer Associate (AZ-204)',
    issuer: 'Microsoft',
    year: 'Intermediate',
    image: 'images/certs/microsoft.svg',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/shubham-kondekar/57B50BBBBBB414C1?sharingId=D1E474A0B3A1FDB',
  },
  {
    name: 'Microsoft Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    year: 'Beginner',
    image: 'images/certs/microsoft.svg',
    link: 'https://learn.microsoft.com/en-us/users/shubham-kondekar/credentials/certification/azure-ai-fundamentals',
  },
  {
    name: 'Microsoft Azure AI Engineer Associate (AI-102)',
    issuer: 'Microsoft',
    year: 'Intermediate',
    image: 'images/certs/microsoft.svg',
    link: 'https://learn.microsoft.com/en-us/users/shubham-kondekar/credentials/certification/azure-ai-engineer',
  },
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    year: 'Foundational',
    image: 'images/certs/aws.svg',
    link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/616825714b4f49beb883cb49c3a3aa78',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: 'Foundational',
    image: 'images/certs/aws.svg',
    link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/cda96964481443a782e94de31f4e2e43',
  },
];
