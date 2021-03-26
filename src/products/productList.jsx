import React from "react";
import { products } from '../productsList';



export  class ProductList extends React.Component {
    render() {
        return (
            <div>
                {products.map((element, index) => (
                    <li onClick={()=>this.props.addInCartFunction(element, index)} data-key={index}>{element}</li>
                ))}
            </div>
        )
    }
}
