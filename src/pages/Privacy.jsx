import {
  ShieldCheck,
  UserCheck,
  Database,
  Lock,
  AlarmClock,
  ScrollText,
  Globe,
  BellRing,
  Mail,
} from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      icon: <ShieldCheck className="w-6 h-6 text-white mr-2" />,
      text: `This Privacy Policy explains how Bu Financial ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you use our financial services in Qatar.`,
    },
    {
      title: "2. Information We Collect",
      icon: <UserCheck className="w-6 h-6 text-white mr-2" />,
      text: `We collect personal identification data (name, contact, Qatar ID, etc.), financial info, and technical usage data (IP address, device info, etc.).`,
    },
    {
      title: "3. How We Use Your Information",
      icon: <Database className="w-6 h-6 text-white mr-2" />,
      text: `To provide services, verify identity, comply with Qatari laws, improve offerings, detect fraud, and more.`,
    },
    {
      title: "4. Data Sharing and Disclosure",
      icon: <ScrollText className="w-6 h-6 text-white mr-2" />,
      text: `We may share data with service providers, legal authorities, or during business transfers. We do not sell your data.`,
    },
    {
      title: "5. Data Security",
      icon: <Lock className="w-6 h-6 text-white mr-2" />,
      text: `We use encryption, audits, access control, and staff training. However, no method is 100% secure.`,
    },
    {
      title: "6. Data Retention",
      icon: <AlarmClock className="w-6 h-6 text-white mr-2" />,
      text: `We retain your data only as long as needed to provide services and comply with Qatari law.`,
    },
    {
      title: "7. Your Rights",
      icon: <ShieldCheck className="w-6 h-6 text-white mr-2" />,
      text: `You have the right to access, correct, delete, or object to processing. You may also withdraw consent.`,
    },
    {
      title: "8. International Transfers",
      icon: <Globe className="w-6 h-6 text-white mr-2" />,
      text: `Your data may be transferred internationally with appropriate safeguards in place.`,
    },
    {
      title: "9. Changes to This Policy",
      icon: <BellRing className="w-6 h-6 text-white mr-2" />,
      text: `We may update this policy and will notify users by updating this page.`,
    },
    {
      title: "10. Contact Us",
      icon: <Mail className="w-6 h-6 text-white mr-2" />,
      text: `📍 Location 123 Book Street, Library City`,
    },
  ];

  return (
    <section className="min-h-screen  py-24 px-6 flex justify-center items-start">
      <div className="max-w-5xl w-full bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-10 shadow-2xl backdrop-blur-md border border-white/10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-2 tracking-tight">Who is better?</h2>
          <h1 className="text-3xl font-semibold text-indigo-100">Privacy Policy</h1>
          <p className="text-sm text-blue-200 mt-1">Last Updated: May 2025</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white/10 p-6 rounded-xl border border-white/10">
              <div className="flex items-center mb-2">
                {section.icon}
                <h3 className="text-xl text-white font-semibold">{section.title}</h3>
              </div>
              <p className="text-indigo-100">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
