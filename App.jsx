// *** IMPORT ***
import { registerRootComponent } from "expo";
import { Provider } from 'react-redux';
import { StatusBar } from "expo-status-bar";

// *** OTHER ***
import ProductListScreen from './src/screens/ProductListScreen';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light"></StatusBar>
      <ProductListScreen />
    </Provider>
  );
}
registerRootComponent(App);
