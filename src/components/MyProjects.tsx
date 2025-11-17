"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { motion } from "framer-motion";
type Props = { project: 0 | 1 | 2 };

const Myprojects = (props: Props) => {
  const t = useTranslations();
  const projects = [
    {
      title: t("tmedicalcenterTitle"),

      description: t("tmedicalcenterDesc"),
      features: [
        t("tmedicalcenterFeature1"),
        t("tmedicalcenterFeature2"),
        t("tmedicalcenterFeature3"),
        t("tmedicalcenterFeature4"),
      ],
      techStack: t("tmedicalcenterTech"),
    },
    {
      title: t("tecommerceTitle"),

      description: t("tecommerceDesc"),
      features: [
        t("tecommerceFeature1"),
        t("tecommerceFeature2"),
        t("tecommerceFeature3"),
        t("tecommerceFeature4"),
      ],
      techStack: t("tecommerceTech"),
    },
    {
      title: t("trestaurantTitle"),

      description: t("trestaurantDesc"),
      features: [
        t("trestaurantFeature1"),
        t("trestaurantFeature2"),
        t("trestaurantFeature3"),
        t("trestaurantFeature4"),
      ],
      techStack: t("trestaurantTech"),
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className=" space-y-10">
        {
          <div className="bg-gray-800/70 backdrop-blur-xl  shadow-lg rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-2 text-primary">
              {projects[props.project].title}
            </h3>

            <p className="text-gray-200 mb-4 text-sm">
              {projects[props.project].description}
            </p>

            <ul className="list-disc list-inside mb-4 text-sm text-gray-200">
              {projects[props.project].features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>

            <p className="text-xs text-gray-400">
              {t("tech")}: {projects[props.project].techStack}
            </p>
          </div>
        }
      </div>
    </motion.section>
  );
};

export default Myprojects;
