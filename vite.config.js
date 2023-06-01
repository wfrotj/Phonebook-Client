import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Phonebook-Client/",
  plugins: [react()],
  server: {
    proxy: {
      "api/": "https://phonebook-api-17xe.onrender.com",
    },
  },
});
