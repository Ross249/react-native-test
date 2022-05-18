import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from '@rneui/themed';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Code Street, London, UK',
  },
  {
    id: '456',
    icon: 'work',
    location: 'Work',
    destination: 'London Eye, London, UK',
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, {height: 0.5}]} />
      )}
      keyExtractor={item => item.id}
      renderItem={({item: {location, destination, icon}}) => {
        return (
          <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
              name={icon}
              type="material"
              color="white"
              size={10}
            />
            <View>
              <Text style={tw`font-semibold text-lg`}>{location}</Text>
              <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
