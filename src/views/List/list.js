import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Error, Loader} from '../../common/components';
import {COLORS, ROUTES} from '../../common/contants/index';
import {fetchUsers} from '../../config/redux/actions/userAction';
import ListItem from './Item';

const Home = props => {
  const [page, setPage] = useState(1);
  const {
    error,
    loader,
    userList = [],
  } = useSelector(state => {
    const {user} = state;
    return {
      error: user.error || '',
      loader: user.loader || false,
      userList: user.userList || [],
    };
  });

  const dispatch = useDispatch();
  const fetchUserData = () => {
    dispatch(fetchUsers({page, results: 10}));
  };

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const {navigation} = props;
  const isLoaded = !loader || !error;
  if (loader && userList.length == 0) {
    return <Loader />;
  }
  if (error) {
    return <Error error={error} />;
  }
  return (
    <View style={style.container}>
      {isLoaded && userList.length > 0 && (
        <FlatList
          ItemSeparatorComponent={({highlighted}) => (
            <View style={style.separator} />
          )}
          ListEmptyComponent={() => (
            <Text tyle={style.text}>No Records found</Text>
          )}
          data={userList}
          keyExtractor={(item, index) => `${item.email}${index}`}
          renderItem={({item, index, separators}) => (
            <ListItem
              key={item.email}
              onDetail={itemDetails =>
                navigation.navigate(ROUTES.DETAILS, {itemDetails})
              }
              item={item}
              separators={separators}
            />
          )}
          refreshing={loader}
          onEndReached={no => setPage(page + 1)}
        />
      )}
      {loader && userList.length > 0 && (
        <Text style={style.loading}>Loading Recrods..</Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    paddingHorizontal: 8,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.GRAY,
    marginHorizontal: 8,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    color: COLORS.BLACK,
  },
  error: {
    textAlign: 'center',
    color: COLORS.RED,
  },
  loading: {
    textAlign: 'center',
  },
});

export default Home; //connect(mapStateToProps, null)(Home);
