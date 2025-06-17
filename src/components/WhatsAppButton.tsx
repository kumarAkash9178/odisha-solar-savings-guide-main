/* src/components/WhatsAppButton.tsx */
import whatsappIcon from '/lovable-uploads/whatsapp-logo-icon-isolated-on-transparent-background-free-png.png'; // leading “/” is important

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9124165342?text=Hi%2C%20I%20just%20visited%20your%20site" // <‑‑ put your number here
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50              /* stays put on scroll */
        flex h-14 w-14 items-center justify-center
        rounded-full bg-green-500 shadow-lg
        hover:scale-105 transform-gpu transition
      "
    >
      <img
        src={whatsappIcon}
        alt="Chat on WhatsApp"
        className="h-8 w-8 object-contain invert-0"
      />
    </a>
  );
}
