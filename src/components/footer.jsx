import React, { Component } from "react";
import logo from "../images/1785769570010.jpg";
import {
  Footer as FlowbiteFooter,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

class Footer extends Component {
  render() {
    return (
      <FlowbiteFooter container>
        <div className="w-full text-center md:h-96 h-auto">
          <div className="w-full md:justify-end sm:flex sm:items- sm:justify-between">
            {/* <img
              src={logo}
              alt=""
              srcset=""
              className="md:w-28 w-auto h-auto"
            /> */}
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
      </FlowbiteFooter>
    );
  }
}

export default Footer;
