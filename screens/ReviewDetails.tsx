import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import { Game } from './Home';
import Card from '../shared/Card';

const ReviewDetails = ({ navigation, route }: any) => {
  const { item } = route.params;
  const game: Game = item;

  // dynamically display image depending on the rating
  const getRatingImage = (rating: number) => {
    switch (rating) {
      case 1:
        return require('../assets/rating-1.png');
      case 2:
        return require('../assets/rating-2.png');
      case 3:
        return require('../assets/rating-3.png');
      case 4:
        return require('../assets/rating-4.png');
      case 5:
        return require('../assets/rating-5.png');
    }
  };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={{ fontSize: 18, fontFamily: 'poppinsBold' }}>
          {game.title}
        </Text>
        <Text>{game.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={getRatingImage(game.rating)} />
        </View>
        <Button title="go back" onPress={() => navigation.goBack()} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default ReviewDetails;
