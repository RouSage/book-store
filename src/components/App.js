import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Cart from './Cart';
import Checkout from './Checkout';
import Product from './Product';

const PRODUCTS = [
  {
    id: 0,
    src: '/assets/images/proexpress-cover.jpg',
    title: 'Pro Express.js',
    url: 'http://amzn.to/1D6qiqk',
  },
  {
    id: 1,
    src: '/assets/images/practicalnode-cover.jpeg',
    title: 'Practical Node.js',
    url: 'http://amzn.to/NuQ0fM',
  },
  {
    id: 2,
    src: '/assets/images/expressapiref-cover.jpg',
    title: 'Express API Reference',
    url: 'http://amzn.to/1xcHanf',
  },
  {
    id: 3,
    src: '/assets/images/reactquickly-cover.jpg',
    title: 'React Quickly',
    url: 'https://www.manning.com/books/react-quickly',
  },
  {
    id: 4,
    src: '/assets/images/fullstack-cover.png',
    title: 'Full Stack JavaScript',
    url: 'http://www.apress.com/9781484217504',
  },
];

const cartItems = {};
const addToCart = (id) => {
  if (cartItems[id]) cartItems[id] += 1;
  else cartItems[id] = 1;
};

const App = () => {
  return (
    <>
      <Layout>
        <Route exact path='/'>
          <Home products={PRODUCTS} />
        </Route>
        <Route path='/products/:id'>
          <Product addToCart={addToCart} products={PRODUCTS} />
        </Route>
        <Route path='/cart'>
          <Cart cartItems={cartItems} products={PRODUCTS} />
        </Route>
        <Route path='/checkout'>
          <Checkout cartItems={cartItems} products={PRODUCTS} />
        </Route>
      </Layout>
    </>
  );
};

export default App;
