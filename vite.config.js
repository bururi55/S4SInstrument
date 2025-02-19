import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/S4SInstrument/", // Укажите имя вашего репозитория
  plugins: [react()],
});
