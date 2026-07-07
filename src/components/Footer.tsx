import { Footer7 } from "@/components/ui/footer-7";
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

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
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  const customLogo = {
    url: "/",
    src: "https://ik.imagekit.io/yz2cyub4s/OMNIA%20Log%20JPEG.jpg?updatedAt=1782907978023",
    alt: "OMNIA Creative Agency Logo",
    title: "", // Blank since the logo image has the text
  };

  const currentYear = new Date().getFullYear();

  const customSocialLinks = [
    { 
      icon: <FaInstagram className="size-5" />, 
      href: "https://www.instagram.com/omniaevents_marketing?utm_source=qr", 
      label: "Instagram" 
    },
    {
      icon: <FaLinkedin className="size-5" />,
      href: "https://www.linkedin.com/company/omnia-events-marketing/",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope className="size-5" />,
      href: "mailto:workwithomnia@gmail.com",
      label: "Email"
    },
    {
      icon: <FaPhoneAlt className="size-5" />,
      href: "tel:+918108951419",
      label: "Phone"
    }
  ];

  return (
    <footer className="w-full bg-[#ffffff] border-t border-black/10 relative z-50">
      <Footer7 
        logo={customLogo}
        sections={customSections}
        description="India's leading marketing agency. We blend creativity, strategy, and innovation."
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
