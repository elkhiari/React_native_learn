import React from "react";
import {View , Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

const Task = ({text,index,setTasks,tasks}) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}><Text style={styles.squareText} >{index+1}</Text></TouchableOpacity>
                <Text Style={styles.itemText}>{text}</Text>
            </View>
            <Icon
                name='trash'
                type='font-awesome'
                color='#9E2A2B'
                onPress={()=>{
                    setTasks(tasks.filter(items=>items !== text))
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom: 20,
    },
    square:{
        width: 24,
        height: 24,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
        justifyContent:'center',
        alignItems:'center',
        fontWeight:"600",
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    itemText:{
        maxWidth:"80%",
    },
    circular:{
        width:14,
        height:14,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5,
    }
})

export default Task;