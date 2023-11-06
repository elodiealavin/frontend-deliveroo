import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./assets/deliveroo-logo.png";
import header from "./assets/header-image.png";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log("je suis dans mon useEffect");
    const fetchData = async () => {
      if (data.length === 0) {
        const response = await axios.get("http://localhost:3000/");
        console.log(response.data);
        setData(response.data);
      }
    };
    fetchData();
  }, [data]);

  return (
    <>
      <header>
        <div className="logo">{/* <img src={logo} alt="logo" /> */}</div>
        <div className="info-restaurant">
          <div className="info-center">
            <h1>Le Pain Quotidien - Montorgueil</h1>
            <p>
              Profitez de chaque plaisir de la vie quotidienne. Le Pain
              Quotidien propose des ingrédients simples et sains, du bon pain,
              des fruits et des légumes frais et de saison issus de
              l’agriculture biologique.
            </p>
            <div>{/* <img src={header} alt="" /> */}</div>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="content-menu">
          {data.categories.map((elem) => {
            console.log(elem);
            return (
              <section key={elem.categories}>
                <h2>{elem.categories}</h2>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
