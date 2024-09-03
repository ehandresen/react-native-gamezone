import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import About from './screens/About';

import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    poppins: require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    poppinsBold: require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    nunito: require('./assets/fonts/Nunito/static/Nunito-Regular.ttf'),
  });

  // •	The splash screen is the initial screen that users see when they launch an app. It typically shows a logo or branding while the app is loading.
  // •	By default, the splash screen may disappear too early, before the fonts or other resources are fully loaded, which can lead to a jarring experience if the UI suddenly changes or displays incorrectly.
  // •	To avoid this, the code waits until the fonts are fully loaded before hiding the splash screen and rendering the main UI.
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

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
