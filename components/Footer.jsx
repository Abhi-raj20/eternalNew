"use client";

import Link from "next/link";
import Image from "next/image";

const footerLogos = [
  "https://knowles.uk.com/wp-content/uploads/2024/05/Ecologi-Logo-BW-1.png",
  "https://knowles.uk.com/wp-content/uploads/2024/05/CL_TOP100_2023_LOGO-BW-1.png",
  "https://knowles.uk.com/wp-content/uploads/2025/01/GBB-Brand-Partner-Logo-2025-white.png",
  "https://knowles.uk.com/wp-content/uploads/2024/05/ASUC-Logo-BW-1.png",
  "https://knowles.uk.com/wp-content/uploads/2024/05/Chas-Accredited-Contractor-Logo-BW-1.png",
  "https://knowles.uk.com/wp-content/uploads/2024/05/Considerate-Constructors-Logo-BW-1.png",
];

const footerMenu = [
  { label: "Projects", href: "/projects" },
  { label: "Divisions", href: "/divisions" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
];

export default function Footer() {
  return (
    <footer className="site-footer charcoal-bg">
      <div className="row-1 pad-h">
        <div>
          <h3>Super-Prime Construction.</h3>
          <br />
          <h3>
            Building Excellence,
            <br />
            from Concept to Completion.
          </h3>
        </div>

        <div className="right">
          <div>
            <h4>Contact</h4>
            <p>
              12th Floor Capital House,
              <br />
              25 Chapel Street, London
              <br />
              NW1 5DH
            </p>
            <p>
              <a href="mailto:info@knowles.uk.com">info@knowles.uk.com</a>
              <br />
              <a href="tel:+442039887994">+44 (0)20 3988 7994</a>
            </p>
          </div>

          <div>
            <h4>Follow</h4>
            <p>
              <a href="https://www.instagram.com/knowles_construction/">
                Instagram
              </a>
              <br />
              <a href="https://www.linkedin.com/company/knowlesconstruction/">
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="row-2">
        {footerLogos.map((src, i) => (
          <div key={i}>
            <Image src={src} alt="" width={200} height={130} />
          </div>
        ))}
      </div>

      <div className="row-3 pad-h">
        <div>© Knowles 2026. All Rights Reserved</div>

        <ul className="footer-menu">
          {footerMenu.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <button
          id="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Top
        </button>
      </div>
    </footer>
  );
}
