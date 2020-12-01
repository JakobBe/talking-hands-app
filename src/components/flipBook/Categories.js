import React from 'react';
import {View, Text, TouchableOpacity, FlatList } from 'react-native';
import { categoriesArray } from '../../helpers/variables';
import Footer from '../Footer';

const Categories = () => {
  const onCategoryPress = (category) => {
    console.log('category', category);
  }

  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <FlatList
          style={styles.listWrapper}
          data={categoriesArray}
          numColumns={3}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{width: 110, height: 110, alignItems: 'center', margin: 10, marginBottom: 10, backgroundColor: item[1].color, justifyContent: 'center', padding: 10}}
              onPress={() => onCategoryPress(item[0])}>
              <Text>{item[1].name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'relative'
  },

  categoriesContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F7E3EA',
  }
};

export default Categories;