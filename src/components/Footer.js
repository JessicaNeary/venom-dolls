import React from "react";

const Footer = ({ whiteBg }) => {
  const fontColor = whiteBg ? "text-dark" : "text-light";
  return (
    <div
      className={`${fontColor} ${
        !whiteBg && "bg-black"
      } footer pt-2 pb-1 px-2 w-100 d-flex justify-content-between align-items-center`}
    >
      <p className="m-0">© 2021 Venom Dolls NZ</p>
      <div>
        <a href="/contact" className={`${fontColor} text-decoration-none me-3`}>
          Contact
        </a>
        <a
          href="/privacy-policy.html"
          className={`${fontColor} text-decoration-none mx-mb-3`}
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
