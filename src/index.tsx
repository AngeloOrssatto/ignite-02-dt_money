import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

// criando servidor ficticio para o front end consumir
// com a biblioteca miragejs
createServer({
  routes() {
    this.namespace = 'api'; //cria rotas a partir do localhost:3000/api

    //cria rota método get retornando uma lista de objetos
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Transaction 2',
          amount: 300,
          type: 'withdraw',
          category: 'Bills',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
