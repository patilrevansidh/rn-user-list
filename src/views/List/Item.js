import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {rightArrow} from '../../common/assets/index';
import {ROUTES, FORMAT, COLORS} from '../../common/contants/index';
import {dateFormatter} from '../../config/utils/helper';

const ListItem = ({item, onDetail}) => {
  const {name, picture, email, location, registered, dob} = item;
  const fullName = `${name.first} ${name.last}`;
  const joinedString = dateFormatter(registered.date);
  const dobjoinedString = dateFormatter(dob.date, FORMAT);
  return (
    <View key={email} style={style.itemContainer}>
      <TouchableOpacity
        onPress={() =>
          onDetail({...item, fullName, joinedString, dobjoinedString})
        }>
        <View style={[style.row]}>
          <View style={[style.flex1]}>
            <Image source={{uri: picture.thumbnail}} style={style.thumbnail} />
          </View>
          <View style={[style.flex3, style.seperateLeft]}>
            <View>
              <Text>{fullName}</Text>
              <Text>{email}</Text>
              <View style={style.row}>
                <Text>Country | </Text>
                <Text>{location.country}</Text>
              </View>
            </View>
          </View>
          <View style={[style.flex1]}>
            <View style={style.row}>
              <Text style={style.textRight}>{joinedString}</Text>
              <View>
                <Image source={rightArrow} style={style.arrowIcon} />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  itemContainer: {
    padding: 16,
    backgroundColor: COLORS.WHITE,
  },
  arrowIcon: {
    height: 13,
    width: 13,
    marginTop: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  flex3: {
    flex: 2,
  },
  textRight: {
    textAlign: 'right',
  },
  thumbnail: {
    width: 75,
    height: 75,
  },
});
export default ListItem;
