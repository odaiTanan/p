"use client";

import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const sections = [
    { id: "education", label: t("tEducation") },
    { id: "experince", label: t("tExperincetitle") },
    { id: "technologies", label: t("tTecnologies") },
    { id: "projects", label: t("tProjects") },
    { id: "contact", label: t("tContact") },
  ];

  return (
    <footer
      className="
        w-full mt-20 py-8
        bg-white/10 backdrop-blur-md 
        border border-[var(--primary)] 
        rounded-t-3xl shadow-lg
        text-white relative z-[60]
      "
    >
      {/* Main footer content */}
      <div
        className="
          max-w-6xl mx-auto px-6
          flex flex-col md:flex-row 
          justify-between items-center md:items-start 
          gap-8
        "
      >
        {/* Social icons */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-lg font-bold text-[var(--primary)]">
            {t("tContact")}
          </h3>

          <div className="flex gap-6">
            <a
              href="https://github.com/odaiTanan"
              target="_blank"
              className="text-white hover:text-[var(--primary)] text-2xl transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://www.linkedin.com/in/odai-tanan-743768255"
              target="_blank"
              className="text-white hover:text-[var(--primary)] text-2xl transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://wa.me/+963957289224"
              target="_blank"
              className="text-white hover:text-[var(--primary)] text-2xl transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        {/* Fast links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold text-[var(--primary)] mb-4">
            {t("tFastLinks") || "Fast Links"}
          </h3>

          <ul
            className="
              flex flex-col gap-2 
              text-gray-300 text-sm
            "
          >
            <li>
              <Link
                href={isArabic ? "/ar" : "/en"}
                className="hover:text-[var(--primary)] transition"
              >
                {t("tHome")}
              </Link>
            </li>

            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => {
                    const el = document.getElementById(s.id);
                    if (el) {
                      const offset = -80;
                      const y =
                        el.getBoundingClientRect().top +
                        window.pageYOffset +
                        offset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="hover:text-[var(--primary)] transition cursor-pointer"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Language switch */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h3 className="text-lg font-bold text-[var(--primary)]">
            {t("tLanguage")}
          </h3>

          <Link
            href={
              isArabic
                ? pathname.replace("/ar", "/en")
                : pathname.replace("/en", "/ar")
            }
            className="
              px-4 py-2 rounded-full 
              bg-[var(--primary)] text-[var(--background)]
              transition hover:scale-105
            "
          >
            {isArabic ? "English" : "العربية"}
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[90%] mx-auto h-px bg-white/20 my-6"></div>

      {/* Copyright */}
      <p className="text-center text-gray-300 text-sm">
        © {year} • {t("tName")} — {t("tAllRights")}
      </p>
    </footer>
  );
}
