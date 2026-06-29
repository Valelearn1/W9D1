// App è il componente padre, l'unico chiamato da main.JSX, che avvia la renderizzazione dei componenti figli
// UN FILE JSX CHE COMINCIA PER MAIUSCOLA O SEGUE LA NOMENCLATURA CAPITAL CASE O PASCAL CASE È PER DEFINIZIONE UN COMPONENTE REACT.
// In entrambe le tipologie di components, con le parentesi graffe, interpoliamo valori, variabili, JS in generale nella struttura html

import "./App.css";
// I componenti vanno importati per essere usati da un component padre
import List from "./assets/components/List";
import Title from "./assets/components/Title";

const App = function () {
  return (
    <>
      <Title name="Il corso FS0622IT" />

      <List item="Nutella" />
    </>
  );
};
export default App;
