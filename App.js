import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios'
import Task from './components/Tasks';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionText}>Today's tasks</Text>
        <View style={styles.items}>
          <Task text={'task n 1'} />
          <Task text={'task n 2'} />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "IOS" ? 'padding' : 'height'}
        style={styles.WriteTask}
        >
          <TextInput style={styles.input} placeholder='Write a task'/>

          <TouchableOpacity>
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
    width:250,
    backgroundColor:'#FFF',
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,

  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{},
});
