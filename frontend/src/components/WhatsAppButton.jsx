import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/data/content";

export default function WhatsAppButton() {
  // wa.me needs the number as digits only, with country code (e.g. 919136407944)
  const phone = (CONTACT.whatsapp || CONTACT.phone).replace(/\D/g, "");
  const message = encodeURIComponent(
    "Hello Vegith Pinnacle, I'm interested in your Staffing and Facility Management Services."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-[9999] 
        flex h-16 w-16 items-center justify-center rounded-full 
        text-[#241c08] 
        transition-all duration-200 ease-in-out
        
        /* Premium 3D Metallic Gold Gradient Base */
        bg-gradient-to-br from-[#bd9234] via-[#ffdf73] to-[#bd9234]
        
       
        
        /* Inner Ring to simulate physical metallic shine */
        before:absolute before:inset-[3px] before:rounded-full before:bg-gradient-to-br before:from-[#ffe58f] before:via-[#d4af37] before:to-[#aa7c11] before:border before:border-[#fff3cc] before:z-0
        
        /* --- HOVER EFFECTS --- */
        hover:-translate-y-1 
        hover:bg-gradient-to-br hover:from-[#d4af37] hover:via-[#fff3cc] hover:to-[#d4af37]
        hover:shadow-[0_8px_0_#8a6417,0_15px_25px_rgba(212,175,55,0.4)]
        
        /* --- CLICK / ACTIVE PRESS EFFECT --- */
        active:translate-y-[3px]
        active:shadow-[0_1px_0_#8a6417,0_3px_10px_rgba(0,0,0,0.3)]
      "
    >
      {/* Icon layered above the background effects */}
      <FaWhatsapp size={34} className="relative z-10 drop-shadow-[1px_1px_0px_rgba(255,255,255,0.4)] transition-transform duration-200 hover:scale-105" />
    </a>
  );
}
