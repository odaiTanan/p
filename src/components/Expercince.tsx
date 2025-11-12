import { motion } from "framer-motion";
import {
  faBusinessTime,
  faGraduationCap,
  faHouseFloodWater,
  faStopwatch,
  faTimes,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

type Props = {};

const Experince = (props: Props) => {
  const t = useTranslations();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      id="experince"
      whileInView={{ opacity: 1 }}
      className="flex flex-col items-center py-20 bg-[#080808f0] relative home overflow-hidden  min-h-screen justify-start "
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
              {t("tExperincetitle")} <FontAwesomeIcon icon={faBusinessTime} />
            </h1>
          </div>
        </div>
        <div className="flex justify-center gap-20 flex-wrap ">
          <div className="card text-white">
            <div className="number">
              <p className="text">1</p>
            </div>

            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill="var(--primary)"
                viewBox="0 0 64 64"
                role="img"
                aria-labelledby="fs-title fs-desc"
                focusable="false"
                className="icon world text-center"
              >
                {" "}
                <g id="monitor">
                  <rect
                    x="2"
                    y="8"
                    width="32"
                    height="22"
                    rx="2"
                    ry="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="10"
                    y="30"
                    width="16"
                    height="2"
                    rx="1"
                    ry="1"
                    fill="currentColor"
                  />

                  <polyline
                    points="8.5,15 11.5,18 8.5,21"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="14.5"
                    y1="15"
                    x2="18.5"
                    y2="21"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="22.5,15 25.5,18 22.5,21"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <p className="heading text-primary mt-[-25px]">{t("tjob2")}</p>
            <p className="company relative text-gray-400 mb-2 z-20">
              {t("tfreelance")}
            </p>
            <p className="content">{t("texperince1")}</p>
          </div>
          <div className="card text-white">
            <div className="number">
              <p className="text">2</p>
            </div>

            <div className="icon">
              <svg
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path>
              </svg>
            </div>
            <p className="heading text-primary">{t("tjob")}</p>
            <p className="company relative text-gray-400 mb-2 z-20">
              Hdr Agency {"(2025-Present)"}
            </p>
            <p className="content">{t("texperince2")}</p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Experince;
