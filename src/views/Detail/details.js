import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { COLORS } from '../../common/contants';

const Field = props => {
  const {label, value} = props;
  return (
    <View style={styles.row}>
      <Text style={[styles.line2, styles.label]}>{label}</Text>
      <Text style={[styles.line2, styles.value]}>{value}</Text>
    </View>
  );
};

const Home = props => {
  const itemDetails = props?.route?.params?.itemDetails;
  useEffect(() => {
    props.navigation.setOptions({title: itemDetails.fullName});
  }, []);
  const {fullName, picture, joinedString, email, location} = itemDetails;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.picContainer}>
          <Image style={styles.profilePic} source={{uri: picture.large}} />
        </View>
        <View>
          {[
            {label: 'Email: ', field: 'email'},
            {label: 'Date Joined: ', field: 'joinedString'},
            {label: 'DOB: ', field: 'dobjoinedString'},
          ].map(i => {
            return <Field label={i.label} value={itemDetails[i.field]} />;
          })}
        </View>
        <View>
          <Text style={styles.title}>LOCATION</Text>
          {[
            {label: 'City: ', field: 'city'},
            {label: 'State: ', field: 'state'},
            {label: 'Country: ', field: 'country'},
            {label: 'Postcode: ', field: 'postcode'},
          ].map(i => {
            return <Field label={i.label} value={location[i.field]} />;
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  picContainer: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 18,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.GRAY,
    paddingBottom: 20,
  },
  profilePic: {
    height: 300,
    width: 300,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    fontWeight: 'bold',
  },
  line2: {
    lineHeight: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 18,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.GRAY,
    paddingBottom: 10,
  },
});

export default Home;
