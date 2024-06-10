import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import article1 from "../src/assets/article1.jpg";
import article2 from "../src/assets/article2.jpg";
import "./styles/App.css";
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Counter />
        {/* <section id="articles">
          <Article
            title="Designing Dashboards"
            img={article1}
            provider="NASA"
          />
          <Article
            title="Vibrant Portraits 2020"
            img={article2}
            provider="SpaceNews"
          />
          <Article
            title="36 Days of Malayalam Type"
            img={article1}
            provider="Space Flight Now"
          />
          <Article
            title="Designing Dashboards"
            img={article2}
            provider="NASA"
          />
        </section> */}
      </>
    );
  }
}

export default App;
