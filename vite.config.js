import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  base: "/",
});
