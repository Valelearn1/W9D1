// Il nostro primo Class component, più potente dei functional components

// Component è la classe principale dei class component che viene poi estesa nei NOSTRI class component
import { Component } from "react";

const first = "Latte";
const second = "Caffè";
const third = "Biscotti";

// Il nome della classe determina il nome del component
class List extends Component {
  // la restituzione  del JSX nel class component viene preceduta dal metodo render(), che renderizza il return
  render() {
    return (
      <ul>
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
        {/* gli faremo arrivare qualcosa dal padre, ossia App */}
        <li>{this.props.item}</li>
      </ul>
    );
  }
}

// Solito export
export default List;
