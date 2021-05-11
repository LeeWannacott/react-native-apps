import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: '20' },
    { name: "Friend #2", age: '45' },
    { name: "Friend #3", age: '39' },
    { name: "Friend #4", age: '23' },
    { name: "Friend #5", age: '09' },
    { name: "Friend #6", age: '23' },
    { name: "Friend #7", age: '34' },
    { name: "Friend #8" },
  ];
  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
