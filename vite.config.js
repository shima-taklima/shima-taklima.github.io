import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'portfolio' with your actual GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: "/shima-taklima.github.io/",
});
