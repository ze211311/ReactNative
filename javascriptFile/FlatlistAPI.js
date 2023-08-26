import { StyleSheet, Text, View,SafeAreaView,ActivityIndicator,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import { RefreshControl } from 'react-native-web';

const FlatlistAPI = () => {

    const[refreshing, setRefreshing] = useState(true);
    const[dataSource, setDataSource] = useState([]);

    //service ti get data from server to render
    const getData = async()=>{
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((responseJson)=>{
            setDataSource(responseJson);
            setRefreshing(false);
        }).catch((error)=>{
            console.error(error);
        });
    };

    useEffect(()=>{
        getData();
    },[]);

    const ItemSeperatorView = ()=>{
        return(
            <View
                style = {{
                    height: 0.5,
                    width: "100%",
                    backgroundColor: "#c8c8c8",
                }}
            />

        )
    };

    const getItem = (item)=>{
        //Function for click on an item
        alert('id : '+ item.id + ' Title : ' + item.title)
    }

    const ItemView = ({item})=>{
        return(
            <View>
            <Text style={styles.postTitle} onPress={()=>{getItem(item)}}>{item.title}</Text>
            </View>
        )
    };

    const onRefresh = ()=> {
        //Clear old data of the list
        setDataSource([]);
        //Call the service getData again
        getData();
        }

  return (
    <SafeAreaView style={{flex:1}}>
        <View style = {styles.container}>
            {refreshing ? <ActivityIndicator/> : null}
            <FlatList
                data={dataSource}
                keyExtractor={(index)=>index.toString()}
                ItemSeperatorComponent={ItemSeperatorView}
                renderItem={ItemView}
                refreshControl={
                    <RefreshControl
                        refreshing = {refreshing}
                        onRefresh = {onRefresh}
                    />

                }
            />
        </View>
    </SafeAreaView>
  )
}

export default FlatlistAPI

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        marginTop: 10,
    },
    ItemStyle:{
        fontsize: 20,
        padding: 10,
    },
    title: {
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20
    },
    post: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    }
})