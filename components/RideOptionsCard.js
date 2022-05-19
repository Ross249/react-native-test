import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'tailwind-react-native-classnames';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectTravelTimeInformation} from '../slices/navSlice';

const data = [
  {
    id: 'Uber-X-123',
    title: 'Uber',
    multiplier: 1.5,
    image: 'https://www.uber.com/assets/img/og/uber-logo-og.png',
  },
];

const SURGE_CHARGE_RATE = 0.3;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInfomation = useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute top-3 left-5 p-3 rounded-full`}>
          <Icon name="chevron-left" type="material" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride - {travelTimeInfomation?.distance.text}{' '}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item: {id, title, multiplier, image}}) => {
          return (
            <TouchableOpacity
              onPress={() => setSelected({id, title, multiplier, image})}
              style={tw`flex-row justify-between item-center px-10 ${
                id === selected?.id && 'bg-gray-200'
              }`}>
              <Image
                style={{width: 100, height: 100, resizeMode: 'contain'}}
                source={{url: image}}
              />
              <View style={tw`ml-6`}>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text>{travelTimeInfomation?.duration.text}</Text>
              </View>
              <Text style={tw`text-xl`}>
                {new Intl.NumberFormat('en-gb', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(
                  (travelTimeInfomation?.duration.value *
                    SURGE_CHARGE_RATE *
                    multiplier) /
                    100,
                )}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <View style={tw`mt-auto border-t border-red-5:00`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${selected && 'bg-gray-300'}`}>
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
