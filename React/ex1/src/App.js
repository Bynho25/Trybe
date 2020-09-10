import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['Estudar', 'Trabalhar', 'Ler', 'Jogar', 'Descansar']

const mapFunction = (array) => {
  array.map(list => list)
};

function App() {
  return (task(24));
}

export default App;
