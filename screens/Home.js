import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, } from 'react-native';
// import Screen1 from './Screen1';
// import Navigate from './navigate';


export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="Страница1"
          onPress={() =>
            navigation.navigate('Screen1')
          }
        />
        <Button title="Screen2" />
        <Button title="Screen3" />
        <Button title="Screen4" />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 50,
  },
});