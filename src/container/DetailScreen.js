import React from 'react';
import { View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { Block, Button, TextView } from '../components';
import { Colors } from '../color';
import Feather from 'react-native-vector-icons/Feather';
import { StyleUtils } from '../Theme'
// const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
const W = StyleUtils.screenWidth


const Item = ({ icon, title }) => {
  return (
    <Block block centered>
      <Button middle shadow color="#fff" padding={10} borderRadius={12}>
        <Image source={icon} />
        <TextView bold center>
          {title}
        </TextView>
      </Button>
    </Block>
  );
};

const ItemField = ({ icon, title, desc }) => {
  return (
    <Button>
      <Block
        direction="row"
        borderRadius={10}
        shadow
        color="#fff"
        padding={6}
        paddingHorizontal={10}
        style={{ marginTop: 10 }}
        height={H * 0.475}>
        <Image style={styles.img_item} resizeMode="contain" source={icon} />
        <Block padding={10} style={styles.field_con}>
          <TextView size={16} bold>
            {title}
          </TextView>
          <TextView style={styles.textDesc} >{desc}</TextView>
        </Block>
      </Block>
    </Button>
  );
};

const DetailScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Block block color="#fafafa">
        <Block height={300} color={Colors.blue} style={styles.bg}>
          <Block style={styles.wrapperimage}>
            <Image
              style={styles.doctor}
              source={require('../images/coronadr.png')}
            />
          </Block>
        </Block>
        <Block style={styles.containerHeader}>
          <Image style={styles.img} source={require('../images/virus.png')} />
        </Block>
        <Block padding={10}>
          <TextView h6>Triệu Chứng</TextView>
          <Block direction="row" paddingVertical={10}>
            <Item icon={require('../images/headache.png')} title="Đau Đầu" />
            <Block width={10} />
            <Item icon={require('../images/caugh.png')} title="Ho" />
            <Block width={10} />
            <Item icon={require('../images/fever.png')} title="Nóng Sốt" />
          </Block>
        </Block>
        <Block padding={10}>
          <TextView h6>Biện Pháp Phòng ngừa</TextView>
          <Block>
            <ItemField
              title="Đeo khẩu trang"
              desc="Bệnh viêm đường hô hấp cấp (Do Covid-19) có thể lây truyền qua đường giọt bắn. Vì vậy, việc sử dụng khẩu trang y tế là một trong những biện pháp phòng ngừa dịch bệnh đơn giản và  hiệu quả cao."
              icon={require('../images/wear_mask.png')}
            />
            <ItemField
              title="Rửa tay thường xuyên"
              desc="Rửa tay thường xuyên trong 20 giây, bằng xà phòng và nước hoặc dung dịch rửa tay khô chứa cồn
              Khi ho hoặc hắt hơi, hãy dùng khăn giấy dùng một lần hoặc khuỷu tay để che mũi và miệng
              Tránh tiếp xúc gần với những người không khỏe"
              icon={require('../images/wash_hands.png')}
            />
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 300,
  },
  doctor: {
    position: 'absolute',
    top: 100,
    left: -30,

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

  img_item: {
    width: (1.2 * W) / 3,
    height: (1.2 * W) / 3,
  },
  field_con: {
    // marginLeft: W / 2,
    position: 'absolute',
    // width: (2 * W) / 3,
    left: W / 3 + 10,
    top: 10,
    paddingVertical: 10,
  },
  textDesc: {
    lineHeight: 21,
    marginTop: 10,
    // maxWidth: (2 * W) / 3.4,
    maxWidth: 180,
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default DetailScreen;
