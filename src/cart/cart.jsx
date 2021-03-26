import React from "react";

export class Cart extends React.Component {
    render() {
        return (
            <div>
                {this.props.cartProducts.map((element, index) => (
                    <li onClick={() => this.props.removeFromCart(index)} data-key={index}>{element}</li>
                ))}
            </div>
        )
    }
}