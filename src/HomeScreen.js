import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Picker,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Block, Button, TextView} from './components';
import {Colors} from './color';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import CallApi from '../src/server/networking';
const W = Dimensions.get('window').width;
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 300,
  },
  doctor: {
    position: 'absolute',
    top: 100,
    left: 60,

    // width: 50,
    // height: 80,
  },
  wrapperimage: {
    position: 'absolute',
    bottom: 0,

    alignSelf: 'center',
    width: W,
    height: 300,
  },
  bg: {
    position: 'absolute',
    width: 1000,
    height: 1000,
    top: -(930 - W / 2),
    alignSelf: 'center',
    // top: 500 - W / 2,
    // left: 500 - W / 2,
    borderRadius: 1000,
    overflow: 'hidden',
  },
  containerHeader: {
    position: 'relative',
  },
  map: {
    borderRadius: 8,
    marginTop: 15,
    padding: 15,
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}}>
      <Block block color="#fafafa">
        <Block height={300} color={Colors.blue} style={styles.bg}>
          <Block style={styles.wrapperimage}>
            <Image
              style={styles.doctor}
              source={require('./images/Drcorona.png')}
            />
          </Block>
        </Block>
        <Block style={styles.containerHeader}>
          <Image style={styles.img} source={require('./images/virus.png')} />
        </Block>
        <Block>
          <Button
            color="#fff"
            borderWidth={1}
            borderColor="#f0f0f0"
            margin={10}
            borderRadius={30}>
            <Block direction="row" paddingHorizontal={15} middle>
              <Icon name="md-home" size={16} color={Colors.blue1} />
              <Block block padding={10}>
                <TextView h6>Viet Nam</TextView>
              </Block>
              <Icon name="md-sync" size={16} color={Colors.blue1} />
            </Block>
          </Button>
        </Block>
        <Block padding={10} style={{marginTop: 10}}>
          <Block justifyContent="space-between" direction="row">
            <Block>
              <TextView h6>Cập Nhật Hàng Ngày</TextView>
            </Block>
            <Button textColor={Colors.blue1}>Updated</Button>
          </Block>
          <Block
            color="#fff"
            borderRadius={8}
            padding={10}
            shadow
            style={{marginTop: 10}}
            direction="row">
            {/* CALL API */}
            <CallApi />
            {/*  */}
          </Block>
          <Block style={{marginTop: 20}}>
            <Block direction="row" justifyContent="space-between">
              <TextView h6>Sự Lây Lan Của Virus</TextView>
              <Button
                textColor={Colors.blue1}
                onPress={() => navigation.navigate('Detail')}>
                Xem chi tiết
              </Button>
            </Block>
            <Block color={'#fff'} style={styles.map}>
              <Image source={require('./images/map.png')} />
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default HomeScreen;
