// import Home from './Component/Home';
import Home from './Component/Home';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Logo } from './Component/Logo';

function App() {
  return (
      <Provider store={store}> 
        <Logo />
        <Home />
        </Provider>
  );
}

export default App;
