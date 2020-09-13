module.exports = {
  purge: [],
  theme: {
    container: {
      center: true
    },
    backgroundColor: theme => ({
      'primary': '#333',
      'secondary': '#000',
      'tertiary': '#f04',
      'danger': '#f04'
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
      'secondary': '#f04',
      'tertiary': '#333',
      'danger': '#fff'
    }),
  },
  variants: {},
  plugins: [],
}
