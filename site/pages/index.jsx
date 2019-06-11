export default {
    documents: {
        'quick-start': require('./quick-start/index.jsx')
    },
    components: {
        'Básicos': {
            'layout': require('../../src/components/layout/docs'),
            'container': require('../../src/components/container/docs'),
            'button': require('../../src/components/button/docs'),
            'breadcrumb': require('../../src/components/breadcrumb/docs')
        },
        'Dados': {
            'tag': require('../../src/components/tag/docs')
        },
        'Navegação': {
            'nav-menu': require('../../src/components/menu/docs'),
            'step-bar': require('../../src/components/step-bar/docs')
        },
        'Formulários': {
            'input': require('../../src/components/input/docs'),
            'form': require('../../src/components/form/docs')
        },
        'Outros': {
            'card': require('../../src/components/card/docs'),
            'modal': require('../../src/components/modal/docs')
        }
    }
}
