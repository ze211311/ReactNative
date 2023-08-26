import { StyleSheet, Text, View, SafeAreaView,FlatList,ActivityIndicator,Image } from 'react-native'
import React,{useState,useEffect} from 'react'

const News = () => {

    const[article,setArticle] = useState();
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        getData();
    },[])

    const getData = async()=>{
        try{
            const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-08-25&to=2023-08-25&sortBy=popularity&apiKey=cebb00ff781d46a5bca55044db83314d');
            const data = await response.json();
            setArticle(data.articles);
            setLoading(false)

        } catch(error){
            console.error('Error fetching user : ', error);
            setLoading(false);
        }
    }

    const _renderItem = ({item})=>{
        let urlToImage =(item.urlToImage !== null) ? item.urlToImage : 'http://via.placeholder.com/150*100' 
        return(
            <View style = {{flex:1}}>
                <View style={{flex:1,flexDirection:'row',margin:10}}>
                    <Image
                        source = {{uri : urlToImage}}
                        resizeMode = 'cover'
                        style = {{flex:1,width:'100%',height:'100%'}}
                    />
                </View>
                <View style={{width:200,alignSelf:'center',margin:5}}>
                    <Text style={{fontSize:14,marginBottom:5}}>{item.title}</Text>
                    <Text style={{fontSize:10}}>{item.source.name}</Text>
                </View>

            </View>
        )
    }

    const onRefresh = ()=> {
        setLoading(true);
        getData();
    }

  return (
    <View>
      {
        loading?(
            <ActivityIndicator size="Large" color="#0000FF"/>
        ):(
            <FlatList
                data={article}
                keyExtractor={(index)=>(index.toString())}
                renderItem={_renderItem}
                refreshing={loading}
                onRefresh={onRefresh}
            />
        )
      }
    </View>
  )
}

export default News

const styles = StyleSheet.create({})