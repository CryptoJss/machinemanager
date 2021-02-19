import React from 'react';
import { Provider } from "react-redux";
import Menu from './components/Menu';
import FoodSelected from './components/FoodSelected';
import store from './store';
import "./assets/style.scss"


const App = () => (
  <Provider store={store}>
    <main >
      <h1>Machine Manager</h1>
      <Menu />
      <FoodSelected />
    </main>
  </Provider>
)

export default App;
