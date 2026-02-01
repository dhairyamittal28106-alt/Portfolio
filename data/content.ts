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
  role: "Computer Science Undergraduate | Backend & AI Developer",
  tagline:
    "I build scalable applications and real-time AI systems using C++, Python, and modern technologies.",
  location: "Chandigarh, India",
  email: "dhairyamittal28106@gmail.com",
  github: "https://github.com/dhairyamittal28106-alt",
  linkedin: "https://linkedin.com/in/dhairyamittal",
};

export const skills = [
  "Python",
  "JavaScript",
  "C",
  "C++",
  "Java",
  "Go",
  "Dart",
  "HTML5",
  "React",
  "Flutter",
  "Node.js",
  "Flask",
  "PyTorch",
  "OpenCV",
  "AWS",
  "Google Cloud",
  "Git",
  "Gradle",
  "CMD",
];


export const projects: Project[] = [
  {
    title: "ETryRoom – AI Virtual Try-On System",
    description:
      "Real-time virtual try-on system using webcam input with pose detection, 3D body modeling, and cloth overlay.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    image: "/assets/etryroom.png",
    github: "https://github.com/dhairyamittal28106-alt/ETryRoom",
    live: "#",
    fit: "contain",
  },
  {
    title: "Refrigerator Alchemist",
    description:
      "AI-powered system that recommends recipes based on available refrigerator ingredients using machine learning.",
    image: "/assets/fridge.png",   // optional image
    fit: "contain",
    github: "https://github.com/dhairyamittal28106-alt/refrigerator_alchemist",
    live: "https://drive.google.com/file/d/1BLz0SY9tFECX-nxrKojGMii3aTaLp-Tu/view?usp=drivesdk",
    tech: ["Python", "Machine Learning", "NLP"]
  },

];


export const education = [
  {
    school: "Amity University Punjab",
    degree: "B.Tech in Computer Science Engineering",
    year: "2024 – 2028",
  },
];

export const achievements = [
  "Smart India Hackathon Participant",
  "Zennovatio 3.0 – GenZ Hackathon",
  "Google AdMob App Development Challenge (IIT Bombay)",
  "Code Slayers 2K25 – NIT Delhi",
];

export const certifications = [
  "Quantum Computing – C-DAC Hyderabad & IIT Roorkee (MeitY)",
];
