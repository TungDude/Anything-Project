/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'green': '#50e050',
        'cyan': '#46cccc',
        'blue': '#3c8cc8',
        'lightgray': '#949494',
        'black': '#404040',
        'white': '#f7f9f9',
        'red': '#fe3232',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white",
          }
        }
      },
      animation: {
          // typing: "typing 2s steps(20) infinite alternate, blink 1s infinite"
          typing: "typing 6s steps(37), blink 1.4s infinite"
        }
    },
  },
  variants: {
    extend: {
      borderColor: ['hover'],
      backgroundColor: ['hover'], 
    },
  }, 
  plugins: [],
}

