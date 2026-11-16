"use client";

import { WhatsApp as WhatsAppIcon } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";

const WHATSAPP_NUMBER = "62895634060842";

export default function WhatsAppFloat() {
  const t = useTranslations("consultation");
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t("floatGreeting")
  )}`;

  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("floatLabel")}
      sx={{
        position: "fixed",
        bottom: { xs: 16, md: 24 },
        right: { xs: 16, md: 24 },
        zIndex: 1000,
        width: 56,
        height: 56,
        borderRadius: "50%",
        backgroundColor: "#25D366",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        boxShadow: "0 8px 24px rgba(37, 211, 102, 0.45)",
        transition: "transform 0.2s ease, background-color 0.2s ease",
        "&:hover": {
          backgroundColor: "#1DA851",
          transform: "scale(1.06)",
        },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 32 }} />
    </Box>
  );
}
