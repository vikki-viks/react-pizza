import React from 'react';
import { Route } from 'react-router';
import { Header, PizzaBlock } from './components';
import { Home, Cart } from './pages';
import PropTypes from 'prop-types';
import { setPizzas } from './redux/actions/pizzas';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function App({ items }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => dispatch(setPizzas(data.pizzas)));
  }, []);
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <Route
          path="/"
          render={() => <Home items={items}></Home>}
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

// export default connect(
//   (state) => {
//     return {
//       items: state.pizzas.items,
//       filters: state.filters,
//     };
//   },
//   (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items)),
//     };
//   }
// )(App);
