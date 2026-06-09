import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Deep frozen-night backgrounds
        night: {
          950: "#060d16",
          900: "#0a1422",
          800: "#0f1d30",
          700: "#16293f",
          600: "#1e3550",
          500: "#264362",
        },
        // Ice blue — primary accent
        frost: {
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
        // Cyan — glow / highlight details
        ice: {
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
        },
        // Snow whites
        snow: {
          DEFAULT: "#eef6ff",
          muted: "#b9cadd",
          dim: "#7e94ac",
        },
        // Dark wood (plaques / structures)
        bark: {
          950: "#160e09",
          900: "#241811",
          800: "#33241a",
          700: "#473122",
          600: "#5a3f2c",
        },
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "ui-monospace", "SFMono-Regular", "monospace"],
        body: ["var(--font-body)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        pixel: "4px 4px 0 0 rgba(0,0,0,0.45)",
        "pixel-sm": "2px 2px 0 0 rgba(0,0,0,0.45)",
        bevel:
          "inset 2px 2px 0 0 rgba(255,255,255,0.08), inset -2px -2px 0 0 rgba(0,0,0,0.45)",
        "frost-glow": "0 0 18px rgba(56,189,248,0.35)",
        "ice-glow": "0 0 24px rgba(34,211,238,0.45)",
      },
      keyframes: {
        snowfall: {
          "0%": { transform: "translateY(-10vh) translateX(0)", opacity: "0" },
          "10%": { opacity: "0.9" },
          "90%": { opacity: "0.9" },
          "100%": {
            transform: "translateY(110vh) translateX(var(--drift, 0px))",
            opacity: "0",
          },
        },
        "ice-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(56,189,248,0)", opacity: "0.9" },
          "50%": { boxShadow: "0 0 18px 0 rgba(56,189,248,0.5)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(-8%, 0)", opacity: "0.45" },
          "50%": { transform: "translate(8%, -4%)", opacity: "0.75" },
        },
      },
      animation: {
        snowfall: "snowfall linear infinite",
        "ice-glow": "ice-glow 3.5s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        aurora: "aurora 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
