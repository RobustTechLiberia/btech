import React from "react";
import logo from "../images/1785769570010.jpg";
import {
  Footer as FlowbiteFooter,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

class Footer extends React.Component {
  render() {
    return (
      <FlowbiteFooter container>
        <div className="w-full text-center md:h-96 h-auto">
          <div className="md:w-auto w-auto bg-white h-auto">
            <div className="w-full md:justify-end lg:justify-end md:items-end lg:items-end bg-white sm:flex sm:items-center sm:justify-between"></div>

            {/* social media icons */}
            <div className="flex flex-wrap md:justify-end md:items-end lg:justify-end lg:items-end justify-center items-center gap-3 p-4 bg-white">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-white transition-opacity rounded-none bg-[#253C6D] hover:opacity-90"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-white transition-opacity rounded-none bg-[#253C6D] hover:opacity-90"
              >
                {/* <FaInstagram size={26} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-white transition-opacity rounded-none bg-[#253C6D] hover:opacity-90"
              >
                <FaYoutube size={26} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-white transition-opacity rounded-none bg-[#253C6D] hover:opacity-90"
              >
                <FaXTwitter size={24} />
              </a> */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-white transition-opacity rounded-none bg-[#253C6D] hover:opacity-90"
              >
                <FaLinkedinIn size={24} />
              </a>

              <FooterLinkGroup className="md:mt-80 mt-80">
                <FooterLink
                  href="#"
                  className="text-[#253C6D] md:text-lg font-bold uppercase"
                >
                  About
                </FooterLink>
                <FooterLink
                  href="#"
                  className="text-[#253C6D] md:text-lg font-bold uppercase"
                >
                  academics
                </FooterLink>
                <FooterLink
                  href="#"
                  className="text-[#253C6D] md:text-lg font-bold uppercase"
                >
                  admission
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
      </FlowbiteFooter>
    );
  }
}

export default Footer;
