"use client";

import { durations, searchDestinations } from "@/data/destinations";
import {
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const WHATSAPP_NUMBER = "62895634060842";

export default function ConsultationSection() {
  const t = useTranslations("consultation");
  const tForm = useTranslations("consultation.form");
  const tSearch = useTranslations("hero.searchForm");
  const locale = useLocale();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [participants, setParticipants] = useState("");
  const [duration, setDuration] = useState("");
  const [message, setMessage] = useState("");

  const destinationLabel = (value: string) => {
    if (!value || value === "not-sure") {
      return tForm("notSure");
    }
    const dest = searchDestinations.find((d) => d.id === value);
    return dest ? tSearch(`destinations.${dest.labelKey}`) : value;
  };

  const formatDate = (value: string) => {
    if (!value) {
      return "";
    }
    const parsed = new Date(`${value}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) {
      return value;
    }
    return parsed.toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines: string[] = [
      t("waGreeting"),
      "",
      `👤 *${tForm("name")}:* ${name.trim()}`,
      `📱 *${tForm("phone")}:* ${phone.trim()}`,
      `📍 *${tForm("destination")}:* ${destinationLabel(destination)}`,
    ];

    const formattedDate = formatDate(date);
    if (formattedDate) {
      lines.push(`📅 *${tForm("date")}:* ${formattedDate}`);
    }
    if (participants.trim()) {
      lines.push(
        `👥 *${tForm("participants")}:* ${participants.trim()} ${t("waPeople")}`
      );
    }
    if (duration) {
      lines.push(`⏱ *${tForm("duration")}:* ${tSearch(`durations.${duration}`)}`);
    }
    if (message.trim()) {
      lines.push("", `💬 *${t("waMessageLabel")}:*`, message.trim());
    }
    lines.push("", t("waFooter"));

    const encodedMessage = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const points = [t("point1"), t("point2"), t("point3")];
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t("floatGreeting")
  )}`;

  return (
    <Box
      id="konsultasi"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#eef7f8",
        scrollMarginTop: 80,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 5 }}>
            <Chip
              label={t("badge")}
              sx={{
                backgroundColor: "#d9eef1",
                color: "primary.dark",
                fontWeight: 600,
                mb: 2,
              }}
            />
            <Typography
              variant="h2"
              component="h2"
              sx={{ color: "primary.main", fontWeight: 700, mb: 2 }}
            >
              {t("title")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mb: 4, lineHeight: 1.7 }}
            >
              {t("subtitle")}
            </Typography>

            <Stack spacing={2} sx={{ mb: 4 }}>
              {points.map((point) => (
                <Box
                  key={point}
                  sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}
                >
                  <CheckCircleIcon
                    sx={{ color: "primary.main", mt: 0.3, flexShrink: 0 }}
                  />
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {point}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: "white",
                border: "1px solid",
                borderColor: "rgba(0, 107, 125, 0.15)",
              }}
            >
              <Stack spacing={2.5}>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Box
                    sx={{
                      minWidth: 44,
                      height: 44,
                      borderRadius: "50%",
                      backgroundColor: "#e7f8ee",
                      color: "#25D366",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <WhatsAppIcon />
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        display: "block",
                      }}
                    >
                      {t("whatsappLabel")}
                    </Typography>
                    <Typography
                      component="a"
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="body1"
                      sx={{
                        fontWeight: 700,
                        color: "text.primary",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      +62 895-6340-60842
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Box
                    sx={{
                      minWidth: 44,
                      height: 44,
                      borderRadius: "50%",
                      backgroundColor: "#fff7ed",
                      color: "#f59e0b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ScheduleIcon />
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        display: "block",
                      }}
                    >
                      {t("hoursLabel")}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {t("hours")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t("responseNote")}
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4, md: 5 },
                borderRadius: 4,
                backgroundColor: "white",
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: "#111827", mb: 3 }}
              >
                {tForm("title")}
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={tForm("name")}
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoComplete="name"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={tForm("phone")}
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      type="tel"
                      autoComplete="tel"
                      inputProps={{ placeholder: tForm("phonePlaceholder") }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      select
                      fullWidth
                      label={tForm("destination")}
                      name="destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>{tForm("destinationPlaceholder")}</em>
                      </MenuItem>
                      <MenuItem value="not-sure">{tForm("notSure")}</MenuItem>
                      {searchDestinations.map((dest) => (
                        <MenuItem key={dest.id} value={dest.id}>
                          {tSearch(`destinations.${dest.labelKey}`)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={tForm("date")}
                      name="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={tForm("participants")}
                      name="participants"
                      type="number"
                      value={participants}
                      onChange={(e) => setParticipants(e.target.value)}
                      inputProps={{
                        min: 1,
                        placeholder: tForm("participantsPlaceholder"),
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      select
                      fullWidth
                      label={tForm("duration")}
                      name="duration"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>{tForm("durationPlaceholder")}</em>
                      </MenuItem>
                      {durations.map((dur) => (
                        <MenuItem key={dur.id} value={dur.id}>
                          {tSearch(`durations.${dur.labelKey}`)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label={tForm("message")}
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      multiline
                      rows={4}
                      inputProps={{ placeholder: tForm("messagePlaceholder") }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      startIcon={<WhatsAppIcon />}
                      sx={{
                        py: 1.75,
                        borderRadius: 3,
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        textTransform: "none",
                        backgroundColor: "#25D366",
                        boxShadow: "0 10px 25px -5px rgba(37, 211, 102, 0.4)",
                        "&:hover": {
                          backgroundColor: "#1DA851",
                          boxShadow:
                            "0 15px 30px -5px rgba(37, 211, 102, 0.5)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      {tForm("send")}
                    </Button>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="center"
                    >
                      {tForm("note")}
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
