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
      "htmll",
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
];
