import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import { BiLogoX } from "react-icons/bi";

class SocialIcons extends React.Component {
  render() {
    const socialLinks = [
      {
        id: "facebook",
        icon: <FaFacebookF size={24} />,
        url: "https://facebook.com",
      },
      {
        id: "instagram",
        icon: <FaInstagram size={26} />,
        url: "https://instagram.com",
      },
      {
        id: "youtube",
        icon: <FaYoutube size={26} />,
        url: "https://youtube.com",
      },
      { id: "x", icon: <BiLogoX size={32} />, url: "https://x.com" },
      {
        id: "linkedin",
        icon: <FaLinkedinIn size={24} />,
        url: "https://linkedin.com",
      },
    ];

    return (
      <div className="flex items-center gap-3 p-4 bg-white">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 text-white transition-opacity rounded-lg bg-[#1a739b] hover:opacity-90"
          >
            {link.icon}
          </a>
        ))}
      </div>
    );
  }
}

export default SocialIcons;
