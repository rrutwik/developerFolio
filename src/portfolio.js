/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rutwik Patel",
  title: "Hi all, I'm Rutwik",
  subTitle: emoji(
    "Backend Engineer 🧠 building production-grade APIs, cloud-native infra, and AI-powered systems with Node.js, Python, AWS, and OpenAI."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Qu5IGTAU-15-O6RCyAJBrcp1O1m1xkcX/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rrutwik",
  linkedin: "https://www.linkedin.com/in/rutwikp/",
  gmail: "rutwikpatel08@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "BACKEND-FOCUSED SOFTWARE ENGINEER WHO LOVES BUILDING SCALABLE SYSTEMS AND AUTOMATING INFRASTRUCTURE",
  skills: [
    emoji("⚡ Architect and build backend systems using Node.js and Python"),
    emoji("⚡ Design and manage scalable infrastructure on AWS using services like EC2, Lambda, and Fargate"),
    emoji("⚡ Integrate AI tools like LangChain and OpenAI APIs into real-time applications"),
    emoji("⚡ Improve developer workflows with CI/CD pipelines and blue/green deployments"),
    emoji("⚡ Optimize system cost and performance with autoscaling and process management strategies")
  ],

  softwareSkills: [
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-tools"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "OpenAI",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "JavaScript/TypeScript",
      fontAwesomeClassname: "fab fa-js"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institute of Technology, Nirma University",
      logo: require("./assets/images/nirmaUniversityLogo.png"), // Replace with your actual logo path
      subHeader: "B.Tech. in Information Technology",
      duration: "July 2016 - May 2020",
      desc: "Studied core subjects including Data Structures, Algorithms, Object-Oriented Programming, and Database Management Systems.",
      descBullets: [
        "Participated in ICPC Asia Regional 2018; Team ranked top 103 in India",
        "Focused on building strong fundamentals in problem-solving and software engineering"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend Development & APIs",
      progressPercentage: "90%" // Strong experience with Node.js, Python, Express, Django
    },
    {
      Stack: "Cloud Infrastructure & DevOps",
      progressPercentage: "85%" // AWS (EC2, Lambda, Fargate, CDK, etc.), Docker, CI/CD
    },
    {
      Stack: "Frontend Developnment",
      progressPercentage: "25%" // Skilled in quick delivery using docs, GPT, LangChain, etc.
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "SDE-2",
      company: "GeoServe",
      companylogo: require("./assets/images/geoserveLogo.png"), // Replace with actual logo path
      date: "October 2024 – April 2025",
      desc: "Built scalable backend services and integrated Microsoft OAuth 2.0 SSO across internal products.",
      descBullets: [
        "Integrated Microsoft OAuth 2.0 SSO across internal products (GeoStem, GeoPerform, GeoConnect, GeoNext).",
        "Developed APIs based on Figma design specs across DB Sync, GeoOne API, and Voyage Optimisation API."
      ]
    },
    {
      role: "SDE-2",
      company: "Pulse Energy",
      companylogo: require("./assets/images/pulseEnergyLogo.png"), // Replace with actual logo path
      date: "August 2023 – August 2024",
      desc: "Designed payment modules and built AI-powered chatbot backend for EV charging services.",
      descBullets: [
        "Implemented payment settlement module to automate T+3 settlements to charge point owners.",
        "Developed Paybox APIs supporting UPI and FASTag EV charging payments.",
        "Built and managed AI chatbot backend with LangChain and OpenAI APIs, handling diagnostics and route planning.",
        "Managed AWS infrastructure with blue/green deployments and robust Node.js service process management."
      ]
    },
    {
      role: "SDE-1 / SDE-2",
      company: "Masai",
      companylogo: require("./assets/images/masaiLogo.png"), // Replace with actual logo path
      date: "September 2020 – July 2023",
      desc: "Architected backend for Online Judge platform supporting thousands of users with real-time features.",
      descBullets: [
        "Owned backend supporting ~3000 users and 100+ concurrent code evaluations.",
        "Created custom scaling algorithm reducing contest creation time by 25%.",
        "Built adaptive Admission Test system with WebSockets and proctoring.",
        "Integrated Whisper for video transcription and ChatGPT API for automated evaluation.",
        "Reduced infrastructure cost by 70% using EC2 spot instances and custom auto-scaling.",
        "Led DSA problem design, mock interviews, and assessments across cohorts."
      ]
    },
    {
      role: "SDE Intern",
      company: "Amazon",
      companylogo: require("./assets/images/amazonLogo.png"), // Replace with actual logo path
      date: "January 2020 – July 2020",
      desc: "Developed file scanning service with AWS ECS Fargate and auto-scaling capabilities.",
      descBullets: [
        "Built 'Abhaya' file scanning service on ECS Fargate with ticket-based alerting.",
        "Provisioned infrastructure using AWS CDK & CloudFormation.",
        "Worked extensively with AWS services: SQS, Lambda, Step Functions, API Gateway, CloudWatch, DynamoDB."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7023379995",
  email_address: "rutwikpatel08@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
