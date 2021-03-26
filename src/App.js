import React from "react";
import './App.css';
import { ProductList } from './products/productList';
import { Cart } from  './cart/cart';


class App extends React.Component {
    constructor(a) {
        super(a);
        this.addInCart = this.addInCart.bind(this);
    }

    state = {
        cart:[],
    }

    addInCart(product) {
        const cart = [...this.state.cart, product];
        this.setState({cart:cart});
    }

    remove = (id) => {
        const cart = [...this.state.cart];
        cart.splice(id, 1);
        this.setState({cart:cart,});
    }

    render() {
        return (
            <body>
            <ul className={'productList'}>
                <ProductList addInCartFunction={this.addInCart}/>
            </ul>
            <ul className={'cart'}>
                <Cart cartProducts={this.state.cart} removeFromCart={this.remove}/>
            </ul>
            </body>
        )
    }
}

export default App;
