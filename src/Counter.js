import React from 'react';
import {
  StyleSheet,
  Text,
  View,
 TouchableOpacity, 
} from 'react-native';

import { useSelector,useDispatch } from 'react-redux';
import { incNUM,decNUM } from './redux/action';

const Counter = () => {
const state = useSelector((state)=>state.numberReducer)
console.log(state)
const dispatch = useDispatch()

  return (

    <View style={styles.Container}>
      <Text style={styles.sectionTitle}>{state}</Text>

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
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    borderRadius: 3,
    width: '20%',
    height: '10%',
    borderWidth: 1,
  },
});

export default Counter;