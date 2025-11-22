"use client";

import Nav from "@/components/Nav";
import { HexagonBackground } from "@/components/ui/shadcn-io/hexagon-background";
import { faDownload, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Technoligies from "@/components/Technoligies";
import Education from "@/components/Education";
import Experince from "@/components/Expercince";
import Projects from "@/components/Projects";
import ContactPage from "@/components/Contact";
import Fnisher from "@/components/Fnisher";
import Footer from "@/components/Footer";
export default function Home() {
  const t = useTranslations();
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const sentence = isArabic
    ? "مرحبًا ، أنا عدي تنن - مهندس برمجيات ومطور ويب"
    : "Hi, I am Oday Tanan — Software Engineer and Web Developer";
  const words = sentence.split(" ");

  return (
    <div>
      <Fnisher>
        {" "}
        <Nav />
        <div className="w-[90%] mx-auto z-20 flex flex-col justify-center items-center gap-8 md:gap-[50px]">
          <motion.h1
            className="text-3xl  md:text-4xl text-white font-bold flex flex-wrap justify-start md:justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mx-1"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-2xl   text-gray-300">{t("tRole")}</p>
          <p className=" text-gray-300 md:text-xl"> {t("tExperince")}</p>
          <a
            href="/Odai_tanan_resume.pdf"
            download="odai-tanan-cv"
            className="p-4 hover:shadow-[0_0_10px_0_#00ffee9a] shadow-primary transform transition-all duration-200 bg-[var(--background2)] border border-2 border-primary rounded-2xl text-primary"
          >
            <FontAwesomeIcon icon={faDownload} /> {t("tDownloadCv")}
          </a>
        </div>
      </Fnisher>

      <div className="relative ">
        {/* Fixed hex background behind all sections */}
        <HexagonBackground
          hexagonSize={75}
          hexagonMargin={3}
          className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none"
          hexagonProps={{
            className: `
        before:bg-[#080808]
        before:opacity-100
        before:transition-all before:duration-[1200ms] before:ease-in-out
        /* simulate hover with a pulsing animation */
        before:animate-pulseHex
      `,
          }}
        />
        {/* Sections with scroll animations */}

        <Education />
        <Experince />
        <Technoligies />
        <Projects />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}
