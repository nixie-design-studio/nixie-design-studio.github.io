module.exports = {
  purge: [],
  theme: {
    container: {
      center: true
    },
    backgroundColor: theme => ({
      'primary': '#fff',
      'secondary': '#ccc',
      'tertiary': '#80f',
      'transparent': 'transparent',
      'danger': '#80f'
    }),
    container: {
      center: true,
      padding: '1rem',
    },
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
    boxShadow: theme => ({
      xs: '0 0 0 1 rgba(0, 0, 0, 0.2)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
      default: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.9)',
      md: '0 0.5rem 1rem rgba(0, 0, 0, 0.75)',
      lg: '0 1rem 2rem rgba(0, 0, 0, 0.5)',
      xl: '0 2rem 4rem rgba(0, 0, 0, 0.75)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none'
    }),
    textColor: theme => ({
      'primary': '#000',
      'secondary': '#80f',
      'tertiary': '#ccc',
      'danger': '#000'
    }),
  },
  variants: {},
  plugins: [],
}
