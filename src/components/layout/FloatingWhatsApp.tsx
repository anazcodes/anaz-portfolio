import { WhatsAppIcon } from "@/components/ui/icons";
import { whatsapp } from "@/lib/data";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noreferrer"
      aria-label="Message Anaz on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 ring-2 ring-bg transition-transform hover:scale-105"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
