import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import ProductScreen from './javascriptFile/ProductScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Screen/HomeScreen';
import DetailsScreen from './Screen/DetailsScreen';
import firstpage from './pages/firstpage';
import secondpage from './pages/secondpage';
import thirdpage from './pages/thirdpage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle:{
            backgroundColor: '#008b8d'
          },
          headerTintColor: '#f00',
          headerTitleStyle:{
            fontWeight:'bold',
          }
        }}>
        <Stack.Screen 
          name='First' 
          component={firstpage}
          options={{title : 'Home'}}
        />
        <Stack.Screen
          name='Second'
          component={secondpage}
        />
        <Stack.Screen
          name='Third'
          component={thirdpage}
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