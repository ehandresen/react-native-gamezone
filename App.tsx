import Home from './pages/Home';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    poppins: require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    poppinsBold: require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    nunito: require('./assets/fonts/Nunito/static/Nunito-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return <Home />;
}
