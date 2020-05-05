import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {Block, Button, TextView} from '../components';
import {Colors} from '../color';

const ItemDot = ({color1, color2, num, title}) => {
  return (
    <Block block>
      <Block middle>
        <Block
          width={30}
          height={30}
          middle
          centered
          borderRadius={30}
          color={color1}>
          <Block
            width={20}
            height={20}
            borderWidth={4}
            borderRadius={20}
            borderColor={color2}
          />
        </Block>
        <TextView padding={15} color={color2} h3>
          {num}
        </TextView>
        <TextView color="gray" h6>
          {title}
        </TextView>
      </Block>
    </Block>
  );
};
export default function CallApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(response => {
        setData([response.Countries[241]]);
        console.log(response.Countries);
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
          style={{marginTop: 10}}
          direction="row">
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
            title={'Phục Hồi'}
          />
        </Block>
      );
    });
  } else {
    dataRender = 'Loading...';
  }

  return <ScrollView>{dataRender}</ScrollView>;
}
