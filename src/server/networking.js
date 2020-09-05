import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { Block, ItemDot } from '../components';
import { Colors } from '../color';
import axios from 'axios';
function CallApi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://api.covid19api.com/summary')
      .then(response => response.data)
      .then(response => {
        let res = response.Countries
        let searchVN = res.filter(item => item.Country === 'Viet Nam')
        setData(searchVN);
      })
      .catch(error => console.log(error));
  }, []);
  let dataRender;
  if (data) {
    dataRender = data.map(item => {
      return (
        <Block
          color="#fff"
          borderRadius={8}
          padding={10}
          shadow
          style={{ marginTop: 10 }}
          direction="row"
          key={item}
        >
          <ItemDot
            color1={Colors.carot_op}
            color2={Colors.carot}
            num={item.TotalConfirmed}
            title={'Ca Nhiễm'}
          />
          <ItemDot
            color1={Colors.red_op}
            color2={Colors.red}
            num={item.TotalDeaths}
            title={'Tử Vong'}
          />

          <ItemDot
            color1={Colors.green_op}
            color2={Colors.green}
            num={item.TotalRecovered}
            title={'Hồi Phục'}
          />
        </Block>
      );
    });
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (<ScrollView>{dataRender}</ScrollView>);
}
export { CallApi };