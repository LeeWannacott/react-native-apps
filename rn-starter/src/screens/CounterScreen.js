import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const reducer = (state, action) => {
    // state === {count:number}
    // action === {type:'increment' || 'decrement',payload:1}
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.payload };
      case "decrement":
        return { ...state, count: state.count - action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({type: 'increment', payload:1})
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({type: 'decrement', payload:1})
        }}
      />
      <Text> Current count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
