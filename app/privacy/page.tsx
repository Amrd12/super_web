import LegalLayout from "../components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="font-semibold text-gray-800">Effective Date: April 2026</p>
      
      <h2 className="text-2xl font-bold text-[#1C1C1E] mt-8 mb-4">1. Data Collection</h2>
      <p>
        We collect your phone number strictly for authentication purposes via Firebase. 
        Your profile information, such as your name and avatar, is used exclusively to facilitate 
        a premium experience within the platform.
      </p>

      <h2 className="text-2xl font-bold text-[#1C1C1E] mt-8 mb-4">2. Location Data</h2>
      <p>
        For drivers and users, location data is used only while the app is active to facilitate 
        rides and calculate distances accurately. We do not track your location in the background 
        when the app is completely closed.
      </p>

      <h2 className="text-2xl font-bold text-[#1C1C1E] mt-8 mb-4">3. Data Protection</h2>
      <p>
        Your data is encrypted and securely stored. We value your privacy and absolutely do not 
        sell your personal data, location history, or usage habits to third-party data brokers.
      </p>
    </LegalLayout>
  );
}