import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import axios from 'axios'
import Task from './components/Tasks';
import { useState } from 'react';
export default function App() {
  const [tasktext,setTextTAsk] = useState('')
  const [tasks,setTasks] = useState([]);
  
  const HandlePress = ()=>{
    tasks.push(tasktext)
    setTextTAsk(null)
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionText}>Today's tasks</Text>
        <View style={styles.items}>
          {tasks.map((t,index)=>(<Task text={t} tasks={tasks} setTasks={setTasks} index={index} />))}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "IOS" ? 'padding' : 'height'}
        style={styles.WriteTask}
        >
          <TextInput style={styles.input} placeholder='Write a task' onChangeText={setTextTAsk} value={tasktext}/>

          <TouchableOpacity onPress={HandlePress}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>

          </TouchableOpacity>

        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionText:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:25,
  },
  WriteTask:{
    position:'absolute',
    bottom:20,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:290,
    backgroundColor:'#fff',
    borderColor:'#C0C0C0',
    borderWidth:1,
    borderRadius:20,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
    borderRadius:20,
  }
});
