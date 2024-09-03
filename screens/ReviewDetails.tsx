import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

const ReviewDetails = ({ navigation }: any) => {
  return (
    <View style={globalStyles.container}>
      <Text>Review details</Text>
      <Button title="go to home screen" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ReviewDetails;
