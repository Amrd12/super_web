"use client";

import LegalLayout from "../components/LegalLayout";
import { useLanguage } from "../LanguageContext"; // Adjust path if needed

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <LegalLayout title={t.navTerms}>
      <p className="font-semibold text-gray-800">{t.effectiveDate}</p>
      
      <h2 className="text-2xl font-bold text-[#1C1C1E] mt-8 mb-4">{t.termsTitle1}</h2>
      <p>{t.termsDesc1}</p>

      <h2 className="text-2xl font-bold text-[#1C1C1E] mt-8 mb-4">{t.termsTitle2}</h2>
      <p>{t.termsDesc2}</p>

      <h2 className="text-2xl font-bold text-[#1C1C1E] mt-8 mb-4">{t.termsTitle3}</h2>
      <p>{t.termsDesc3}</p>
    </LegalLayout>
  );
}