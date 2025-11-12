"use client";
import { motion } from "framer-motion";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ExternalNav() {
  const t = useTranslations();
  const [activeList, setActiveList] = useState<boolean>(false);
  const [isMdScreen, setIsMdScreen] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");
  return (
    <nav
      className="flex justify-between items-center 
    h-[70px] w-[90%] mx-auto mt-[10px] px-[30px] border-2
    fixed top-[20px]
    rounded-[30px] 
    border border-[var(--primary)]
    bg-white/10 
    backdrop-blur-md 
    shadow-lg 
    text-white z-50"
    >
      <h1 className="font-bold text-[17px] md:text-xl text-[var(--primary)]">
        {t("tName")}
      </h1>

      <motion.ul
        initial={
          isMdScreen ? false : isMdScreen !== null && { opacity: 0, y: -20 }
        }
        animate={
          activeList
            ? {
                opacity: 1,
                y: 0,
                display: "flex",
              }
            : { display: "none" }
        }
        transition={
          activeList ? { duration: 0.3, type: "spring", stiffness: 200 } : {}
        }
        className={`md:!flex gap-4 justify-center items-center ${
          activeList &&
          "nav_items border !gap-0 border-2 border-[var(--primary)] rounded-[30px] absolute left-0 bg-gray-950 md:bg-white/10 backdrop-blur-md !flex top-[calc(100%_+_49px)] w-full flex-col"
        }`}
      >
        <FontAwesomeIcon
          className="block md:!hidden text-[var(--primary)] absolute top-[-48px] rotate-[-60deg] text-[21px]"
          icon={faLink}
        />
        <FontAwesomeIcon
          className="block md:!hidden text-[var(--primary)] absolute top-[-24px] rotate-[-60deg] text-[21px]"
          icon={faLink}
        />

        {/* Home link */}
        <li className="hover:text-[var(--primary)] transform transition-all duration-200 cursor-pointer">
          <Link href={isArabic ? "/ar" : "/en"}>{t("tHome")}</Link>
        </li>

        {/* Section links with smooth scroll */}
        {[
          { id: "education", label: t("tEducation") },
          { id: "experince", label: t("tExperincetitle") },
          { id: "tecnologies", label: t("tTecnologies") },
          { id: "projects", label: t("tProjects") },
          { id: "contact", label: t("tContact") },
        ].map((section) => (
          <Link
            href={`${isArabic ? "/ar/" : "/en/"}#${section.id}`}
            key={section.id}
          >
            <li
              key={section.id}
              className="hover:text-[var(--primary)] transform transition-all duration-200 cursor-pointer"
            >
              {section.label}
            </li>
          </Link>
        ))}
      </motion.ul>

      <span dir="ltr">
        <Link
          href={
            isArabic
              ? pathname.replace("/ar", "/en")
              : pathname.replace("/en", "/ar")
          }
          dir="ltr"
          className="mt-4 px-2 py-2  bg-[var(--primary)] text-[var(--background)] rounded-[50%]"
        >
          {
            <i className="fa-solid fa-globe ">
              <FontAwesomeIcon
                className="text-[var(--background)]"
                icon={faGlobe}
              />
            </i>
          }
        </Link>
      </span>
      <div
        onClick={() => setActiveList(!activeList)}
        className="md:hidden   group w-[36px] items-end  h-[28px] flex flex-col justify-between gap-[3px]"
      >
        <div
          className={`w-full h-[4px] bg-[var(--primary)] ${
            isArabic ? " rounded-r-[3px]" : "rounded-l-[3px]"
          }`}
        ></div>
        <div
          className={`${
            activeList ? "w-full" : "w-[18px]"
          } transition-all duration-500 group-hover:w-full h-[4px] bg-[var(--primary)] ${
            isArabic ? " rounded-r-[3px]" : "rounded-l-[3px]"
          }`}
        ></div>
        <div
          className={`w-full h-[4px] bg-[var(--primary)] ${
            isArabic ? " rounded-r-[3px]" : "rounded-l-[3px]"
          }`}
        ></div>
      </div>
    </nav>
  );
}
