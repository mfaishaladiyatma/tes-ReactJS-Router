module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif']
    },
    extend: {
      spacing: {
        '13': '3.25rem',
        '21': '5.5rem',
        '16px': '16px',
        '7rem': '7rem'
      },
      colors: {
        'nyoba-blue': '#1fb6ff',
        'whitesmoke': '#F1F3FF',
        'background-blue-car': '#0D28A6',
        'border-gray': '#D0D0D0'
      },
      width: {
        'screen-1/2': '50vw',
        'screen-3/4': '75vw',
        'screen-1/4': '25vw',
        'screen-45vw': '45vw',
        '1000px': '1000px',
        '75rem': '75rem',
        '180px': '180px'
      },
      height: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
        'screen-60vh': '60vh',
        '90%': '90%',
        '100px': '100px'
      },
      maxWidth: {
        '268px': '268px'
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
        'helvetica': ['Helvetica', 'sans-serif']
      },
      boxShadow: {
        'custom-shadow-1': '0px 2px 5px -1px rgba(50, 50, 93, 0.25), 0px 1px 3px -1px rgba(0, 0, 0, 0.3)',
        'custom-shadow-searchBar': '0px 0px 10px rgba(0, 0, 0, 0.15)'
      },
      inset: {
        '7rem': '7rem'
      }
    },
  },
  plugins: [],
}
