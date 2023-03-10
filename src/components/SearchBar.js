import React from 'react';
import {View, TextInput, StyleSheet, TextInputBase} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass, faMartiniGlass, faMugSaucer} from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.iconStyle} size={35}/>
      <TextInput 
      autoCapitalize='none'
      autoCorrect={false}
      placeholder='Search'
      style={styles.inputStyle}
      value={term}
      onChangeText={newTerm => onTermChange(newTerm)}
      onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#AAAAAA',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  inputStyle:{
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    alignSelf: 'center',
    marginHorizontal: 15
  },
});

export default SearchBar;
