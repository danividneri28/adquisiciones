import React from "react";
import PropTypes from "prop-types";
import Flecha from "../assets/images/iconosMenu/Flecha.png";
import Migaja from "../assets/images/iconosMenu/Migaja.png";

const Breadcrumb = ({ items }) => {
  return (
    <div>
      <nav className="lg:flex justify-end mt-4 hidden" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {items.map((item, index) => (
            <li key={index} className="inline-flex items-center">
              <div className="flex items-center">
                <img src={Migaja} alt="migaja" className="w-[10px] m-1" />
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  className="ms-1 inline-flex items-center text-[8px] md:text-sm font-extrabold text-black hover:text-blue-600"
                >
                  {item.text}
                </a>
              ) : (
                <span className="ms-1 text-[8px] md:text-sm font-extrabold text-black md:ms-2">
                  {item.text}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumb;
