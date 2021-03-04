import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {shuffleCards} from './src/repo/shuffle_repo';

const App = () => {
  const [cards, setCards] = React.useState([]);
  //Shuffle Cards
  React.useEffect(() => {
    setCards(shuffleCards());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => {}} title="Tap to load cards" color="blue" />
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={item => item.Rank + item.Suit}
      />
    </SafeAreaView>
  );
};
const renderItem = ({item}) => {
  return <Text style={styles.title}>{`${item.Rank} of ${item.Suit}`}</Text>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
