import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { Game } from './Home';

const ReviewDetails = ({ navigation, route }: any) => {
  const { item } = route.params;
  const game: Game = item;

  return (
    <View style={globalStyles.container}>
      <Text>{game.title}</Text>
      <Text>{game.body}</Text>
      <Text>rating: {game.rating}</Text>
    </View>
  );
};

export default ReviewDetails;
