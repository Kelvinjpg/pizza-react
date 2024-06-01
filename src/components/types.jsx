import React from "react";
import Items from "./items";

class PizzaTypes extends React.component {
    render() {
        return 
            <div className="row">
                <h1 className="text-center">PIZZA TYPES</h1>
                <Items imgSrc ="images/pizza 6.webp" title ="Cheezy pizza" text ="  Some quick example text to build on the card title and make up the
              bulk of the card's content."  />
                <Items imgSrc ="images/pizza 2.webp" title ="Family pizza" text ="Some quick example text to build on the card title and make up the
              bulk of the card's content" /> 
                <Items imgSrc ="images/pizza 5.webp" title ="Peperoni pizza" text ="Some quick example text to build on the card title and make up the
              bulk of the card's content"/>
                <Items imgSrc ="images/pizza 8.webp" title ="Vegetable pizza" text ="Some quick example text to build on the card title and make up the
              bulk of the card's content"/>               

            </div>


        
        
}
}
   
export default PizzaTypes;