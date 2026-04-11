"use client";

import LegalLayout from "../components/LegalLayout";
import { useLanguage } from "../LanguageContext"; // Adjust path if needed

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <LegalLayout title={t.navPrivacy}>
      <p className="font-semibold text-gray-800">{t.effectiveDate}</p>
      
      <h2 className="text-2xl font-bold text-[#1C1C1E] mt-8 mb-4">{t.privacyTitle1}</h2>
      <p>{t.privacyDesc1}</p>

      <h2 className="text-2xl font-bold text-[#1C1C1E] mt-8 mb-4">{t.privacyTitle2}</h2>
      <p>{t.privacyDesc2}</p>

      <h2 className="text-2xl font-bold text-[#1C1C1E] mt-8 mb-4">{t.privacyTitle3}</h2>
      <p>{t.privacyDesc3}</p>
    </LegalLayout>
  );
}