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
            'tag': require('../../src/components/tag/docs'),
            'pagination': require('../../src/components/pagination/docs')
        },
        'Navegação': {
            'nav-menu': require('../../src/components/menu/docs'),
            'step-bar': require('../../src/components/step-bar/docs')
        },
        'Formulários': {
            'input': require('../../src/components/input/docs'),
            'form': require('../../src/components/form/docs'),
            'table': require('../../src/components/table/docs'),
            'select': require('../../src/components/select/docs'),
            'radio': require('../../src/components/radio/docs')
        },
        'Notificações': {
            'notification': require('../../src/components/notification/docs'),
            'message-box': require('../../src/components/message-box/docs'),
            'loading': require('../../src/components/loading/docs')
        },
        'Outros': {
            'card': require('../../src/components/card/docs'),
            'popover': require('../../src/components/popover/docs'),
            'modal': require('../../src/components/modal/docs'),
            'tooltip': require('../../src/components/tooltip/docs'),
            'collapse': require('../../src/components/collapse/docs')
        }
    }
}
