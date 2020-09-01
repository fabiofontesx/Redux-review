
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Repositório utilizado no aprendizado do básico do Redux com React.
Baseado nos vídeos 
[Desvendando Redux na Prática](https://www.youtube.com/watch?v=u99tNt3TZf8)
[Redux // Dicionário do Programador](https://www.youtube.com/watch?v=kAOzxQp6AKE)
### Resumo
O redux é um container de estados globais para a aplicação que pode ser utilizado tanto no client quanto no server

### Conceitos
 - **Store**:  Container que guarda de forma centralizada todo o estado da aplicação, o store é imutável, ou seja a cada ação realizada, devolve-se um novo estado para a aplicação
 - **Actions**: Ações disparadas da aplicação para o store, são criadas através das ActionCreators e são a unica forma de acionar uma mudança de estado no estore
 - **Reducers** : Especificam como o estado da aplicação será alterado de acordo com a Action que foi disparada para o store.

### Os 3 Principios
- O store é a unica fonte de poder e verdade! Todos os estados estarão concentrados somente dentro do store
- Os estados são apenas leitura, e só podem ser alterados através das Actions (Criando um novo estado e devolvendo esse novo estado).
- As alterações são feitas através de funções puras (Reducers, que pega o estado anterior e devolve um novo estado)

