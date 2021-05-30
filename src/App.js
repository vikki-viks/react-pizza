import React from 'react';
import { Route } from 'react-router';
import { Header, PizzaBlock } from './components';
import { Home, Cart } from './pages';
import PropTypes from 'prop-types';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <Route
          path="/"
          render={() => <Home items={pizzas}></Home>}
          exact
        ></Route>
        <Route path="/cart" component={Cart} exact></Route>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
};

PizzaBlock.defaultProps = {
  type: [],
  sizes: [],
};

export default App;
