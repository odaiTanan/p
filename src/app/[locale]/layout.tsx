import { NextIntlClientProvider } from "next-intl";
import React from "react";
import { locales } from "@/i18n/config";
import "../globals.css";
import { Cairo, Poppins } from "next/font/google";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // ✅ تحميل آمن للرسائل
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    // استخدام اللغة الافتراضية إذا فشل التحميل
    messages = (await import(`@/messages/en.json`)).default;
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${
          locale === "ar" ? cairo.className : poppins.className
        } bg-[#080808]`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
