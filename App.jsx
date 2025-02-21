// *** IMPORT ***
import { registerRootComponent } from "expo";
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

// *** OTHER ***
import ProductListScreen from './src/screens/ProductListScreen';

export default function App() {
  return (
    <Provider store={store}>
      <ProductListScreen />
    </Provider>
  );
}
registerRootComponent(App);
