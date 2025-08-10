// components/data.ts
export const DATA = {
  name: "Mahima Aruna",
  role: "Computer Science Engineering Student",
  blurb:
    "I build AI-powered systems, full-stack applications, and IoT solutions that solve real problems.",
  location: "Bengaluru, India",
  email: "mahimaaruna04@gmail.com",
  phone: "+91 94835 40160",
  social: {
    github: "https://github.com/mahima-10",
    linkedin: "https://www.linkedin.com/in/mahima-a-b85487371/",
    leetcode: "https://leetcode.com/u/VLKOJsqNH9/"
  },
  resumeUrl: "/Mahima_Aruna_Resume.pdf",
  skills: [
    "Python", "C++", "C", "HTML", "CSS",
    "TensorFlow", "Flask", "FastAPI", "Pandas", "NumPy",
    "MongoDB", "MySQL", "Docker", "n8n",
    "ESP32", "mmWave Radar", "Gemini API",
    "Apache Kafka", "Spark", "Hadoop"
  ],
  projects: [
    {
      title: "Agentic Human Sensor Network",
      tagline: "Full-stack IoT + AI Agent for human activity monitoring",
      links: [
        { label: "GitHub", href: "https://github.com/mahima-10/AgenticHumanSensorNetwork" }
      ],
      description:
        "ESP32 + mmWave radar firmware, Python backend with Gemini LLM integration, fall detection, sleep analysis, and vital signs monitoring.",
      stack: ["ESP32", "Arduino", "Python", "FastAPI", "Gemini LLM"]
    },
    {
      title: "Agri-Voice Agent",
      tagline: "Multilingual AI assistant for farmers",
      links: [
        { label: "GitHub", href: "https://github.com/mahima-10/Agri-Voice-Agent" }
      ],
      description:
        "FastAPI backend, Vosk Hindi STT, Gemini Pro integration; provides real-time agricultural advice via voice.",
      stack: ["FastAPI", "Vosk", "gTTS", "Gemini Pro", "Tailwind CSS"]
    },
    {
      title: "Patient Records Management System",
      tagline: "Hospital management web app",
      links: [
        { label: "GitHub", href: "https://github.com/mahima-10/Patient-Records-Management-System" }
      ],
      description:
        "Flask + MySQL app for patient data, appointments, prescriptions, and billing with role-based access.",
      stack: ["Flask", "MySQL", "HTML", "CSS"]
    },
    {
      title: "Simple AI Chatbot",
      tagline: "CLI chatbot using OpenAI API",
      links: [
        { label: "GitHub", href: "https://github.com/mahima-10/Simple-Chatbot" }
      ],
      description:
        "Python-based chatbot using ChatGPT API with robust error handling and conversation flow.",
      stack: ["Python", "OpenAI API"]
    },
    {
      title: "Music Playlist Generator",
      tagline: "C-based playlist creator",
      links: [
        { label: "GitHub", href: "https://github.com/mahima-10/Music-Playlist-Generator/" }
      ],
      description:
        "CSV handling, YouTube API integration for search, shuffle and playback controls via CLI.",
      stack: ["C", "YouTube API"]
    },
    {
      title: "Photo Editor",
      tagline: "Desktop photo editor",
      links: [
        { label: "GitHub", href: "https://github.com/mahima-10/Photo-Editor" }
      ],
      description:
        "Tkinter + OpenCV app with B/W, sepia, pencil sketch, crop, brightness, and contrast controls.",
      stack: ["Python", "OpenCV", "Tkinter"]
    }
  ],
  experience: [
    {
      org: "Nivetti Systems",
      role: "Software Engineering Intern",
      period: "June 2025 – July 2025",
      highlights: [
        "Built full-stack IoT system for human presence detection & health monitoring",
        "Developed ESP32 firmware for mmWave sensor data streaming over TCP/IP",
        "Integrated Gemini LLM API for contextual AI insights with robust logging"
      ]
    }
  ],
  education: [
    { school: "PES University", degree: "B.E., Computer Science Engineering", period: "2022 – 2026", note: "CGPA: 6.99" },
    { school: "GR PU College", degree: "Class XII (PCMC)", period: "2020 – 2022", note: "79.5%" },
    { school: "Sri Aurobindo Memorial School", degree: "Class X", period: "2013 – 2020", note: "76%" }
  ],
  certs: [
    "Python for Data Science, AI & Development — Coursera",
    "Introduction to Generative AI — Coursera",
    "Introduction to Large Language Models — Coursera",
    "Nivetti Systems — Internship Completion"
  ],
  awards: [
    "DAC Scholarship",
    "Top 10 — EPOCH AURA Datathon (2023)",
    "Professional Speaker (2022) — STEM outreach"
  ]
} as const;
