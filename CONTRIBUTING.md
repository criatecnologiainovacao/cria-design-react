# Cria Design React Guia de Contribuição

Estamos gratos que você se interessou em contribuir ao `cria-design-react`.
Para garantir que o projeto se mantenha sem muitos custos, temos algumas convenções e diretrizes.

## Issues

- Antes de enviar uma issue, certifique-se se já não existe uma issue similar.

- O título da issue deve ser escrita como `[Nome do Componente]: Descrição da Issue` (ex.: `Button: xxx bug`)

- Por favor especifique qual versão do `cria-design-react` você está usando, e outras informações relacionadas.

## Pull Request

- Fork este repositório. Não crie branches aqui.

- Caso o PR referencie a uma nova [Issue](#issues), crie a issue antes.

- Certifique-se que seu pull request será mergeada na `dev`.

- O nome do PR deve ser formatada como `<tipo>(Nome do Componente): Info sobre o PR` (ex.: `fix(Button): Fix xxx bug`). [Mais informações](http://www.conventionalcommits.org).

- Certifique-se que as mudanças passem no `npm test`, `npm run lint` e `npm run build`.

- Dê **Rebase** em seus commits.

> Obs.: Não serão aceitos PR sem testes ou com a documentação desatualizada.

## Desenvolvimento

> **OBS.:** Este projeto usa como modelo de estilo e comportamento os componentes desenvolvidos por nossos designers. Logo, modificações ou novos componentes que fujam desse modelo não serão aceitos.

As pastas principais do projeto são:

```
libs  -> Componentes e funções ultilitárias
site  -> Onde encontra-se o site com a documentação dos componentes
src   -> O desenvolvimento dos componentes em si
theme -> Os estilos dos componentes
```

### Documentação

É necessário atualizar ou adicionar a documentação do componente modificado ou criado.
Pros casos de atualização, cada componente possui em seu diretório uma pasta `docs`, onde encontra-se sua documentação.

Para adicionar uma documentação, a mesma deve encontrar-se na mesma estrutura dos demais componentes. E para adicioná-la à página:

1. Dentro do diretório `site`, em `pages > index.jsx` inclua o caminho da documentação de seu componente.

2. Em `locales > pt-BR.js` na subseção `page` inclua a chave e o nome de seu componente _(Este nome será exibido no site e a chave deve ser o mesmo valor incluído na etapa anterior)_.

Nos casos da documentação não ser de um componente, a mesma deve ter um diretório em `site > pages`, e incluído como as demais.

Para executar o site com a documentação digite no terminal `npm run start`, isso o abrirá em `http://localhost:3000`.

### Construindo os componentes

Para o desenvolvimento dos componentes, utilizamos o **Storybook**. Para executá-lo digite no terminal `npm run storybook`. Que abrirá o storybook em `http://localhost:6006`.

O mesmo exibirá um overview de todos os componentes já desenvolvidos e seus diversos estados e comportamentos.

Espera-se os seguintes arquivos no diretório do componente:

```
/docs   -> Diretório com a documentação do componente
  |
  +-- Componente.md           -> A documentação do componente
  +-- index.jsx               -> O entrypoint da documentação
Componente.jsx                -> O componente em si
Componente.stories.jsx        -> O entrypoint do Storybook
Componente.test.jsx           -> Os testes unitários do componente
index.js                      -> A raiz do componente. Facilitador para imports
```

Cada estado, configuração ou comportamento do componente deve ser testado. Para isso, usamos os testes unitários para cobrir os mesmos. Para ajudar no feedback visual, bem como servir de subsídio para os testes snapshot, possuímos o **Storybook**. Nele deve-se adicionar, como nos testes unitários, cada estado, configuração ou comportamento do seu componente.

Ao finalizar, e ao rodar `npm test`, será lançado erros pois os testes de snapshot ainda não foram escritos ou foram modificados.
Nos casos de modificação, certifique-se que são as esperadas, e em caso afirmativo rode `npm test -- --u`, isso atualizará os testes de snapshot, bem como escreverá os testes não escritos.

### Temas

O tema é um projeto auto-contido, portanto possui um package.json à parte. Usando o `gulp`, o SCSS usado para criar os componentes são compilados em CSS.

Cada componente possui seu próprio estilo SCSS, e usamos o modelo de escrita BEM para compor os estilos. Todos os novos estilos SCSS devem ser incluídos no `index.scss`.

Os temas são à parte dos componentes, portanto não são importados no mesmo. Entretanto, como disponibilizamos apenas um tema nesse projeto, tal tema é incluso automaticamente na página de documentação bem como nas configurações do storybook, não sendo necessário incluí-los na mão.