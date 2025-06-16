
export interface Skill {
  name: string;
  icon?: string; // Optional: path to icon or icon class
  level?: string; // Optional: e.g., 'Beginner', 'Intermediate', 'Advanced'
}

export const skills: Skill[] = [
  { name: "JavaScript", icon: "🟨"},
  { name: "TypeScript", icon: "🟦"},
  { name: "React", icon: "🔵", },
  { name: "Next.js", icon: "🟩"},
  { name: "HTML5", icon: "🔶"},
  { name: "CSS3", icon: "🔷"},
  { name: "Tailwind CSS", icon: "🌬️"},
  { name: "Python", icon: "🐍"},
  { name: "Git", icon: "🔗"},
  // Add more skills as needed
];

export interface Experiences {
  title: string;
  company: string;
  location?: string;
  duration: string;
  description: string;
}

export const experiences: Experiences[] = [
  {
    title: "Frontend Developer",
    company: "Alferix Infotech",
    location: "Coimbatore, India",
    duration: "June 2025 - Present",
    description: "Working on building and maintaining responsive web applications using modern frontend technologies such as React, TypeScript, and Tailwind CSS. Collaborate with designers and backend developers to deliver seamless user experiences.",
  },
  {
    title: "Computer Vision Intern",
    company: "Alferix Infotech",
    location: "Remote",
    duration: "Mar 2025 - May 2025 ",
    description: "Developed and implemented computer vision algorithms for image processing and object detection tasks. Gained hands-on experience with Python, OpenCV, and deep learning frameworks.",
  },
];


