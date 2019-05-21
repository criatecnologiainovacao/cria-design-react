## Começo rápido

### Instalação

A instalação com o npm é recomendada e funciona perfeitamente com o `webpack`.

```shell
npm i cria-ui-react --save-dev
```

### Tema

Para instalar nosso tema padrão, temos duas formas:

#### Sass/Scss

Nosso tema é escrito em `SCSS`. Se seu projeto também usa `SCSS`, você pode editar as variáveeis diretamente.
Crie um novo estilo, como `cria-theme.scss`:
```scss
/* cor primária do tema */
$--color-primary: indigo;

/* icon font path, required */
$--font-path: '~element-ui/theme/src/fonts';

@import "~cria-ui-react/theme/src/index.scss";
```

Depois instale na sua aplicação:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './cria-theme.scss'


ReactDOM.render(<App/>, document.getElementById('app'));

```

### Importar componente

No arquivo que você deseja usar o componente, importe-o:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'cria-ui-react';

export default class QuickStart extends React.Component {
    
    render() {
        <Button loading>Update</Button>
    }
}

```
