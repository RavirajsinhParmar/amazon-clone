import React from "react";
import "./Home.css";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Products
            id="1234"
            title={
              "the lean startup: how constant innovation creates redically successful businesses paperback"
            }
            img="https://th.bing.com/th/id/OIP.negu8toIAIp0qjr77J88-QHaLM?w=118&h=180&c=7&r=0&o=5&pid=1.7"
            price={29.99}
            ratings={5}
          />
          <Products
            id="2345"
            title={
              "Kenwood kMix stand for baking, stylish kitechen mixer with k-beater, dough hook and whisk, 5 litre glass bowl"
            }
            img="https://www.world-import.com/images/P/kMix%20KMX50.jpg"
            price={229.99}
            ratings={4}
          />
        </div>
        <div className="home_row">
          <Products
            id="3534"
            title={"amazon Echo | smart speaker with alexa charcoal fabric"}
            img="https://th.bing.com/th/id/OIP.fDYjLZ7b4hyEa4l6FByYvAHaFH?w=250&h=180&c=7&r=0&o=5&pid=1.7"
            price={98.99}
            ratings={4}
          />
          <Products
            id="4987"
            title={"samsung 49' curved LED gaming monitor"}
            img="https://th.bing.com/th/id/OIP.zdEw-czELj9_V6nlKWSSqwHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7"
            price={199.99}
            ratings={4}
          />
          <Products
            id="5234"
            title={"Apple ipad pro (12-inch, wi-fi, 128GB) - silver"}
            img="https://th.bing.com/th/id/OIP.3YLSHt82cpHX_ci2_p8sqQD6D6?w=170&h=180&c=7&r=0&o=5&pid=1.7"
            price={229.99}
            ratings={4}
          />
        </div>
        <div className="home_row">
          <Products
            id="6095"
            title={"Apple iMAC pro (42-inch, wi-fi, 128GB) - silver"}
            img="https://th.bing.com/th/id/OIP.bQ-EnDCpWB19uezDEAqjbwHaG_?w=215&h=202&c=7&r=0&o=5&pid=1.7"
            price={729.99}
            ratings={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
