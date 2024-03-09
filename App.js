import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/Screens/SignUp';
import MobileLogin from './src/Screens/MobileLogin';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={SignUp} />
      <Stack.Screen name="MobileSignUp" component={MobileLogin} />
    </Stack.Navigator>
    
  );
}

export default function App() {
  return (
   
    <NavigationContainer>
  
      <MyStack />
     
    </NavigationContainer>
   
  );
}

