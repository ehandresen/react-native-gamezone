import { StyleSheet, View } from 'react-native';

type CardProp = {
  children: React.ReactNode; // This is the most general type that can represent anything that can be rendered in React, including elements, strings, numbers, and null.
};

const Card = ({ children }: CardProp) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});

export default Card;
