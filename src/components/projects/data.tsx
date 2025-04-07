import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "Peerfect",
    projectUrls: [
      {
        url: "https://peerfect.net/",
        icon: <RiExternalLinkLine size={20} />,
      },
    ],
    imageUrl: "/images/peerfect.jpg",
    description: ``,
    tech: [
      "Javascript",
      "React.js",
      "Firebase",
      "twilio-video",
      "webRTC",
      "Material Ui"
    ],
    cards: {
      a: {
        title: "About",
        text: `Peerfect is a mock interview platform designed to help users practice their interview skills. It connects people who want to practice interviewing with others, allowing them to schedule and conduct mock interviews in a structured, realistic environment.






`,
      },
      b: {
        title: "Features",
        text: `Added real-time video conferencing to allow people to practice interview \n Created recommandation system that matches usersbased on their experience and goals.\n Implemented a robust scheduling system that allows users to book, reschedule, and cancel meetings, while supporting multiple time zones\n Integrated a notification system to enable users to send and receive alerts for important events, ensuring timely communication and engagement`,
      },
    },
  },
  {
    title: "ApplyCount",
    projectUrls: [
      {
        url: "https://applycount.com/",
        icon: <RiExternalLinkLine size={20} />,
      },
    ],
    imageUrl: "/images/applycount.png",
    description: ``,
    tech: [
      "JavaScript",
      "React",
      "Firebase",
      "Gmail API",
      "Material UI",
      "CSS Modules",
      "Recharts",
      "Stripe API",
      "Google OAuth"
    
    ],
    cards: {
      a: {
        title: "About",
        text: `Trackify is an automatic job application tracking tool that effortlessly organizes your entire job search in one place. By connecting to your Gmail account, it automatically detects, categorizes, and analyzes your job applications without requiring manual data entry. The platform provides comprehensive insights into your job search journey, helping you stay organized and strategic throughout the process.`,
      },
      b: {
        title: "Features",
        text: `Automatic Application Detection: Connect your Gmail to instantly detect job applications, confirmation emails, and responses without manual data entry.
Comprehensive Dashboard: View your entire job hunt at a glance with real-time statistics on applications, responses, and interviews.
Visual Application Board: Organize applications by status (Applied, Interview, Assessment, Rejected) with an intuitive Kanban-style board interface.
Sankey Flow Diagrams: Visualize your job search journey with interactive flow diagrams showing how applications progress through different stages.
Analytics & Insights: Track which job boards, companies, and positions yield the best response rates to optimize your strategy.
Free & Pro Plans: Start with essential tracking features for free, or upgrade to Pro for unlimited application tracking, advanced analytics, and multi-email support.`,
      },
    },
  },
  {
    title: "Cosmic terror",
    projectUrls: [
      {
        url: "https://cosmicterror.netlify.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
      {
        url: "https://github.com/Oussamahamani/cosmic-terror",
        icon: <IoLogoGithub size={20} />,
      },
    ],
    videoUrl: "/images/demo.mp4",
    description: ``,
    tech: [
      "html",
      "css",
      "javascript",
      "canvas",

    ],
    cards: {
      a: {
        title: "About",
        text: `Space survival action shooting game where you have to evade meteors and other enemies, and use your shots wisely to survive. Was built using only html and javascript`,
      },
      b: {
        title: "Story",
        text: `It is the year 3000, Humanity has become so technologically advanced, even so this didn't make healthcare any cheaper but even more expensive and out of the reach of the normal population, especially when you catch something called stardust syndrome. A disease where your eyes get shiny white grains on them, and they will increase and became bigger until you became blind and die.
Your beloved is one of those unfortunate ones who had caught the disease. Even selling everything you had wasn't not enough to cover cost of her treatment, Seeing her health regresses and her death getting more imminent by the day you decided that you can't bear this anymore. But selling drugs like walter white wasn't a viable business in the year 3000 , so you decided to enroll in the particle program, a space program where you have to reach the end of the universe, to reach the border, if there is one.
A journey which no one has ever come back from. but if you can make it, everything will be paid for, so you leave your beloved frozen in a Cryonics, waiting for you tens, hundreds, and even thousands of years for you, until you meet each other again.

`,
      },
    },
  },
  {
    title: "PrimeCashBack Extension",
    projectUrls: [
      {
        url: "https://chromewebstore.google.com/detail/primecashback-earn-amazon/bpchibfajmgmeafgdhbomnagllbjbjnj",
        icon: <RiExternalLinkLine size={20} />,
      }
    ],
    imageUrl: "/images/extension.jpg",
    description: ``,
    tech: [
      "html",
      "css",
      "javascript",
      "react",

    ],
    cards: {
      a: {
        title: "About",
        text: `PrimeCashBack is a Chrome browser extension designed to help users earn cashback on their Amazon purchases. Once installed, users can sign up for free, activate the cashback feature before shopping, and automatically earn up to 10% cashback on eligible purchases`,
      },
      b: {
        title: "Features",
        text: `Automatic Purchase Tracking: The extension monitors your Amazon purchases in real-time, ensuring that all eligible transactions are tracked for cashback rewards without requiring manual input.
Authentication System: Utilizes Chrome's identity API to securely authenticate users, ensuring that your personal information and cashback earnings are protected.
Seamless Amazon Integration: With host permissions for https://www.amazon.com/*, the extension seamlessly integrates with Amazon's website, allowing it to detect when you're shopping and apply cashback offers accordingly.`,
      },
    },
  },
  {
    title: "Horouf",
    projectUrls: [
      {
        url: "https://horouf.netlify.app/",
        icon: <RiExternalLinkLine size={20} />,
       
      }, {
        url: "https://github.com/Oussamahamani/horouf",
        icon: <IoLogoGithub size={20} />,
      },
    ],
    imageUrl: "/images/horouf.jpg",
    description: ``,
    tech: [
      "html",
      "css",
      "javascript"


    ],
    cards: {
      a: {
        title: "About",
        text: `Horouf is an interactive web application designed to help users learn and practice Arabic letters and their pronunciations`,
      },
      b: {
        title: "Features",
        text: `Interactive Learning: Hover over Arabic letters to view their Romanization and listen to their correct pronunciation.
Sound Feedback: Play sounds for both correct and incorrect answers to reinforce learning.
Adjustable Diacritics: Toggle the display of alphabet diacritics (Harakats) for a more comprehensive learning experience.
Harakats Support: Learn about and view the various Harakats (vowel markings) used in Arabic pronunciation.
Letter Forms: View different forms of each Arabic letter based on its position in a word.
User Customization: Modify settings to tailor the app according to the user’s learning preferences.`,
      },
    },
  },
];
