import React from 'react';
import {
  StyleSheet,
  Text,
  View,
 TouchableOpacity, 
} from 'react-native';

import { useSelector,useDispatch } from 'react-redux';
import { incNUM,decNUM } from '../redux/actions/numberAction';

const Counter = () => {
const state = useSelector((state)=>state)
console.log(state)
const dispatch = useDispatch()

  return (

    <View style={styles.Container}>
     <Text style={styles.sectionTitle}>{state.number}</Text>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.button} onPress={()=>dispatch(incNUM())}>
          <Text style={styles.sectionTitle}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>dispatch(decNUM())}>
          <Text style={styles.sectionTitle}>-</Text>
        </TouchableOpacity>
      </View>
   
      
      
    </View>
   
  );
};

const styles = StyleSheet.create({ 
  Container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
    },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
   // marginBottom:300,
  },
  button: {
    borderRadius: 3,
    width: '15%',
    height: '37%',
    borderWidth: 1,
  },
});

export default Counter;