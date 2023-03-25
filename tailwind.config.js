module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '128': '460px',
      },
      height: {
        '128': '400px',
      },
      colors: {
        ais: {
          black: '#1F1E1E',
          'blue-gray': '#E1E8ED',
          'light-blue': '#11BBFD',
          'dark-blue': '#4565B8',
          'light-gray': '#f5f5f5',
          'dark-gray': '#444444',
          'indigo': '#24314D',
          'hover-indigo': '#374b75',
          white: '#fafafa',
          navy: '#202042',
          gray: '#B8B8B8',
        },
      },
      scale: {
        85: '0.85',
        300: '3',
        400: '4',
      },
      margin: {
        73: '18.75rem',
      },
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      sans: ['CooperHewitt', 'sans-serif'],
      cairo: ['Cairo', 'sans-serif'],
      hind: ['Hind Siliguri'],
      lucidity: ['Lucidity'],
    },
    css: {
      container: {
        'display': 'flex',
      },
      card: {
        'position': 'relative',
        'width': '200px',
        'height': '300px',
        'margin': '10px',
        'perspective': '1000px',
        front: {
          'position': 'absolute',
          'width': '100%',
          'height': '100%',
          'backface-visibility': 'hidden',
        },
        back: {
          'position': 'absolute',
          'width': '100%',
          'height': '100%',
          'backface-visibility': 'hidden',
        },
        front: {
          //'transform': 'rotateX(0deg)',
        },
        back: {
          //'transform': 'rotateX(0deg)',
          'filter': 'invert(100%)',
        },
        flip: {
          //'transform': 'rotateX(0deg)',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
