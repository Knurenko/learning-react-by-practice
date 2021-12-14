import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { fetchTest } from "../redux/testAsync/asyncAction/asyncAction";

export const test = () => {
  const [data, setData] = useState([]);

  const dataoftest = useSelector((state) => state.async);
  const dispatch = useDispatch();

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      }
      <View>
        <Button
          onPress={() => {
            dispatch(fetchTest()), console.log(dataoftest.movies);
          }}
        >
          test
        </Button>
        <FlatList
          data={dataoftest.movies}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </View>
    </View>
  );
};
