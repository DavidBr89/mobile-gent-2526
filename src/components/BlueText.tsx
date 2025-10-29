import { StyleSheet, Text, View, TextProps } from "react-native";
import React, { PropsWithChildren } from "react";

const BlueText = (props: TextProps) => {
  return (
    <Text {...props} style={[styles.blue, props.style]}>
      {props.children}
    </Text>
  );
};

export default BlueText;

const styles = StyleSheet.create({
  blue: {
    color: "blue",
    // height: 100,
  },
});
