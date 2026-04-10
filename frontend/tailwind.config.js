/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gastro: {
          light: '#e0f2fe', // Azul suave para o fundo
          primary: '#0369a1', // Azul marinho clínico para botões
          accent: '#10b981', // Verde vitalidade para indicadores de melhora
        }
      }
    },
  },
  plugins: [],
}