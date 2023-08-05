import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect,useState} from 'react'
import axios from 'axios'

const Example_useEffect = () => {
    
    const[data, setData] = useState([])
    useEffect(()=>{
        //fetch data from api using Axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                //Handle success response
                setData(response.data);
            })
            .catch(()=>{
                console.error('Error fetching data: ',error);

            })
    },[])//Empty dependency array ensure this efftect runs only once, When the component mounted

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post from API:</Text>
      {
        data.map((post)=>(
            <View key={post.id} style={styles.post}>
                <Text style={styles.postTitle}>{post.title}</Text>
                <Text>{post.body}</Text>
            </View>
        ))
      }
    </View>
  )
}

export default Example_useEffect

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        backgroundColor:'#f0f0f0'
    },
    title: {
        fontSize:24,
        fonWeight: 'bold',
        marginBottom: 20
    },
    post: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius:5,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    postTitle: {
        fontSize: 18,
        fonWeight: 'bold',
        marginBottom: 5
    }
})