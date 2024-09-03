import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.poppins}>testing the new font</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 42,
  },
  poppins: {
    fontFamily: 'poppins',
    fontSize: 24,
  },
  nunito: {
    fontFamily: 'nunito',
    fontSize: 24,
  },
});

export default Home;
