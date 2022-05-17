import React from 'react';
import {FlatList, TouchableOpacity, View, Text, Image} from 'react-native';
import {Icon} from '@rneui/themed';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://source.unsplash.com/random/200x200',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://source.unsplash.com/random/200x200',
    screen: 'EatScreen',
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      horizontal
      renderItem={({item}) => {
        return (
          <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
              <Image
                style={{width: 120, height: 120, resizeMode: 'contain'}}
                source={{uri: item.image}}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
              <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                type="material"
                name="arrow-forward"
                color="white"
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavOptions;
