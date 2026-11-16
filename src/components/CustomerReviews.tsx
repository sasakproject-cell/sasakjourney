"use client";

import { customerReviews } from "@/data/reviews";
import { Send as SendIcon } from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Grid,
    Rating,
    TextField,
    Typography,
    alpha,
    useTheme,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const WHATSAPP_NUMBER = "62895634060842";

function initials(name: string) {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join("");
}

export default function CustomerReviews() {
    const t = useTranslations("reviews");
    const locale = useLocale();
    const theme = useTheme();
    const [name, setName] = useState("");
    const [rating, setRating] = useState<number | null>(5);
    const [trip, setTrip] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const lines = [
            t("waGreeting"),
            "",
            `${t("waName")}: ${name}`,
            `${t("waRating")}: ${rating ?? 5}/5`,
        ];
        if (trip.trim()) {
            lines.push(`${t("waTrip")}: ${trip.trim()}`);
        }
        lines.push(`${t("waReview")}: ${message}`, "", t("waFooter"));
        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
            "_blank"
        );
    };

    return (
        <Box
            id="reviews"
            sx={{
                pb: 8,
                mb: 8,
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                scrollMarginTop: 80,
            }}
        >
            <Box sx={{ textAlign: "center", maxWidth: "640px", mx: "auto", mb: 5 }}>
                <Chip
                    label={t("badge")}
                    sx={{
                        mb: 2,
                        fontWeight: 600,
                        px: 1,
                        backgroundColor: alpha(theme.palette.primary.main, 0.25),
                        color: "white",
                        borderRadius: "50px",
                    }}
                />
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{ fontWeight: 800, color: "white", mb: 1.5 }}
                >
                    {t("title")}
                </Typography>
                <Typography variant="body1" sx={{ color: "grey.400", lineHeight: 1.7 }}>
                    {t("subtitle")}
                </Typography>
            </Box>

            <Grid container spacing={3} sx={{ mb: 5 }}>
                {customerReviews.map((review) => (
                    <Grid size={{ xs: 12, md: 4 }} key={review.name}>
                        <Card
                            elevation={0}
                            sx={{
                                height: "100%",
                                backgroundColor: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: 4,
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                <Rating
                                    value={review.rating}
                                    precision={0.5}
                                    readOnly
                                    size="small"
                                    sx={{ mb: 2 }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{ color: "grey.200", lineHeight: 1.8, mb: 3 }}
                                >
                                    &ldquo;
                                    {locale === "en" ? review.text.en : review.text.id}
                                    &rdquo;
                                </Typography>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                    <Avatar
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            fontSize: "0.875rem",
                                            fontWeight: 700,
                                            backgroundColor: "primary.main",
                                        }}
                                    >
                                        {initials(review.name)}
                                    </Avatar>
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{ fontWeight: 700, color: "white" }}
                                        >
                                            {review.name}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: "grey.400" }}>
                                            {review.origin} &middot;{" "}
                                            {locale === "en" ? review.trip.en : review.trip.id}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Card
                elevation={0}
                sx={{
                    maxWidth: "720px",
                    mx: "auto",
                    backgroundColor: "white",
                    borderRadius: 4,
                }}
            >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 800, color: "#111827", mb: 0.5 }}
                    >
                        {t("formTitle")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {t("formSubtitle")}
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    required
                                    label={t("nameLabel")}
                                    placeholder={t("namePlaceholder")}
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    size="small"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography
                                    variant="body2"
                                    sx={{ fontWeight: 600, color: "#374151", mb: 0.5 }}
                                >
                                    {t("ratingLabel")}
                                </Typography>
                                <Rating
                                    value={rating}
                                    onChange={(_, value) => setRating(value)}
                                    size="large"
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label={t("tripLabel")}
                                    placeholder={t("tripPlaceholder")}
                                    value={trip}
                                    onChange={(event) => setTrip(event.target.value)}
                                    size="small"
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    required
                                    multiline
                                    rows={3}
                                    label={t("messageLabel")}
                                    placeholder={t("messagePlaceholder")}
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                    size="small"
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    startIcon={<SendIcon />}
                                    sx={{
                                        backgroundColor: "#25D366",
                                        color: "white",
                                        fontWeight: 700,
                                        textTransform: "none",
                                        borderRadius: 3,
                                        py: 1.5,
                                        "&:hover": { backgroundColor: "#1DA851" },
                                    }}
                                >
                                    {t("submit")}
                                </Button>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{ display: "block", textAlign: "center", mt: 1.5 }}
                                >
                                    {t("note")}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
