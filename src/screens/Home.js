import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, } from 'react-native';


export const Home = ({ navigation }) => {
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
    marginHorizontal: 100,
  },
});