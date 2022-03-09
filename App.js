
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'
import { Inter_600SemiBold } from '@expo-google-fonts/inter';
import { DancingScript_700Bold } from '@expo-google-fonts/dancing-script';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import { enableScreens } from 'react-native-screens';

import { registerRootComponent } from 'expo';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';


import ShopNavigator from './navigation/navigator';

import productReducer from './store/reducers/product';
import cartReducer from './store/reducers/cart';


enableScreens();

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,


})
const store = createStore(rootReducer)


export default function App() {

  let [fontsLoaded] = useFonts({
    DancingScript_700Bold,
    Inter_600SemiBold,
    OpenSans_400Regular,
    OpenSans_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

registerRootComponent(App);