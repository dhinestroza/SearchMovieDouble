/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1a233d', // Nombre de la clase personalizada
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // Agrega la fuente Poppins
      },
      fontWeight: {
        'semibold': 600, // Asegúrate de que el peso "semibold" esté definido
      }
    },
  },
  plugins: [],
}

