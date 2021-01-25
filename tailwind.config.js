module.exports = {
  purge: {
    content: ['./src/**/*.vue'],
    options: {
      safelist: [
        'text-pink-200',
        'text-purple-200',
        'text-red-200',
        'text-green-300',
        'text-pink-300',
        'text-yellow-300',
        'text-indigo-300',
        'text-red-300'
      ]
    }
  },
  theme: {},
  variants: {},
  plugins: []
}
