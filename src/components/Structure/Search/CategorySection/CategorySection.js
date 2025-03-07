// CategoryList.js
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Bold from '../../../../typography/BoldText';
import styles from './style';
import dummyData from '../../../../util/dummyData';

const {categoryIcons, categories} = dummyData;

const CategorySection = ({categories}) => {
  const navigation = useNavigation();

  const handleCategoryPress = (category, subcategories) => {
    if (category === 'Other Categories') {
      navigation.navigate('AllCategories');
    } else if (subcategories) {
      navigation.navigate('SubCategoryScreen', {category, subcategories});
    }
  };

  return (
    <View style={styles.categoryContainer}>
      <FlatList
        data={categories.slice(0, 5)}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category, index) => index.toString()}
        renderItem={({item}) => {
          const Icon = categoryIcons[item.name] || categoryIcons['defaultIcon'];

          return (
            <TouchableOpacity
              onPress={() =>
                handleCategoryPress(item.name, item.subcategories)
              }>
              <View style={styles.categoryItem}>
                <View style={styles.IconContainer}>
                  <Icon width={24} height={24} />
                </View>
                <View style={styles.textContainer}>
                  <Bold style={styles.categoryText}>{item.name}</Bold>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CategorySection;
