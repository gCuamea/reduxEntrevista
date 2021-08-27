import { Provider } from 'react-redux';
import { Login } from './Login';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
