import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../database/Database';

const UiCategoryButton = ({ data, style, onPress, textStyle }) => {
  const ProductIcon = ({ name }) => {
    switch (name) {
      case `Sách`:
        return (
          <Image
            source={require('../database/images/books/chuyen-bay-thang-ba.jpg')}
            style={Styles.icons}
          />
        );
      case `Tiểu thuyết`:
        return (
          <Image
            source={require('../database/images/books/tu-sat-1.gif')}
            style={{ ...Styles.icons, height: 16, width: 16 }}
          />
        );
      case 'Truyện':
        return (
          <Image
            source={require('../database/images/books/nhu-gan-nhu-xa1.png')}
            style={Styles.icons}
          />
        );
      default:
        return (
          <Image
            source={require('../../assets/icons/ring.png')}
            style={Styles.icons}
          />
        );
    }
  };
  return (
    <Pressable onPress={onPress} style={{ ...Styles.button, ...style }}>
      <ProductIcon name={data.name} /> 
      <Text>{" "}{data.name}</Text>
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.primaryColor,
    fontFamily: 'Nunito-SemiBold',
    marginLeft: 20,
  },
  icons: {
    height: 20,
    width: 20,
  },
});

export default UiCategoryButton;
