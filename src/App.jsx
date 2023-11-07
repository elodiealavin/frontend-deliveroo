import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./assets/deliveroo-logo.png";
import picture from "./assets/header-image.png";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("je suis dans mon useEffect");
    const fetchData = async () => {
      if (data.length === 0) {
        const response = await axios.get("http://localhost:3000/");
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p> Chargement ...</p>
  ) : (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="container-header">
          <div className="restaurant-info">
            <h1>Le Pain Quotidien - Montorgueil</h1>
            <p>
              Profitez de chaque plaisir de la vie quotidienne. Le Pain
              Quotidien propose des ingrédients simples et sains, du bon pain,
              des fruits et des légumes frais et de saison issus de
              l’agriculture biologique.
            </p>
          </div>
          <img src={picture} alt="" />
        </div>
      </header>

      <main className="">
        <div className="menu">
          {data.categories.map((elem) => {
            // console.log(elem);

            return (
              <section className="category" key={elem.name}>
                <h2>{elem.name}</h2>
                {elem.meals.map((meal) => {
                  return (
                    <>
                      <article className="name" key={meal.title}>
                        <h3>{meal.title}</h3>
                      </article>

                      <div className="description">
                        <p>{meal.description}</p>
                      </div>
                      <div className="price-picture">
                        <span>{meal.price} €</span>
                        {meal.picture && <img src={meal.picture} alt="" />}
                      </div>
                    </>
                  );
                })}
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
