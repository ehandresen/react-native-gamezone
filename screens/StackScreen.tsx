import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from './ReviewDetails';
import Home from './Home';

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // hide header to prevent double headers
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
        // pass the title dynamically
        //   options={({ route }) => ({
        //     title: route.params?.item.title,
        //   })}
        options={{ title: 'Review Details' }}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
