import React from 'react';
import { Route } from 'react-router';
import { Header } from './components';
import { Home, Cart } from './pages';

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

export default App;
