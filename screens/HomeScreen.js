import {Image, StyleSheet, View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import logo from '../images/Uber-Logo.wine.png';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{width: 100, height: 100, resizeMode: 'contain'}}
          source={logo}
        />
        <NavOptions />
        <Text> abs</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});
