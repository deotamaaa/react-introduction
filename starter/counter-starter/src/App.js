import shoppingIcon from './assets/shopping-icon.svg';

import './App.css';

function App() {
  return (
    <>
    <nav className="nav">
      <img className="nav-icon" src={shoppingIcon} alt=''/>
      <h1 className="nav-title">Shopping Cart</h1>
    </nav>
    </>
  );
}

export default App;
