import { motion } from "framer-motion";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { HexagonBackground } from "./ui/shadcn-io/hexagon-background";


const Education = () => {
  const t = useTranslations();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="education"
      className="flex flex-col items-center py-20 bg-[#080808f0] relative home overflow-hidden  min-h-[50%] justify-start "
    >
      {" "}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="z-20 flex flex-col  gap-[30px]  text-center  mb-[200px]">
          <div dir="ltr" className="one relative z-20">
            <h1 className="text-primary z-20 mx-auto text-2xl font-bold">
              {t("teducation")} <FontAwesomeIcon icon={faGraduationCap} />
            </h1>
          </div>
        </div>
        <ol className="items-center header finisher-header sm:flex">
          <li className="relative  sm:mb-0">
            <div className="md:min-w-[300px] flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-950 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-[var(--primary)] dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <p className="text-primary">{t("tspec")}</p>
              <p className="text-gray-300">{t("tuniversity")}</p>
              <h3 className="text-lg font-semibold text-white dark:text-white">
                {t("tgraduated")} 2021
              </h3>
            </div>
          </li>
          <li className="relative  sm:mb-0">
            <div className="md:min-w-[300px] flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-950 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-[var(--primary)] dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <p className="text-primary">{t("tspec")}</p>
              <p className="text-gray-300">{t("tuniversity")}</p>
              <h3 className="text-lg font-semibold text-white dark:text-white">
                {t("tgraduate")}2026
              </h3>
            </div>
          </li>
        </ol>{" "}
      </motion.section>
    </motion.div>
  );
};

export default Education;

