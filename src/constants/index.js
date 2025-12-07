const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 4,
    name: "Experience",
    type: "experience",
  },
  {
    id: 4,
    name: "Certifications",
    type: "certifications"
  },
  {
    id: 2,
    name: "Contact",
    type: "contact",
  },
  {
    id: 3,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Mar 2, 2025",
    title:
      "The Importance of System Design: Beyond the Basics",
    image: "/images/sd.png",
    link: "https://www.linkedin.com/pulse/importance-system-design-beyond-basics-mahendra-gandham-zeruc",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "Unlocking the Power: How Mutex Locks Keep Your Game Running Smoothly",
    image: "/images/mutex.png",
    link: "https://www.linkedin.com/pulse/unlocking-power-how-mutex-locks-keep-your-game-running-gandham-inmcc",
  },
  {
    id: 3,
    date: "Jan 15, 2025",
    title: "Dynamic NPC Behavior: A Deep Dive into Proximity-Based Spawning and Despawning",
    image: "/images/npc.jpg",
    link: "https://www.linkedin.com/pulse/dynamic-npc-behavior-deep-dive-proximity-based-spawning-gandham-9dane",
  },
  {
    id: 4,
    date: "Jan 6, 2025",
    title: "Esports: The Algorithm of Excitement - Decoding the Future of Entertainment",
    image: "/images/bgmi.jpg",
    link: "https://www.linkedin.com/pulse/esports-algorithm-excitement-decoding-future-mahendra-gandham-n8myc",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Game Dev",
    items: ["Unity", "C#"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Programming",
    items: ["Java", "Python", "C++"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "RAG"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "VectorDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#000000",
    link: "https://github.com/mahendrasaikumargandham",
  },
  {
    id: 2,
    text: "LeetCode",
    icon: "/icons/leetcode.svg",
    bg: "#FFA116",
    link: "https://leetcode.com/mahendra4919",
  },
  {
    id: 3,
    text: "YouTube",
    icon: "/icons/youtube-outlined.svg",
    bg: "#FF0000",
    link: "https://www.youtube.com/@mahendra4919",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0077B5",
    link: "https://www.linkedin.com/in/mahendragandham",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  // {
  //   id: 1,
  //   img: "/images/1.jpeg",
  // },
  {
    id: 2,
    img: "/images/2.jpeg",
  },
  {
    id: 3,
    img: "/images/3.jpeg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

// --- FILE SYSTEM DATA ---
// IDs are structured to be unique:
// 100 series -> Work folders
// 1000 series -> Work items
// 200 series -> About items
// 300 series -> Resume items
// 400 series -> Trash items
// 500 series -> Experience folders
// 5000 series -> Experience items

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 10,
      name: "TDM Multiplayer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 101,
          name: "TDM Multiplayer.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A high-octane Team Deathmatch shooter engineered for competitive play. Built with Unity and C#, this project focuses on responsive mechanics and real-time network synchronization using Photon PUN.",
            "Key Features:",
            "• seamless Multiplayer: Low-latency networking ensures every shot counts.",
            "• Secure Backend: Integrated Firebase Authentication (OAuth) for secure user login.",
            "• Persistent Data: Utilizes Cloud Firestore to track player progression, K/D ratios, and match history in real-time.",
            "It's not just a game, it's a full-stack multiplayer architecture demonstrating scalable code and robust cloud integration."
          ],
        },
        {
          id: 102,
          name: "gameplay-video.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/mZx57gI02Jc",
          position: "top-10 right-20",
        },
        {
          id: 103,
          name: "main-menu.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/main-menu.png",
        },
        {
          id: 104,
          name: "Gameplay UI.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-20",
          imageUrl: "/images/gameplay-av.jpg",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 11,
      name: "Git Commit Optimizer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 111,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 112,
          name: "ai-resume-analyzer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
          position: "top-20 left-20",
        },
        {
          id: 113,
          name: "ai-resume-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 114,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 12,
      name: "Rubix Rampage",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 121,
          name: "Game Details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "PROJECT 1: RUBIX RAMPAGE (Open World Engine)",
            "Rubix Rampage is an ambitious technical showcase—a fully functional open-world action game inspired by the mechanics of GTA Vice City. This wasn't just about building a game; it was about engineering a living, breathing world.",
            "• Core Mechanics: I engineered a robust Third-Person Controller featuring advanced camera logic, responsive shooting mechanics, and arcade-style vehicle physics that feel satisfying to drive.",
            "• AI & Systems: The world is populated by a Professional AI system. NPCs have specific patrol routes and behaviors, reacting dynamically to the player. I also implemented a scalable 'Wanted Level' police system that ramps up difficulty based on player actions.",
            "• Game Loop: Beyond the sandbox, the game features a structured Mission System complete with cinematic cut-scenes to drive the narrative forward.",
          ]
        },
        {
          id: 122,
          name: "gameplay-video.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/K0fmCSgu_UI",
          position: "top-10 right-20",
        },
        {
          id: 123,
          name: "Cut Scenes.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/cutscene.jpg",
        },
        {
          id: 124,
          name: "Gameplay UI.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-20",
          imageUrl: "/images/gameplay.jpg",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 201,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/itsme.jpg",
    },
    {
      id: 202,
      name: "with-gameeon-ceo.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gameeon.jpeg",
    },
    {
      id: 203,
      name: "with-ajay.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/nodwin.jpeg",
    },
    {
      id: 204,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/main.jpeg",
      description: [
        "Hey! I’m Mahendra 👋. I don't just write code; I engineer experiences. I’m a Game Developer at heart and a Full-Stack Architect by trade.",
        "My playground is Unity and C#, where I craft high-performance multiplayer games. From handling real-time network sync with Photon PUN to optimizing frame rates, I thrive on the complexity of bringing virtual worlds to life.",
        "Beyond gaming, I’m a heavy hitter in the MERN stack and RAG development. Armed with elite DSA skills and a passion for System Design, I build scalable, intelligent applications that solve hard problems efficiently.",
        "Currently, I'm driving impact at Accenture as an Associate Software Engineer, bridging the gap between creative game mechanics and robust enterprise software.",
        "Whether it's optimizing a render loop or architecting a cloud backend, I'm obsessed with performance, precision, and pushing the boundaries of what code can do. Let's build something legendary. 🚀",
      ],
    },
    {
      id: 205,
      name: "Game Dev Me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      href: "https://youtu.be/mZx57gI02Jc",
      position: "top-10 right-20",
      imageUrl: "/images/stats.jpeg",
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 301,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const EXPERIENCE_LOCATION = {
  id: 5,
  type: "experience",
  name: "Experience",
  icon: "/icons/work.svg", // Using Briefcase/Work icon
  kind: "folder",
  children: [
    // Sub-folder 1: Previous Company
    {
      id: 50,
      name: "Accenture",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-10",
      children: [
        {
          id: 501,
          name: "Role & Responsibilities.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
                "Associate Software Engineer | Aug 2024 - Present",
                "• Led customization of enterprise modules with Hexagon EAM, boosting efficiency and performance by 40%.",
                "• Optimized SDLC using Azure DevOps for version control, CI/CD, and agile tracking.",
                "• Supported SAFe alignment in 2+ PI sessions, managing cross-team dependencies.",
                "• Awarded 'Best Performer' in first 3 months for adaptability and early delivery.",
                "• Collaborated in Agile teams to resolve issues and improve system performance.",
                "• Upheld enterprise standards through testing and peer reviews."
            ]
        },
        // {
        //   id: 502,
        //   name: "Party-night.png",
        //   icon: "/images/image.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-5 left-40",
        //   imageUrl: "/images/party.jpeg"
        // },
        // {
        //   id: 503,
        //   name: "Offer_Letter.pdf", 
        //   icon: "/images/pdf.png",
        //   kind: "file",
        //   fileType: "pdf",
        //   position: "top-32 left-10"
        // }
      ]
    },
    // Sub-folder 2: Another Company / Internship
    {
      id: 51,
      name: "Kanine Klans",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-48",
      children: [
        {
          id: 511,
          name: "Internship Details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Software Engineer Intern | Aug 2023 - July 2024",
            "• Developed a robust login system for the Kanine Klans game.",
            "• Integrated Blockchain APIs to securely maintain user data and manage the in-game purchase system.",
            "• Implemented complex game mechanics including the LAP system, AI NPC system, and Garage system.",
            "• Worked on backend integration and game logic optimization."
          ]
        },
        {
          id: 512,
          name: "Work.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-5 left-40",
          imageUrl: "/images/kk.jpeg"
        }
      ]
    }
  ],
};

const CERTIFICATIONS_LOCATION = {
  id: 6,
  type: "certifications",
  name: "Certifications",
  icon: "/icons/file.svg", // Make sure to add a certificate icon to your public/icons folder
  kind: "folder",
  children: [
    {
      id: 60,
      name: "Microsoft",
      icon: "/images/folder.png", // Replace with your actual logo image path
      kind: "folder",
      position: "top-10 left-10",
      children: [
        {
          id: 601,
          name: "Microsoft Certified: Azure Administrator Associate.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Microsoft Certified: Azure Administrator Associate",
          ]
        },
        {
          id: 602,
          name: "Cerificate Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://learn.microsoft.com/en-gb/users/mahendragandham-7588/credentials/39884AD703B4BF2D?ref=https%3A%2F%2Fwww.linkedin.com%2F",
          position: "top-5 right-15",
        },
      ]
    },
    {
      id: 61,
      name: "SAFe®",
      icon: "/images/folder.png", // Replace with your actual logo image path
      kind: "folder",
      position: "top-10 left-48",
      children: [
        {
          id: 611,
          name: "Certified SAFe® 6 Practitioner.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Certified SAFe® 6 Practitioner",
          ]
        },
        {
          id: 612,
          name: "Cerificate Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.credly.com/badges/b6a4dfaf-39d5-42cc-8567-e2042b00ef68/linked_in_profile",
          position: "top-20 right-25",
        },
      ]
    },
    {
      id: 62,
      name: "Hero Vired x Nodwin Gaming",
      icon: "/images/folder.png", // Replace with your actual logo image path
      kind: "folder",
      position: "top-10 right-20",
      children: [
        {
          id: 611,
          name: "Certificate Program in Gaming & Esports- Batch 4.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-25 left-25",
          description: [
            "Certificate Program in Gaming & Esports- Batch 4",
          ]
        },
        {
          id: 612,
          name: "Cerificate Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://herovired.certificate.givemycertificate.com/c/efd6a38f-1446-4d03-bbeb-45ac6e3420e4",
          position: "top-5 right-15",
        },
      ]
    }
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 401,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 402,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  experience: EXPERIENCE_LOCATION,
  certifications: CERTIFICATIONS_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };