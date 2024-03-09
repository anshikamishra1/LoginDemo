import React, { useState } from "react";
import { FontAwesome, AntDesign, Fontisto } from '@expo/vector-icons';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MobileLogin = () => {
    const [phone, onChangeText] = React.useState("");
    const navigation = useNavigation();

    const SignInWithMobile = () => {
        console.log("SignInUsing Mobile");
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>What is Your Phone Number</Text>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Phone Number"
                    autoCorrect={false}
                    placeholderTextColor="grey"
                    value={phone}
                    onChangeText={(text) => onChangeText(text)}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={SignInWithMobile}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <Text style={{ marginBottom: 20, textAlign: "center", fontSize: 20 }}>or</Text>
            <View style={{width:350}}> 
            <TouchableOpacity style={styles.create} onPress={() => navigation.navigate('Home')}>
                <Fontisto name="email" size={24} color="black" />
                <Text style={styles.createText}>Continue with Email</Text>
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

export default MobileLogin;
