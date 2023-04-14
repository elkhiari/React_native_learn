import React from "react";
import {View , Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = ({text}) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text Style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circular}></View>
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
        backgroundColor:'#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
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
    },
})

export default Task;