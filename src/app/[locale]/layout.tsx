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
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.locale;

  // Load messages directly for the specific locale
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div
        className={
          locale === "ar" ? cairo.className : poppins.className + "bg-[#080808]"
        }
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
