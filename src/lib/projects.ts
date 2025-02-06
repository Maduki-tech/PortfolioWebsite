export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  features: string[];
}

export const projects: ProjectItem[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-platform-demo.com",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filter functionality",
      "Shopping cart and checkout process",
      "Admin dashboard for inventory management",
    ],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team communication features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Firebase", "Vuex", "Element UI"],
    githubLink: "https://github.com/yourusername/task-management-app",
    liveLink: "https://task-app-demo.com",
    features: [
      "Create and assign tasks with due dates",
      "Real-time task status updates",
      "Team chat and file sharing",
      "Performance analytics and reporting",
    ],
  },
  {
    title: "Weather Forecast Dashboard",
    description:
      "An interactive weather dashboard providing detailed forecasts and historical weather data visualization.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "D3.js", "OpenWeatherMap API", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/weather-dashboard",
    liveLink: "https://weather-dashboard-demo.com",
    features: [
      "5-day weather forecast for multiple locations",
      "Interactive charts for temperature, humidity, and wind speed",
      "Severe weather alerts",
      "Historical weather data comparison",
    ],
  },
];
