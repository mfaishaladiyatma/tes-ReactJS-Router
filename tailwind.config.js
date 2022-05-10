module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '21': '5.5rem',
        '16px': '16px'
      },
      colors: {
        'nyoba-blue': '#1fb6ff',
        'whitesmoke': '#F1F3FF',
        'background-blue-car': '#0D28A6'
      },
      width: {
        'screen-1/2': '50vw',
        'screen-1/4': '25vw',
        'screen-45vw': '45vw',
        '1000px': '1000px'
      },
      height: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
        '90%': '90%'
      },
      maxWidth: {
        '268px': '268px'
      },
      borderRadius: {
        '60px': '60px'
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
        'helvetica': ['Helvetica']
      },
      boxShadow: {
        'custom-shadow-1': '0px 2px 5px -1px rgba(50, 50, 93, 0.25), 0px 1px 3px -1px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}
