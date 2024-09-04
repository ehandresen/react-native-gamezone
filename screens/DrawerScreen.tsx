import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import About from './About';
import ReviewDetails from './ReviewDetails';
import StackScreen from './StackScreen';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'poppinsBold',
          },
        }}
      >
        <Drawer.Screen
          name="StackScreen"
          component={StackScreen}
          options={{ title: 'GameZone' }}
        />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerScreen;
