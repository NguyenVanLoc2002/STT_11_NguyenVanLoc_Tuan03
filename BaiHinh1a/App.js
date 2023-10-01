import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
        locations={[0, 0.5, 0.8, 0.95,1]}
        style={{ flex: 1 }}
      >

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

      <View style={styles.view5}>
        <Text style={styles.textView5}>
          HOW WE WORK?
        </Text>
      </View>
      </LinearGradient>
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
    flex: 4,
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
    justifyContent:"flex-end"
  },
  view4: {
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"flex-start",
    marginTop:"35px"
  },
  view5: {
    flex: 1,
    alignItems: "center",
  },
  textGrow: {
    fontSize: "20px",
    fontWeight: "bold", //chữ in đậm
  },
  textView3: {
    fontSize: "",
    fontWeight: "bold", //chữ in đậm
  },
  textView5: {
    fontSize: "20px",
    fontWeight: "bold", //chữ in đậm
    marginTop:"-20px"
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
