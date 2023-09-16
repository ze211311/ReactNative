import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Linking } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
 } from '@react-navigation/drawer';
 import CustomSideBarMenu from './pages/customSideBarMenu';
 import Firstpage from './pages/firstpage';
 import Secondpage from './pages/secondpage';
 import NavigationContainer from '@react-navigation/native';
 import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

function HomeScreen () {
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Home</Text>
    </View>
  )
}

function SettingScreen(){
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Setting</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator

function MyTab () {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Setting' component={SettingScreen}/>
    </Tab.Navigator>
  )
}

function FirstStackScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName='FirstPage'
      screenOptions={{hraderShown: false}}
    >
      <Stack.Screen Name="FirstPage" component={Firstpage}/>
    </Stack.Navigator>
  );
}
function SecondStackScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName='SecondPage'
      screenOptions={{hraderShown: false}}
    >
      <Stack.Screen Name="SecondPage" component={Secondpage}/>
    </Stack.Navigator>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function callStacked() {
  return (
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
          name='Home' 
          component={HomeScreen}
          options={{title : 'Overview'}}
          initialParams={{itemID: 42 }}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
        />
        
      </Stack.Navigator>
  );
}
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#f0f8ff',
          width: 240,
        },
      }}
      drawerContent={(props)=><CustomSideBarMenu{...props}/>}
    >
      <Drawer.Screen name="First Page Option" component={Firstpage} options={{drawerLabel:"First Page Option"}}/>
      <Drawer.Screen name="Second Page Option" component={Secondpage} options={{drawerLabel:"First Page Option"}}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  );
}