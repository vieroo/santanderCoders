import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0 };
    console.log("Construindo a classe Counter...");
  }

  // Termos didaticos, componentWillMount esta sendo descontinuado pelo React
  UNSAFE_componentWillMount() {
    console.log("O nosso componetne Contador será montado");
  }

  componentDidMount() {
    console.log("O componente foi MONTADO");

    document.addEventListener("scroll", this.consoleScroll());
  }

  // Metodos chamado sempre que uma prop ou estado for atualizado
  shouldComponentUpdate() {
    if (this.state.contador === 2) return false;
    return true;
  }

  // Termos didaticos, componenteWillUpdate esta sendo descontinuado pelo React
  UNSAFE_componentWillUpdate() {
    console.log("O componente sera ATUALIZADO");
  }

  componentDidUpdate() {
    console.log("O componente FOI ATUALIZADO");
  }

  componentWillUnmount() {
    console.log("O componente vai DESMONTAR");

    document.removeEventListener("scroll", this.consoleScroll());
  }

  consoleScroll() {
    console.log("Rolando a pagina.");
  }

  render() {
    console.log("Renderizando o componente Counter...");
    return (
      <div>
        <h1>{this.state.contador}</h1>

        <button
          onClick={() => {
            this.setState({ contador: this.state.contador - 1 });
          }}
        >
          Diminuir
        </button>
        <button
          onClick={() => {
            this.setState({ contador: this.state.contador + 1 });
          }}
        >
          Aumentar
        </button>
      </div>
    );
  }
}
