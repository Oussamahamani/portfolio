import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  plainText: "",
  glowText: "nextMotion",
  subTitle: "A sleek UI starter for an unforgettable portfolio",
  highlight: ["unforgettable"],
};

export const profileCard = {
  title: "Oussama Hamani",
  subTitle: "Fullstack Software Developer",
  body: `Passionate about building scalable, user-friendly web applications. Always exploring new technologies and best practices to improve development processes. `,
  socialUrls: [
    {
      url: "https://www.linkedin.com/in/oussama-hamani/",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      url: "https://github.com/Oussamahamani/",
      icon: <IoLogoGithub size={20} />,
    },
  ],
  tooltip: {
    imagePath: "https://media.licdn.com/dms/image/v2/C4D03AQHOObP0Lk4H5w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1645200389465?e=1732147200&v=beta&t=_iYAvzNSjscHkqSx7TPpIv58xH6cYCu3adKC3CyMS-k",
    title: "Hey...",
    subTitle: "That's me!",
  },
};
