import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Counter from './components/counter.js';
//import  MyInput  from './components/MyInput.js';
import IncrementCounter from './components/IncrementCounter'
import Form from './components/Form'
import Login from './components/Login'
import TP from './javascriptFile/TouchablePractice'
import Example_useEffect from './javascriptFile/Example_useEffect';
import useEffectFlatList from './javascriptFile/useEffectFlatList';
import UseEffectFlatList from './javascriptFile/useEffectFlatList';
const App = () => {
  return (
    <View style={styles.container}>
      <UseEffectFlatList/>
    </View>
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