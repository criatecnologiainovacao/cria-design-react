<p align="center">
  <img src="https://github.com/criatecnologiainovacao/cria-design-system/blob/master/site/assets/logo.png?raw=true">
</p>

[![Build Status](https://travis-ci.com/criatecnologiainovacao/cria-design-react.svg?branch=master)](https://travis-ci.com/criatecnologiainovacao/cria-design-react)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=criatecnologiainovacao_cria-design-react&metric=alert_status)](https://sonarcloud.io/dashboard?id=criatecnologiainovacao_cria-design-react)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=criatecnologiainovacao_cria-design-react&metric=bugs)](https://sonarcloud.io/dashboard?id=criatecnologiainovacao_cria-design-react)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=criatecnologiainovacao_cria-design-react&metric=coverage)](https://sonarcloud.io/dashboard?id=criatecnologiainovacao_cria-design-react)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=criatecnologiainovacao_cria-design-react&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=criatecnologiainovacao_cria-design-react)

## Guia inicial

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

### Licença
MIT
