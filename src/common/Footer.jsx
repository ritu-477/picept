import React from 'react'
import footerLogo from '../assets/images/webp/footer-logo.webp'
import Icon from './Icons'
import { FOOTER_DATA } from '../utils/Helper'
import {FOOTER_LINKS} from '../utils/Helper'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black">
      <div className="container lg:pt-[90px] md:pt-16 sm:pt-12 pt-6">
        <div className="flex flex-col lg:flex-row gap-7 justify-between">
          {/* Logo and Social Links */}
          <div className="flex flex-col">
            <img
              className="sm:max-w-[257.68px] max-w-[200px]"
              src={footerLogo}
              alt="footer-logo"
            />
            <div className="flex items-center gap-3 pt-4">
              {FOOTER_LINKS.map(({ href, iconName }, index) => (
                <a
                  key={index}
                  className="group transition duration-300 hover:border hover:border-border-white rounded-full size-12 bg-ink-black flex justify-center items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                >
                  <Icon iconName={iconName} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          <div className="flex max-w-[612px] w-full justify-between flex-wrap gap-x-3 gap-y-6 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-[113px]">
            {FOOTER_DATA.map(({ title, links }, sectionIndex) => (
              <div key={sectionIndex} className="flex flex-col max-sm:w-[40%]">
                <p className="text-lg text-primary-white font-normal pb-2">{title}</p>
                {links.map(({ text, href }, linkIndex) => (
                  <a
                    key={linkIndex}
                    className="text-base mt-2 text-grey font-normal transition duration-300 hover:text-orange"
                    href={href}
                  >
                    {text}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="lg:pt-20 md:pt-16 sm:pt-12 pt-8 pb-6">
          <p className="text-base font-normal text-grey text-center">
            Copyright opendoc.ai {currentYear} | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer