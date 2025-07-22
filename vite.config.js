import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // required for external access (Cloudflare Tunnel)
    port: 5173, // or your preferred port
    allowedHosts: [".trycloudflare.com"], // allow all trycloudflare subdomains
  },
});
