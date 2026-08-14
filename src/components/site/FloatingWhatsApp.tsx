import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { waLink } from "@/lib/clinic";

export function FloatingWhatsApp() {
  const [hover, setHover] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hover && (
          <motion.span
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            className="hidden rounded-full bg-forest px-4 py-2 text-sm font-medium text-primary-foreground shadow-luxe sm:block"
          >
            Fale conosco no WhatsApp!
          </motion.span>
        )}
      </AnimatePresence>

      <motion.a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale conosco no WhatsApp"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 220, damping: 18 }}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp shadow-luxe"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40" />
        <MessageCircle className="relative h-7 w-7 text-primary-foreground" />
        <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full border-2 border-background bg-whatsapp" />
      </motion.a>
    </div>
  );
}
