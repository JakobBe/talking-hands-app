import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { categoriesArray } from '../../helpers/variables';
import { Actions } from 'react-native-router-flux';
import Footer from '../routing/Footer';
import { colors } from '../../helpers/styles';

const Categories = (props) => {
  const onCategoryPress = (category, title) => {
    Actions.category({ category, title });
  };

  const deviceWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <FlatList
          style={styles.listWrapper}
          data={categoriesArray}
          contentContainerStyle={styles.listContainer}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.category(deviceWidth, item[1].backgroundColor)}
              onPress={() => onCategoryPress(item[0], item[1].name)}>
              <Text style={styles.categoryName(item[1].color)}>
                {item[1].name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Footer navigation={props.navigation} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'relative',
  },

  categoriesContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },

  listWrapper: {
    flex: 1,
    marginTop: 20,
  },

  category: (deviceWidth, backgroundColor) => {
    return {
      width: deviceWidth / 3.7,
      height: deviceWidth / 3.7,
      alignItems: 'center',
      margin: 10,
      marginBottom: 10,
      backgroundColor,
      justifyContent: 'center',
      padding: 5,
      borderWidth: 2,
      borderColor: 'white',
    };
  },

  categoryName: (color) => {
    return {
      color,
      textTransform: 'uppercase',
      fontSize: 17,
    };
  },
};

export default Categories;
