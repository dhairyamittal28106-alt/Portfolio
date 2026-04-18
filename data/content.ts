export interface Project {
  fit: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
}

export const profile = {
  name: "Dhairya Mittal",
  role: "Computer Science Undergraduate | Backend, Cloud & AI Developer",
  tagline:
    "I build efficient, scalable applications across backend systems, cloud platforms, and AI-driven products.",
  location: "Chandigarh, India",
  email: "dhairyamittal28106@gmail.com",
  github: "https://github.com/dhairyamittal28106-alt",
  linkedin: "https://linkedin.com/in/dhairyamittal",
};

export const skills = [
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "C#",
  "Kotlin",
  "Go",
  "Node.js",
  "FastAPI",
  "Flask",
  "AWS",
  "Google Cloud Platform",
  "Redis",
  "Firebase",
  "Supabase",
  "OpenCV",
  "MediaPipe",
  "NumPy",
  "Pandas",
  "Git",
  "Docker",
  "Postman",
  "Linux",
];

export const projects: Project[] = [
  {
    title: "FileShareOnline",
    description:
      "Real-time secure file-sharing platform with OTP and QR-based access, support for transfers up to 2GB, Redis-backed sessions, and automatic expiry for privacy.",
    tech: ["Next.js", "Node.js", "Redis", "Real-Time Systems"],
    image: "/assets/fileshareonline.png",
    github: "https://github.com/dhairyamittal28106-alt/FileShareOnline",
    live: "https://fileshareonline.vercel.app",
    fit: "contain",
  },
  {
    title: "ETryRoom - AI Virtual Try-On System",
    description:
      "Real-time virtual try-on system using computer vision with pose detection and garment overlay powered by OpenCV and MediaPipe.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    image: "/assets/etryroom-v2.png",
    github: "https://github.com/dhairyamittal28106-alt/ETryRoom",
    live: "#",
    fit: "contain",
  },
  {
    title: "Nexus - Social Media Platform",
    description:
      "Full-stack social platform with user authentication, post management, backend APIs, and persistent data storage.",
    tech: ["Full-Stack", "APIs", "Authentication", "Database"],
    image: "/assets/nexus.png",
    github: "https://github.com/dhairyamittal28106-alt/Nexus",
    live: "https://nexus-xi-two.vercel.app/",
    fit: "contain",
  },
  {
    title: "Smart Traffic Management System",
    description:
      "Algorithm-based traffic optimization system designed to improve traffic flow and reduce congestion.",
    tech: ["Algorithms", "Optimization", "System Design"],
    image: "",
    github: "",
    live: "",
    fit: "cover",
  },
  {
    title: "Refrigerator Alchemist",
    description:
      "AI-powered system that recommends recipes based on available refrigerator ingredients using machine learning.",
    image: "/assets/fridge.png",
    fit: "contain",
    github: "https://github.com/dhairyamittal28106-alt/refrigerator_alchemist",
    live: "https://drive.google.com/file/d/1BLz0SY9tFECX-nxrKojGMii3aTaLp-Tu/view?usp=drivesdk",
    tech: ["Python", "Machine Learning", "NLP"],
  },
  {
    title: "Love-Castle",
    description:
      "Interactive messaging platform featuring mini-games, anonymous messaging, and an OTP-based secure chat system.",
    tech: ["Messaging", "OTP", "Interactive Apps"],
    image: "",
    github: "",
    live: "",
    fit: "cover",
  },
];

export const education = [
  {
    school: "Amity University Punjab",
    degree: "B.Tech in Computer Science Engineering",
    year: "2024 - 2028",
  },
  {
    school: "Guru Nanak Khalsa Senior Secondary School",
    degree: "Senior Secondary (CBSE)",
    year: "2022 - 2024",
  },
  {
    school: "St. Xavier's High School",
    degree: "Matriculation (ICSE)",
    year: "2014 - 2022",
  },
];

export const achievements = [
  "Finalist - Code With Singularity",
  "Finalist - TechNex '26",
  "Finalist - i-Hack (Google AdMob App Development Challenge), IIT Bombay",
  "Participant - Makeathon 8, Thapar Institute of Engineering and Technology",
  "Participant - Zennovatio 3.0, Chandigarh University",
];

export const certifications = [
  "AWS Academy Graduate - Cloud Foundations",
  "AWS Academy Graduate - Cloud Development",
  "Building AI Applications with Google Cloud (Code Vipassana Season 13)",
  "Quantum Computing - C-DAC Hyderabad and IIT Roorkee (MeitY, Government of India)",
];
