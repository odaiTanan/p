import { motion } from "framer-motion";
import {
  faDotCircle,
  faGraduationCap,
  faHouseFloodWater,
  faList,
  faListDots,
  faProjectDiagram,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import "./card.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Projects = () => {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");
  const t = useTranslations();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      id="projects"
      whileInView={{ opacity: 1 }}
      className="flex flex-col items-center py-20  relative home overflow-hidden  min-h-screen justify-start "
    >
      {" "}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {" "}
        <div className="z-20 flex flex-col  gap-[30px]  text-center  mb-[200px]">
          <div dir="ltr" className="one relative z-20">
            <h1 className="text-primary z-20 mx-auto text-2xl font-bold">
              {t("tProjects")} <FontAwesomeIcon icon={faProjectDiagram} />
            </h1>
          </div>
        </div>
        <div className="flex justify-center gap-20 flex-wrap ">
          {" "}
          <div className="card2">
            <div className="card-inner">
              <div className="card-front c1">
                <img className="" src="/medicalcenter/l.png" />
              </div>
              <div className="card-back c1">
                <span
                  className="cursor-pointer hover:color-[var(--primary)]"
                  onClick={() => {
                    window.location.href = "https://medicalcenter.vercel.app/";
                  }}
                >
                  {" "}
                  <FontAwesomeIcon
                    className="bg-transparent text-white text-sm mx-2"
                    icon={faDotCircle}
                  />
                  site
                </span>
                <span
                  className="cursor-pointer hover:color-[var(--primary)]"
                  onClick={() => {
                    window.location.href =
                      "https://medicalcenter.vercel.app/adminlogin";
                  }}
                >
                  <FontAwesomeIcon
                    className="bg-transparent text-white text-sm mx-2"
                    icon={faDotCircle}
                  />
                  dashboard
                </span>
                <Link
                  href={isArabic ? "/ar/medicalcenter" : "/en/medicalcenter"}
                >
                  {" "}
                  <FontAwesomeIcon
                    className="bg-transparent text-white text-sm mx-2"
                    icon={faDotCircle}
                  />
                  images & description
                </Link>
              </div>
            </div>
          </div>{" "}
          <div className="card2">
            <div className="card-inner">
              <div className="card-front c2">
                <img className="" src="/restaurant/l.png" />
              </div>
              <div className="card-back c2">
                <span
                  className="cursor-pointer"
                  onClick={() =>
                    (window.location.href =
                      "https://drive.google.com/file/d/1Hbhc5eFT7hs65qKHt1jhQg5KlYnNDBQ3/view")
                  }
                >
                  <FontAwesomeIcon
                    className="bg-transparent text-white text-sm mx-2"
                    icon={faDotCircle}
                  />
                  demo
                </span>
                <Link href={isArabic ? "/ar/restaurant" : "/en/restaurant"}>
                  <FontAwesomeIcon
                    className="bg-transparent text-white text-sm mx-2"
                    icon={faDotCircle}
                  />
                  images & description
                </Link>
              </div>
            </div>
          </div>{" "}
          <div className="card2">
            <div className="card-inner">
              <div className="card-front c3">
                <img className="" src="/ecommerce/l.png" />
              </div>
              <div className="card-back c3">
                <span
                  className="cursor-pointer"
                  onClick={() =>
                    (window.location.href =
                      "https://drive.google.com/file/d/1IfEZp0cZSUr5jTCV4pIsiAlG9nPVLlfK/view")
                  }
                >
                  <FontAwesomeIcon
                    className="bg-transparent text-white text-sm mx-2"
                    icon={faDotCircle}
                  />
                  demo
                </span>
                <Link href={isArabic ? "/ar/ecommerce" : "/en/ecommerce"}>
                  <FontAwesomeIcon
                    className="bg-transparent text-white text-sm mx-2"
                    icon={faDotCircle}
                  />
                  images & description
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Projects;


