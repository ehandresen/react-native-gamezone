import { FlatList, TouchableOpacity, Text, View, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import { useState } from 'react';
import Card from '../shared/Card';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Form from './Form';

export type Game = {
  title: string;
  rating: number;
  body: string;
  key: string;
};

// The navigation prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).
const Home = ({ navigation }: any) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
      <Modal
        visible={isModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setIsModalOpen(false)}
      >
        <View style={globalStyles.modalContent}>
          <AntDesign
            name="close"
            size={24}
            color="black"
            onPress={() => setIsModalOpen(false)}
            style={globalStyles.modalToggle}
          />
          <Form />
        </View>
      </Modal>

      <FontAwesome6
        name="add"
        size={24}
        onPress={() => setIsModalOpen(true)}
        style={globalStyles.modalToggle}
      />

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
