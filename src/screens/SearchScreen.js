import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../Hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={{flex: 1}}>
      <SearchBar
        term={term}
        onTermChange={newterm => setTerm(newterm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList

          results={filterResultByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList

          results={filterResultByPrice('$$')}
          title="Bit Pricier"
        />
        <ResultsList

          results={filterResultByPrice('$$$')}
          title="Big Spender "
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
