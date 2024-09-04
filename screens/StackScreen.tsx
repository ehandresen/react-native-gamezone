import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ReviewDetails from './ReviewDetails';
import Home from './Home';

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'poppinsBold',
          },
          contentStyle: {
            backgroundColor: '#FFE3D6',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'GameZone' }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{ title: 'Review Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreen;
