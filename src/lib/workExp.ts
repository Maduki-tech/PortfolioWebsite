export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  achievements: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Senior Developer",
    company: "TechCorp",
    period: "2020 - Present",
    description:
      "Led development of scalable web applications using React and Node.js.",
    skills: ["React", "Node.js", "CI/CD", "Team Leadership"],
    achievements: [
      "Implemented CI/CD pipelines, reducing deployment time by 50%",
      "Mentored 5 junior developers, accelerating their growth",
      "Architected a microservices solution, improving system scalability",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "InnovateTech",
    period: "2017 - 2020",
    description:
      "Developed and maintained multiple client projects, focusing on responsive design.",
    skills: ["React", "Vue.js", "Express", "Responsive Design"],
    achievements: [
      "Optimized application performance, increasing speed by 30%",
      "Implemented new responsive design system, improving mobile UX",
      "Led migration from AngularJS to React for a major client",
    ],
  },
  {
    title: "Junior Developer",
    company: "StartUp Inc.",
    period: "2015 - 2017",
    description:
      "Assisted in developing a SaaS platform, gaining hands-on experience with modern web technologies.",
    skills: ["JavaScript", "HTML/CSS", "Agile", "SaaS"],
    achievements: [
      "Contributed to the development of 3 key features",
      "Reduced bug backlog by 40% through proactive testing",
      "Presented technical demos to potential clients, aiding in sales",
    ],
  },
];
