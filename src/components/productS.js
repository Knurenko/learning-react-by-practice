// import React from "react";
// import {
//   Text,
//   SafeAreaView,
//   FlatList,
//   TouchableOpacity,
//   ScrollView,
//   View,
//   StyleSheet
// } from "react-native";

// import {namesScreens} from "../navigation/namesScreens"

// import { useSelector } from "react-redux";

// export const ProductS = ({navigation}) => {
//   const products = useSelector((state) => state.product);

//   const Item = ({ item }) => (            // применяем touchbleOpacity для клика на item
//     <TouchableOpacity
//     onPress = {() => {navigation.navigate(namesScreens.productInfoScreen, {item:item})}}> 
//       <View style={styles.item}>
//         <Text style={styles.title}>{item.title}</Text>    
//       </View>
//     </TouchableOpacity>
//   );

//   const renderItem = ({ item }) => {
//     return <Item item={item} />;
//   };

//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <FlatList
//           data={products}
//           keyExtractor={(item) => item.id} // извлекаем по id
//           renderItem={renderItem} // рендерим renderItem с Item 
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: "pink",
//   },
//   title: {
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: "#20232a",
//     borderRadius: 6,
//     backgroundColor: "#61dafb",
//     color: "#20232a",
//     textAlign: "center",
//     fontSize: 15,
//     fontWeight: "bold",
//   },
// });
