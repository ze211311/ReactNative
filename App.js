import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Counter from './components/counter.js';
//import  MyInput  from './components/MyInput.js';
import IncrementCounter from './components/IncrementCounter'
import Form from './components/Form'
import Login from './components/Login'
import TP from './javascriptFile/TouchablePractice'
const App = () => {
  return (
    <View style={styles.container}>
      <TP/>
    </View>
  );
}
export default App
const styles = StyleSheet.create({
  container:{
      flex:1,
  }
})