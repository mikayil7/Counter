import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {addList, clearList} from '../redux/actions/listAction';

const List = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.Container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(addList(state.number))}>
        <Text style={styles.sectionTitle}>Add number to List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(clearList())}>
        <Text style={styles.sectionTitle}>Clear List</Text>
      </TouchableOpacity>
      <ScrollView>
        {state.list.map((item, index) => {
          return (
            <Text key={index} style={styles.sectionTitle}>
              {item}
            </Text>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 3,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    borderRadius: 3,
    width: '50%',
    height: '7%',
    borderWidth: 1,
  },
});

export default List;
