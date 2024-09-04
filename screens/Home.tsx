import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { useState } from 'react';
import Card from '../shared/Card';

export type Game = {
  title: string;
  rating: number;
  body: string;
  key: string;
};

// The navigation prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).
const Home = ({ navigation }: any) => {
  const [reviews, setReviews] = useState<Game[]>([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', { item })}
          >
            <Card>
              <Text style={globalStyles.poppins}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
