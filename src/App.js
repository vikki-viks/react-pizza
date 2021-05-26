import { Route } from 'react-router';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <Route path="/" component={Home} exact></Route>
        <Route path="/cart" component={Cart} exact></Route>
      </div>
    </div>
  );
}

export default App;
