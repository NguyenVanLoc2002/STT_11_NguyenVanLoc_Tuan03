import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
        locations={[0, 0.5, 0.8, 0.95, 1]}
        style={{ flex: 1 }}
      >
        <View style={styles.view1}>
          <FontAwesome name="lock" size={130} color="black"></FontAwesome>
        </View>

        <View style={styles.view2}>
          <Text style={styles.textView2}>FORGET</Text>
          <Text style={styles.textView2}>PASSWORD</Text>
        </View>

        <View style={styles.view3}>
          <Text style={styles.textView3}>
            Provide your account's email for which you
          </Text>
          <Text style={styles.textView3}>want to reset your password</Text>
        </View>

        <View style={styles.view4}>
          <View style={styles.viewEmail}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/546/546394.png",
              }}
              style={{ width: 50, height: 50 }}
            ></Image>
            <TextInput placeholder="Email" style={styles.textInput}></TextInput>
          </View>
          <View style={styles.viewTouch}>
            <TouchableOpacity>
              <View style={styles.viewTextTouch}>
                <Text style={styles.textTouch}>NEXT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view1: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  view2: {
    flex: 1,
    alignItems: "center",
  },
  view3: {
    flex: 1,
    alignItems: "center",
    marginTop: "25px",
  },
  view4: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
  },
  viewEmail: {
    flexDirection:'row',
    width: "320px",
    height: "50px",
    backgroundColor: "darkgray",
    borderRadius: "5px",
  },
  viewTouch: {
    backgroundColor: "yellow",
    width: "320px",
    height: "50px",
    borderRadius: "5px",
    marginTop: "50px",
  },
  viewTextTouch: {
    alignItems: "center",
    marginTop: "10px",
  },
  textView2: {
    fontWeight: "bold",
    fontSize: "25px",
  },
  textView3: {
    fontWeight: "bold",
  },
  textInput: {
    width:"270px",
    height: "50px",
  },
  textTouch: {
    fontWeight: "bold",
    fontSize: "20px",
  },
});
