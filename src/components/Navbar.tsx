"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type NavItem = {
  labelKey: string;
  href: string;
  key: string;
  kind: "page" | "section";
};

const navItems: NavItem[] = [
  { labelKey: "home", href: "/", key: "home", kind: "page" },
  {
    labelKey: "destinations",
    href: "/destinations",
    key: "destinations",
    kind: "page",
  },
  { labelKey: "aboutUs", href: "/#about", key: "aboutUs", kind: "section" },
  {
    labelKey: "transportation",
    href: "/transportation",
    key: "transportation",
    kind: "page",
  },
  {
    labelKey: "consultation",
    href: "/#konsultasi",
    key: "consultation",
    kind: "section",
  },
  {
    labelKey: "contact",
    href: "/contact",
    key: "contact",
    kind: "page",
  },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const tNav = useTranslations("navbar");

  const isHomePage = pathname === "/";
  const scrolled = !isHomePage || scrollY > 50;

  const isActive = (item: NavItem) => {
    if (item.kind === "section") {
      return false;
    }
    if (item.href === "/") {
      return pathname === "/";
    }
    if (item.href === "/destinations") {
      return (
        pathname.startsWith("/destinations") ||
        pathname.startsWith("/destination/")
      );
    }
    return pathname.startsWith(item.href);
  };

  useEffect(() => {
    if (!isHomePage) {
      return;
    }
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageSwitch = (
    event: React.MouseEvent<HTMLElement>,
    newLocale: string | null
  ) => {
    if (newLocale !== null && newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="h6" fontWeight={700} color="primary">
          Sasak Journey
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => {
          const active = isActive(item);
          const isConsultation = item.key === "consultation";
          return (
            <ListItem key={item.key} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={handleDrawerToggle}
                sx={{
                  py: 1.5,
                  backgroundColor: isConsultation
                    ? "rgba(37, 211, 102, 0.12)"
                    : active
                      ? "rgba(0, 107, 125, 0.08)"
                      : "transparent",
                  borderLeft: active ? "3px solid" : "none",
                  borderColor: active ? "primary.main" : "transparent",
                  "&:hover": {
                    backgroundColor: isConsultation
                      ? "rgba(37, 211, 102, 0.18)"
                      : active
                        ? "rgba(0, 107, 125, 0.12)"
                        : "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemText
                  primary={tNav(item.labelKey)}
                  primaryTypographyProps={{
                    fontWeight: isConsultation || active ? 600 : 400,
                    color: isConsultation
                      ? "#1DA851"
                      : active
                        ? "primary.main"
                        : "inherit",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem disablePadding sx={{ px: 2, mt: 2, mb: 1 }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1,
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LanguageIcon sx={{ fontSize: 20, color: "text.secondary" }} />
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, color: "text.secondary" }}
              >
                Language
              </Typography>
            </Box>
            <ToggleButtonGroup
              value={locale}
              exclusive
              onChange={(e, newLocale) => {
                if (newLocale !== null && newLocale !== locale) {
                  router.replace(pathname, { locale: newLocale });
                }
              }}
              aria-label="language selection"
              size="small"
              sx={{
                border: "none",
                "& .MuiToggleButton-root": {
                  border: "none",
                  px: 2,
                  py: 0.5,
                  borderRadius: 1.5,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  minWidth: 48,
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "secondary.main",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                    },
                  },
                },
              }}
            >
              <ToggleButton value="id" aria-label="indonesia">
                ID
              </ToggleButton>
              <ToggleButton value="en" aria-label="english">
                EN
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </ListItem>
      </List>
      <Box sx={{ px: 2, pb: 2 }}>
        <Button
          component={Link}
          href="/#konsultasi"
          variant="contained"
          fullWidth
          startIcon={<WhatsAppIcon />}
          onClick={handleDrawerToggle}
          sx={{
            backgroundColor: "#25D366",
            color: "white",
            fontWeight: 700,
            textTransform: "none",
            borderRadius: 2,
            py: 1.25,
            boxShadow: "0 8px 20px rgba(37, 211, 102, 0.35)",
            "&:hover": {
              backgroundColor: "#1DA851",
            },
          }}
        >
          {tNav("consultFree")}
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.98)"
            : isHomePage
              ? "transparent"
              : "rgba(255, 255, 255, 0.98)",
          boxShadow: scrolled ? "0 2px 20px rgba(0, 0, 0, 0.1)" : "none",
          transition: "all 0.3s ease",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              py: scrolled ? 1 : 2,
              transition: "padding 0.3s ease",
              alignItems: "center",
            }}
          >
            <Typography
              component={Link}
              href="/"
              sx={{
                fontWeight: 700,
                fontSize: "1.5rem",
                color: scrolled
                  ? "primary.main"
                  : isHomePage
                    ? "white"
                    : "primary.main",
                textDecoration: "none",
                transition: "color 0.3s ease",
                cursor: "pointer",
              }}
            >
              Sasak Journey
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: { md: 1, lg: 2 },
              }}
            >
              {navItems.map((item) => {
                const active = isActive(item);
                if (item.key === "consultation") {
                  return (
                    <Button
                      key={item.key}
                      component={Link}
                      href={item.href}
                      variant="contained"
                      startIcon={<WhatsAppIcon sx={{ fontSize: 18 }} />}
                      sx={{
                        backgroundColor: "#25D366",
                        color: "white",
                        fontWeight: 700,
                        textTransform: "none",
                        whiteSpace: "nowrap",
                        px: 2,
                        py: 1,
                        minWidth: "auto",
                        borderRadius: 3,
                        boxShadow: "0 6px 18px rgba(37, 211, 102, 0.35)",
                        "&:hover": {
                          backgroundColor: "#1DA851",
                        },
                      }}
                    >
                      {tNav(item.labelKey)}
                    </Button>
                  );
                }
                return (
                  <Button
                    key={item.key}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: active
                        ? "primary.main"
                        : scrolled
                          ? "text.primary"
                          : isHomePage
                            ? "white"
                            : "text.primary",
                      fontWeight: active ? 600 : 500,
                      textDecoration: "none",
                      position: "relative",
                      whiteSpace: "nowrap",
                      px: { md: 1, lg: 1.5 },
                      py: 1,
                      minWidth: "auto",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                      },
                      "&::after": active
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: -4,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "60%",
                            height: 2,
                            backgroundColor: "primary.main",
                            borderRadius: 1,
                          }
                        : {},
                    }}
                  >
                    {tNav(item.labelKey)}
                  </Button>
                );
              })}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  backgroundColor: scrolled
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(255, 255, 255, 0.1)",
                  borderRadius: 3,
                  p: 0.5,
                  backdropFilter: "blur(10px)",
                }}
              >
                <ToggleButtonGroup
                  value={locale}
                  exclusive
                  onChange={handleLanguageSwitch}
                  aria-label="language selection"
                  sx={{
                    border: "none",
                    "& .MuiToggleButton-root": {
                      border: "none",
                      px: 2,
                      py: 0.25,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: scrolled
                        ? "text.primary"
                        : "rgba(255, 255, 255, 0.7)",
                      "&:hover": {
                        backgroundColor: scrolled
                          ? "rgba(0, 0, 0, 0.08)"
                          : "rgba(255, 255, 255, 0.15)",
                      },
                      "&.Mui-selected": {
                        backgroundColor: scrolled
                          ? "secondary.main"
                          : "rgba(255, 255, 255, 0.25)",
                        color: scrolled ? "white" : "white",
                        "&:hover": {
                          backgroundColor: scrolled
                            ? "secondary.dark"
                            : "rgba(255, 255, 255, 0.3)",
                        },
                      },
                    },
                  }}
                >
                  <ToggleButton value="id" aria-label="indonesia">
                    ID
                  </ToggleButton>
                  <ToggleButton value="en" aria-label="english">
                    EN
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: "none" },
                color: scrolled
                  ? "text.primary"
                  : isHomePage
                    ? "white"
                    : "text.primary",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
