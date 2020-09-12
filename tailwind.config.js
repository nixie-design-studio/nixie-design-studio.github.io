module.exports = {
  purge: [],
  theme: {
    container: {
      center: true
    },
    backgroundColor: theme => ({
      'primary': '#333',
      'secondary': '#000',
      'tertiary': '#f13',
      'danger': '#f13'
    }),
    fontFamily: theme => ({
      display: [
        '"Libre Franklin"',
        '"Helvetica Neue"',
        'sans-serif'
      ],
      body: [
        '"Libre Franklin"',
        '"Helvetica Neue"',
        'sans-serif'
      ]
    }),
    textColor: theme => ({
      'primary': '#fff',
      'secondary': '#f13',
      'tertiary': '#333',
      'danger': '#fff'
    }),
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
  },
  variants: {},
  plugins: [],
}
