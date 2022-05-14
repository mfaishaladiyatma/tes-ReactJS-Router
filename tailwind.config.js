const { resolvePath } = require("react-router-dom");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:  {
        '13': '3.25rem', //SPACING UNTUK margin, bisa juga untuk top/left dkk
        '21': '5.5rem',
        '16px': '16px',
        '7rem': '7rem'
      }, 
      colors: {
        'nyoba-blue': '#1fb6ff', //untuk colors bg ataupun borderColor atau text color
        'whitesmoke': '#F1F3FF',
        'background-blue-car': '#0D28A6',
        'border-gray': '#D0D0D0',
        'gray': '#8A8A8A'
      },
      width: {
        'screen-1/2': '50vw',
        'screen-3/4': '75vw',
        'screen-1/4': '25vw',
        'screen-45vw': '45vw',
        '1000px': '1000px',
        '75rem': '75rem',
        '80rem': '80rem',
        '180px': '180px'
      },
      height: {
        'screen-1/2': '50vh',
        'screen-1/4': '25vh',
        'screen-3/4': '75vh',
        'screen-90vh': '90vh',
        'screen-60vh': '60vh',
        'screen-150vh': '150vh',
        '90%': '90%',
        '100px': '100px',
        '60px': '60px',
        '780px': '780px'
      },
      maxWidth: {
        '268px': '268px',
        '80rem': '80rem',
        '60rem': '60rem',
        '90%': '90%',
      },
      maxHeight: {
        '290px': '290px',
      },
      borderRadius: {
        '60px': '60px', 
        '10px': '10px'
      },
      fontSize: {
        'heading-1': ['36px', {
          lineHeight: '56px',
        }],
        'paragraph-1': ['14px', {
          lineHeight: '20px',
        }],
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'sans-serif'], //untuk custom font
        rubik: ['Rubik', 'sans-serif']
      },
      boxShadow: {
        'custom-shadow-1': '0px 2px 5px -1px rgba(50, 50, 93, 0.25), 0px 1px 3px -1px rgba(0, 0, 0, 0.3)',
        'custom-shadow-searchBar': '0px 0px 10px rgba(0, 0, 0, 0.15)'
      },
      inset: {
        '7rem': '7rem',//biasanya khusus untuk top, left,right
      },
      gridTemplateColumns:{
        'custom-3': '1fr 150px 1fr'
      }
    },
  },
  plugins: [],
}
