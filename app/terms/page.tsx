import LegalLayout from "../components/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <p className="font-semibold text-gray-800">Effective Date: April 2026</p>
      
      <h2 className="text-2xl font-bold text-[#1C1C1E] mt-8 mb-4">1. Acceptance of Terms</h2>
      <p>
        By creating an account and logging in via Phone Authentication, you agree to abide by 
        these Terms of Service. If you do not agree with any part of these terms, you may not 
        use our services.
      </p>

      <h2 className="text-2xl font-bold text-[#1C1C1E] mt-8 mb-4">2. User Conduct</h2>
      <p>
        You agree to use the platform respectfully and safely. Any fraudulent requests, harassment 
        of drivers or passengers, or misuse of the rating system will result in immediate account termination.
      </p>

      <h2 className="text-2xl font-bold text-[#1C1C1E] mt-8 mb-4">3. Liability</h2>
      <p>
        Super App serves purely as a technological platform to connect independent users and drivers. 
        While we enforce strict community guidelines, Super App is not legally liable for individual 
        conduct, lost items, or incidents occurring during transit.
      </p>
    </LegalLayout>
  );
}