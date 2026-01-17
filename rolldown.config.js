export default {
  input: ['src/index.js'],
  output: {
    format: 'cjs',
    preserveModules: true,
  },
  external: ['vue-eslint-parser', 'rolldown']
}
