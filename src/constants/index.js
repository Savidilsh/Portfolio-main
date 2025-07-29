const navLinks = [
  { name: "Projects", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Achievements", link: "#testimonials" },
];

const words = [
  { text: "Electronics Engineer", imgPath: "/images/ideas.svg" },
  { text: "AI/ML Engineer", imgPath: "/images/concepts.svg" },
  { text: "Computer Vision Expert", imgPath: "/images/designs.svg" },
  { text: "Robotics Engineer", imgPath: "/images/code.svg" },
  { text: "Embedded Systems Developer", imgPath: "/images/ideas.svg" },
  { text: "Python Developer", imgPath: "/images/concepts.svg" },
  { text: "Research Enthusiast", imgPath: "/images/designs.svg" },
  { text: "Innovation Leader", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Study" },
  { value: 10, suffix: "+", label: "Major Projects" },
  { value: 3, suffix: "", label: "Dean's List Semesters" },
  { value: 3.96, suffix: "", label: "Cumulative GPA" },
];

const logoIconsList = [
  { imgPath: "/images/logos/university-moratuwa.png" },
  { imgPath: "/images/logos/ieee.png" },
  { imgPath: "/images/logos/aiesec.png" },
  { imgPath: "/images/logos/richmond-college.png" },
  { imgPath: "/images/logos/python.png" },
  { imgPath: "/images/logos/opencv.png" },
  { imgPath: "/images/logos/tensorflow.png" },
  { imgPath: "/images/logos/arduino.png" },
  { imgPath: "/images/logos/raspberry-pi.png" },
  { imgPath: "/images/logos/matlab.png" },
  { imgPath: "/images/logos/solidworks.png" },
];

const abilities = [
  {
    imgPath: "/images/innovation.png",
    title: "Innovation Focus",
    desc: "Developing cutting-edge solutions in AI, robotics, and computer vision with practical applications.",
  },
  {
    imgPath: "/images/leadership.png",
    title: "Leadership Excellence",
    desc: "Leading teams in complex engineering projects and academic initiatives with proven results.",
  },
  {
    imgPath: "/images/research.png",
    title: "Research Driven",
    desc: "Conducting thorough research and implementing state-of-the-art technologies in real-world projects.",
  },
];

const techStackIcons = [
  // Programming Languages
  { name: "Python", category: "languages", iconClass: "devicon-python-plain colored" },
  { name: "C++", category: "languages", iconClass: "devicon-cplusplus-plain colored" },
  { name: "MATLAB", category: "languages", iconClass: "devicon-matlab-plain colored" },
  { name: "C", category: "languages", iconClass: "devicon-c-plain colored" },
  { name: "JavaScript", category: "languages", iconClass: "devicon-javascript-plain colored" },
  
  // AI/ML & Computer Vision
  { name: "TensorFlow", category: "ai-ml", iconClass: "devicon-tensorflow-original colored" },
  { name: "OpenCV", category: "ai-ml", iconClass: "devicon-opencv-plain colored" },
  { name: "PyTorch", category: "ai-ml", iconClass: "devicon-pytorch-original colored" },
  { name: "NumPy", category: "ai-ml", iconClass: "devicon-numpy-original colored" },
  { name: "Pandas", category: "ai-ml", iconClass: "devicon-pandas-original colored" },
  
  // Embedded Systems & Hardware
  { name: "Arduino", category: "embedded", iconClass: "devicon-arduino-plain colored" },
  { name: "Raspberry Pi", category: "embedded", iconClass: "devicon-raspberrypi-plain colored" },
  { name: "ESP32", category: "embedded", iconClass: "devicon-embeddedc-plain colored" },
  
  // Design & CAD
  { name: "SolidWorks", category: "design", iconClass: "devicon-solidworks-plain colored" },
  { name: "PCB Design", category: "design", iconClass: "devicon-pcb-plain colored" },
  { name: "3D Modeling", category: "design", iconClass: "devicon-blender-original colored" },
  
  // Development Tools
  { name: "Git", category: "tools", iconClass: "devicon-git-plain colored" },
  { name: "GitHub", category: "tools", iconClass: "devicon-github-original colored" },
  { name: "VS Code", category: "tools", iconClass: "devicon-vscode-plain colored" },
  { name: "Linux", category: "tools", iconClass: "devicon-linux-plain colored" },
  { name: "Docker", category: "tools", iconClass: "devicon-docker-plain colored" },
  
  // Communication Protocols
  { name: "MQTT", category: "communication", iconClass: "devicon-mqtt-plain colored" },
  { name: "IoT", category: "communication", iconClass: "devicon-iot-plain colored" },
];

const techStackImgs = []; // Using CDN icons instead

const expCards = [
  {
    review: "Pursuing B.Sc. in Electronic & Telecommunication Engineering with exceptional academic performance. Specializing in Computer Vision, AI, Machine Learning, and Embedded Systems.",
    imgPath: "/images/uom-logo.png",
    logoPath: "/images/logos/uom-logo.png",
    title: "University of Moratuwa - B.Sc. Electronic & Telecommunication Engineering",
    date: "Feb 2023 - Present",
    highlights: [
      "Cumulative GPA: 3.96/4.00 (Dean's List Sem 1-3)",
      "Specialization: Computer Vision, AI, Machine Learning, Embedded Systems",
      "Batch Representative (Sem 4-7)",
      "Key Courses: Digital Signal Processing, Electromagnetics, Pattern Recognition, Image Processing, Robotics, Electronic Instrumentation",
      "Leadership: Led multiple engineering project teams",
    ],
  },
  {
    review: "Completed Advanced Level with outstanding results in Physical Science stream. Active in leadership roles and extracurricular activities including scouting and sports.",
    imgPath: "/images/richmond-logo.png",
    logoPath: "/images/logos/richmond-logo.png",
    title: "Richmond College, Galle - G.C.E. Advanced Level",
    date: "2021",
    highlights: [
      "Physical Science Stream - Z-Score: 2.41 (4A's)",
      "Senior Prefect & Leadership Roles",
      "Scout (District Commissioner's Cord)",
      "Active in various extracurricular activities",
      "Strong foundation in Mathematics, Physics, and Chemistry",
    ],
  },
];

const expLogos = [
  { name: "uom", imgPath: "/images/logos/uom-logo.png" },
  { name: "richmond", imgPath: "/images/logos/richmond-logo.png" },
];

const projects = [
  {
    title: "Autonomous Mobile Robot with SLAM",
    description: "Led a 10-member team to develop an autonomous mobile robot implementing SLAM algorithm in C++. Features LiDAR integration and custom UI for control and diagnostics.",
    technologies: ["C++", "SLAM", "LiDAR", "Robotics", "Real-time Systems"],
    category: "robotics",
    featured: true,
  },
  {
    title: "Sri Lankan Number Plate Recognition System",
    description: "Built an OCR-based ANPR using OpenCV and PyTesseract supporting batch image processing and real-time webcam recognition.",
    technologies: ["Python", "OpenCV", "PyTesseract", "Computer Vision", "OCR"],
    category: "computer-vision",
    featured: true,
  },
  {
    title: "Real-Time Facial Expression Recognition",
    description: "Developed CNN model trained on FER2013 dataset with batch normalization and dropout regularization. Achieved 86.6% accuracy on happy emotions with live video processing.",
    technologies: ["Python", "TensorFlow", "CNN", "Computer Vision", "Deep Learning"],
    category: "ai-ml",
    featured: true,
  },
  {
    title: "Smart MediBox - IoT Medicine Reminder",
    description: "ESP32-based embedded system with multi-sensor integration, MQTT connectivity, servo-controlled dispensing, and OLED interface with environmental monitoring.",
    technologies: ["ESP32", "IoT", "MQTT", "Embedded C", "Sensors", "OLED"],
    category: "embedded",
    featured: true,
  },
  {
    title: "Agentic AI Desktop Automation",
    description: "LLM-powered desktop automation using Ollama/Llama3.2 with computer vision (OCR), PyAutoGUI for screen control, and natural language processing for autonomous task execution.",
    technologies: ["Python", "LLM", "OCR", "PyAutoGUI", "AI Agents", "Automation"],
    category: "ai-ml",
    featured: false,
  },
  {
    title: "Qwen2-0.5B Language Model Fine-Tuning",
    description: "Fine-tuned LLM using LoRA (4-bit quantization) on Colab, managing end-to-end workflow from preprocessing through deployment.",
    technologies: ["Python", "LLM", "LoRA", "Fine-tuning", "Google Colab"],
    category: "ai-ml",
    featured: false,
  },
];

const achievements = [
  {
    name: "Dean's List Achievement",
    mentions: "University of Moratuwa",
    review: "Consistently maintained exceptional academic performance, earning Dean's List recognition for three consecutive semesters (Sem 1-3) with a cumulative GPA of 3.96/4.00.",
    imgPath: "/images/deans-list.png",
  },
  {
    name: "AlgoXplore 1.0 CTF Competition",
    mentions: "2nd Place Winner",
    review: "Secured 2nd place in AlgoXplore 1.0 CTF Competition (2024), a national cybersecurity logic-based challenge, demonstrating strong problem-solving and cybersecurity skills.",
    imgPath: "/images/ctf-award.png",
  },
  {
    name: "MoraXtream 9.0 Programming Contest",
    mentions: "Finalist",
    review: "Reached finals in MoraXtream 9.0 (2024), a university-level competitive programming contest, showcasing algorithmic thinking and coding expertise.",
    imgPath: "/images/programming-contest.png",
  },
  {
    name: "Code X Innovation Showcase",
    mentions: "Finalist",
    review: "Achieved finalist position in Code X (2025), a coding and innovation showcase event, demonstrating technical innovation and project development skills.",
    imgPath: "/images/code-x.png",
  },
  {
    name: "Leadership Excellence",
    mentions: "Multiple Leadership Roles",
    review: "Served as Batch Representative (Sem 4-7), IR Panelist at AIESEC, Co-lead at IEEE UOM projects, and Senior Prefect at Richmond College, demonstrating consistent leadership abilities.",
    imgPath: "/images/leadership.png",
  },
  {
    name: "Technical Certifications",
    mentions: "Industry Recognition",
    review: "Earned multiple certifications including C++ (SoloLearn), MATLAB Onramp (MathWorks), and AI/ML courses (Coursera), validating technical expertise in key technologies.",
    imgPath: "/images/certifications.png",
  },
];

const testimonials = achievements; // Using achievements as testimonials for now

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/savindu-wickramasinghe/",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/savindu-wickramasinghe",
  },
  {
    name: "email",
    imgPath: "/images/email.png",
    url: "mailto:savindudilshan124@gmail.com",
  },
  {
    name: "twitter",
    imgPath: "/images/x.png",
    url: "https://twitter.com/savindu_w",
  },
];

// Personal Information
const personalInfo = {
  name: "Savindu Wickramasinghe",
  title: "Electronics & Telecommunication Engineering Student",
  subtitle: "AI/ML Engineer | Computer Vision Expert | Robotics Enthusiast",
  university: "University of Moratuwa, Sri Lanka",
  email: "savindudilshan124@gmail.com",
  phone: "+94 713 359 700",
  location: "Colombo, Western Province, LK",
  gpa: "3.96/4.00",
  summary: "Electronics and Telecommunications Engineering undergraduate specializing in Computer Vision, AI, machine learning, and embedded systems. Passionate about developing innovative solutions and leading teams to bring ideas to life. Experienced in 3D modeling and finding practical, creative approaches to engineering challenges.",
  areasOfInterest: [
    "Computer Vision",
    "Embedded Systems", 
    "Machine Learning",
    "AI",
    "Robotics",
    "Digital Design"
  ]
};

// Contact Information
const contactInfo = {
  email: "savindudilshan124@gmail.com",
  phone: "+94 713 359 700",
  address: "Colombo, Western Province, Sri Lanka",
  university: "University of Moratuwa",
  linkedIn: "https://www.linkedin.com/in/savindu-wickramasinghe/",
  github: "https://github.com/savindu-wickramasinghe"
};

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  achievements,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
  personalInfo,
  contactInfo,
};