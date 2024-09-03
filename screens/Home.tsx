import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';

// Each screen component in your app is provided with the navigation prop automatically. The prop contains various convenience functions that dispatch navigation actions.
const Home = ({ navigation }: any) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.poppins}>home screen</Text>
      <Button
        title="go to review"
        onPress={() => navigation.navigate('Review')}
      />
    </View>
  );
};

export default Home;
