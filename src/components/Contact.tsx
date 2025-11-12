"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "./contact.css"; // includes your CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error sending email");

      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("❌ " + "error");
    }
  };
  const t = useTranslations();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      id="contact"
      whileInView={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen py-20 bg-[#080808f0] relative overflow-hidden"
    >
      <div className="z-20 flex flex-col  gap-[30px]  text-center ">
        <div dir="ltr" className="one relative z-20">
          <h1 className="text-primary z-20 mx-auto text-2xl font-bold">
            {t("tcontact")} <FontAwesomeIcon icon={faContactCard} />
          </h1>
        </div>
      </div>

      <div className="card !bg-[#080808] shadow shadow-xl shadow-amber-50   my-[40px]">
        <a
          href="https://github.com/odaiTanan"
          className="socialContainer containerTwo"
        >
          <svg
            fill="white"
            className="socialSvg linkdinSvg "
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/odai-tanan-743768255"
          className="socialContainer containerThree"
        >
          <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
          </svg>
        </a>

        <a
          href="https://wa.me/+963957289224"
          className="socialContainer containerFour"
        >
          <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
            {" "}
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>{" "}
          </svg>
        </a>
      </div>

      {/* Outer container with the rotating bars */}
      <div className="container">
        {/* The animated spans */}
        {[...Array(50)].map((_, i) => (
          <span key={i} style={{ "--i": i } as React.CSSProperties}></span>
        ))}

        {/* The form inside the glowing circle */}
        <div className="login-box  text-white">
          <h2 className="!mb-[70px]">{t("tsend")}</h2>
          <form className="translate-y-[-30px]" onSubmit={handleSubmit}>
            <div className="input-box ">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <label>{t("tyourname")}</label>
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <label>{t("tyouremail")}</label>
            </div>

            <div className="input-box">
              <input
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <label>{t("tyourmessage")}</label>
            </div>

            <button type="submit" className="btn">
              {t("toksend")}
            </button>

            {status && (
              <p className="text-center mt-2 text-sm text-gray-300 ">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
}
