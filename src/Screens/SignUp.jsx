import React from "react";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUp = ({}) => {
  const [email, setEmail] = React.useState("");
  const navigation = useNavigation();

 const handleSignUp = () => {
    console.log("Sign Up button pressed");
    // Implement sign-up logic here
 }

 const SignInWithEmail = () => {
    console.log("Sign In using email");
    // Implement sign-in with email logic here
 }

  return (
    <View style= {styles.container}>
      <Text style={{fontSize: 20, marginBottom: 10}}>What is Your Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email Address"
        autoCapitalize={"words"}
        autoCorrect={false}
        placeholderTextColor="grey"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={{marginBottom: 20, textAlign: "center", fontSize: 20}}>or</Text>
      <View style={{width:350}}>
      <TouchableOpacity style={styles.create} onPress={() => navigation.navigate('MobileSignUp')}>
        <AntDesign name="mobile1" size={24} color="black" />
        <Text style={styles.createText}>Continue with Mobile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.create}>
        <AntDesign name="google" size={24} color="black" />
        <Text style={styles.createText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.create}>
        <FontAwesome name="facebook-f" size={24} color="black" />
        <Text style={styles.createText}>Continue with Facebook</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    marginBottom: 10,
    width: 350,
    backgroundColor: "white",
    color: "black",
    padding: 10,
    fontSize: 17,
    borderWidth: 2,
    borderColor: "black",
  },
  button: {
    borderRadius: 5,
    backgroundColor: "black",
    width: 350,
    paddingVertical: 10,
    marginVertical: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "sans-serif-light",
    fontWeight: "200",
  },
  create: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: "center",
    paddingHorizontal: 20,
    fontFamily: "sans-serif-light",
    fontWeight: "200",
    justifyContent:"center",
  },
  createText:{
    textAlign: "center",
    fontSize: 17,
    color: "black",
    paddingHorizontal:20,
  }
});

export default SignUp;
