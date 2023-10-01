import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <FontAwesome name="circle-o" size={200} color="black" />
      </View>
      <View style={styles.view2}>
        <Text style={styles.textGrow}>GROW</Text>
        <Text style={styles.textGrow}>YOUR BUSINESS</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.textView3}>
          We will help you to grow your business using
        </Text>
        <Text style={styles.textView3}>online server</Text>
      </View>
      <View style={styles.view4}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.textButton}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.textButton}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00CCF9",
  },
  view1: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "20px",
  },
  view2: {
    flex: 1,
    alignItems: "center",
  },
  view3: {
    flex: 1,
    alignItems: "center",
  },
  view4: {
    flex: 2,
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:"25px"
  },
  textGrow: {
    fontSize: "20px",
    fontWeight: "bold", //chữ in đậm
  },
  textView3: {
    fontSize: "",
    fontWeight: "bold", //chữ in đậm
  },
  button: {
    width: "120px",
    height: "45px",
    borderRadius: "5px",
    backgroundColor: "yellow",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: "25px",
  },
  buttonTextContainer:{
    alignItems:"center",
    marginTop:"5px"
  }
});
