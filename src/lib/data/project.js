import JobHive from "../../../public/JobHive.png";
import mernChat from "../../../public/mernChat.png";
import recipeVault from "../../../public/recipeVault.png";


export const projects = [
  {
    id: 1,
    title: "JobHive",
    description: "JobHive is a modern job portal web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It serves as a platform for job seekers and employers, enabling efficient hiring and job search processes.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Cloudinary"],
    image: JobHive,
    link: "https://github.com/RahulSidar08/JobHive",
    featured: true,
  },
  {
    id: 2,
    title: "MERN CHAT",
    description: "MERNChat is a full-stack real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with Socket.io for instant messaging. It allows users to engage in seamless one-on-one conversations with features like authentication, real-time message.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Cloudinary","Tailwind CSS", "Socket.io"],
    image: mernChat,
    link: "https://github.com/RahulSidar08/MERN-CHAT",
    featured: true,
  },
  {
    id: 3,
    title: "Recipe Vault",
    description:  "Recipe Vault is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, and Node.js) that allows users to manage, store, and share their favorite recipes.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
    image: recipeVault,
    link: "https://github.com/RahulSidar08/RecipeVault",
    featured: false,
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "a powerful and intuitive web application designed to help users track, analyze, and visualize their personal or business financial data. With dynamic charts and insightful summaries, it provides a clear picture of income, expenses.",
    technologies: ["Next.js" ,"React", "Node.js", "MongoDB", "Chart.js"],
    image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/RahulSidar08/Finance-Visualizer",
    featured: false,
  },
];