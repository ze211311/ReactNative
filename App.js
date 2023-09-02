import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import ProductScreen from './javascriptFile/ProductScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Screen/HomeScreen';
import DetailsScreen from './Screen/DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home' 
          component={HomeScreen}
          options={{title : 'Overview'}}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App
const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'Center'
  }
})