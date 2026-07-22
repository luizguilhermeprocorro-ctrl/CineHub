# 🎬 CineHub

O **CineHub** é uma aplicação web moderna para exploração de filmes, que consome dados em tempo real da API do TMDB (The Movie Database). O projeto foi desenvolvido com foco em performance, componentização eficiente e excelentes práticas de UI/UX, oferecendo uma experiência fluida e responsiva para o usuário.

---

## 🚀 Funcionalidades Atuais

* **Listagem Dinâmica:** Renderização dos filmes populares diretamente da API assim que a página carrega.
* **Busca em Tempo Real:** Campo de pesquisa textual para encontrar qualquer filme do catálogo.
* **Filtros por Categorias:** Navegação por gêneros (Ação, Comédia, Terror, etc.).
* **Controle de Estado de UI/UX (Feedback Visual):**
  * Botão de categoria ativa destacado visualmente com a cor do tema.
  * Botão "Todos" para resetar os filtros e voltar aos populares facilmente.
  * *Loading State* inteligente que exibe um feedback visual enquanto os dados da API estão sendo carregados de forma assíncrona.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e conceitos:

* **React.js:** Biblioteca principal para construção da interface.
* **JavaScript (ES6+):** Lógica assíncrona, manipulação de arrays (`.map()`, `.filter()`) e operadores ternários para renderização condicional.
* **Hooks do React:** `useState` para controle de estados de componentes e `useEffect` para ciclo de vida e requisições de API.
* **Fetch API:** Consumo assíncrono dos endpoints da API do TMDB.
* **CSS3:** Estilização moderna com propriedades de Layout estruturadas (Flexbox e Grid), efeitos de *hover* e transições suaves.

---

## 📐 Conceitos Arquiteturais Aplicados

Durante o desenvolvimento, foram aplicados padrões recomendados pelo mercado:
* **Lifting State Up (Elevação de Estado):** Passagem de dados e parâmetros de componentes filhos para componentes pais via propriedades (*props*).
* **Renderização Condicional:** Controle de classes CSS dinâmicas baseadas no estado da aplicação.
* **Tratamento de Assincronia:** Sincronização correta do estado de carregamento (*loading*) com a resposta das requisições assíncronas do `fetch`.

---

Link do deploy (https://cine-hub-akh4.vercel.app/)
