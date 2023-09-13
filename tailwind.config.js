/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg_img": "bg-[url('https://static2.vieon.vn/voting/static/media/bar-vote-list.81f7d35d2e63a96467ef.png')]"
      }
    },
  },
  plugins: [],
}

