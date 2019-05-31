export default {
  documents: {
    'quick-start': require('./quick-start/index.jsx')
  },
  components: {
    'Básicos': {
      'layout': require('../../src/components/layout/docs'),
      'button': require('../../src/components/button/docs'),
      'nav-menu': require('../../src/components/menu/docs')
    },
    'Dados': {
      'tag': require('../../src/components/tag/docs')
    }
  }
}
