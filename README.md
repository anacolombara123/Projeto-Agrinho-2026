Aqui está um resumo de todas as funcionalidades integradas ao projeto **Agrinho 2026 - AgroTech Sustentável**, detalhando o que cada parte faz e como elas interagem para criar uma experiência dinâmica e acessível:

---

### 1. Menu Responsivo (Mobile e Desktop)

* **Como funciona:** O menu adapta-se automaticamente ao tamanho da tela do usuário. Em computadores, ele exibe os links de navegação alinhados horizontalmente. Em celulares ou tablets, os links são ocultados e substituídos por um botão de menu estilo "hambúrguer" (三).
* **Interatividade (JavaScript):** Ao clicar no botão hambúrguer, o menu desliza para baixo ou aparece na tela. Para garantir uma boa experiência de navegação, quando o usuário clica em qualquer um dos links para rolar até uma seção, o menu se fecha automaticamente.

### 2. Navegação com Rolagem Suave (Scroll Suave)

* **Como funciona:** Ao clicar nos links do menu (Início, Sustentabilidade, Tecnologia, Impactos ou Quiz), o site não "pula" bruscamente para o conteúdo. Em vez disso, ele desliza suavemente até a seção desejada.
* **Mecanismo:** Essa funcionalidade foi implementada de forma limpa diretamente no CSS através da propriedade `scroll-behavior: smooth`.

### 3. Layout Fluido e Adaptável (Responsividade)

* **Como funciona:** O site utiliza tecnologias modernas de posicionamento (**CSS Flexbox** e **CSS Grid**). Isso significa que os blocos de conteúdo e os *cards* mudam de formato sozinhos.
* **Mecanismo:** Em telas grandes, as informações são exibidas em colunas lado a lado (grades de 2, 3 ou 4 elementos). Em telas menores, essas colunas se empilham verticalmente de forma automática para que o texto nunca fique cortado e a leitura seja confortável em qualquer celular.

### 4. Cards Informativos com Efeito Visual (Hover)

* **Como funciona:** Nas seções de "Sustentabilidade" e "Tecnologia", os conteúdos são organizados em caixas (*cards*). Quando o usuário passa o ponteiro do mouse sobre um desses blocos, o *card* reage visualmente.
* **Mecanismo:** O elemento se eleva levemente (efeito de flutuar) e ganha uma borda colorida na parte superior, destacando onde o usuário está lendo e tornando a navegação mais viva e intuitiva.

### 5. Quiz Interativo AgroTech

Esta é a principal funcionalidade lógica do site, controlada inteiramente pelo JavaScript no arquivo `main.js`:

* **Carregamento Dinâmico:** As perguntas e alternativas não estão fixas no HTML. O JavaScript lê um banco de dados interno e cria os botões na tela em tempo real.
* **Feedback Visual Imediato:** Assim que o estudante clica em uma alternativa, o sistema valida a resposta na hora. Se estiver correta, o botão fica **verde**; se estiver errada, o botão clicado fica **vermelho** e o sistema destaca a alternativa correta em verde para que o usuário aprenda com o erro.
* **Bloqueio de Cliques de Segurança:** Após escolher uma alternativa, todos os outros botões são desativados temporariamente, impedindo que o usuário clique em múltiplas opções na mesma pergunta.
* **Transição Automatizada de Tempo:** O sistema aguarda exatamente 2 segundos após o clique para que o usuário veja o resultado antes de passar automaticamente para a próxima pergunta.
* **Contagem de Pontuação e Tela de Resultados:** Ao final do jogo, a área de perguntas é ocultada e uma tela de pontuação é exibida, mostrando o total de acertos e exibindo uma mensagem motivacional personalizada de acordo com o desempenho do usuário.
* **Sistema de Reinício:** O botão "Refazer Quiz" limpa todas as pontuações e reinicia o jogo do zero sem a necessidade de atualizar a página inteira do navegador.