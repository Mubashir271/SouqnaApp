import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';
const MyButton = ({onPress, title, disabled, icon, widt, color}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: disabled
            ? colors.lightpastelgreen
            : color || colors.lightgreen,
          height: 55,
          width: widt ? widt : '100%',
        },
      ]}
      onPress={disabled ? null : onPress}
      disabled={disabled}>
      <View style={styles.view1}>
        {icon && <Image source={icon} style={styles.image1} />}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: mvs(20),
  },
  text: {
    fontSize: mvs(17),
    fontWeight: '400',
    color: colors.green,
    fontFamily: 'DMSans',
  },
  view1: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  image1: {
    width: 30,
    height: 30,
  },
});
export {MyButton};
