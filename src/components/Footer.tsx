import { Footer7 } from "@/components/ui/footer-7";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  const customSections = [
    {
      title: "Services",
      links: [
        { name: "Events", href: "/services" },
        { name: "BTL Services", href: "/services" },
        { name: "ATL Services", href: "/services" },
        { name: "Digital Marketing", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  const customLogo = {
    url: "/",
    src: "https://ik.imagekit.io/jai777/Dharmik/Logo_omnia-removebg-preview%20(1).png",
    alt: "OMNIA Creative Agency Logo",
    title: "", // Blank since the logo image has the text
  };

  const currentYear = new Date().getFullYear();

  const customSocialLinks = [
    { 
      icon: <FaInstagram className="size-5" />, 
      href: "https://www.instagram.com/omniaevents_marketing?utm_source=qr", 
      label: "Instagram" 
    }
  ];

  return (
    <footer className="w-full bg-white border-t border-black/10 relative z-50">
      <Footer7 
        logo={customLogo}
        sections={customSections}
        description="India's leading marketing agency, now expanded to Dubai. We blend creativity, strategy, and innovation."
        socialLinks={customSocialLinks}
        copyright={`© ${currentYear} OMNIA Creative Agency. All rights reserved.`}
        legalLinks={[
          { name: "Privacy Policy", href: "#" },
          { name: "Terms of Service", href: "#" }
        ]}
      />
    </footer>
  );
}
