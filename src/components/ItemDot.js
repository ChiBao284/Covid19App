import React from 'react';
import { StyleSheet } from 'react-native'
import { Block, TextView } from '../components';
import { StyleUtils } from '../Theme'

const ItemDot = ({ color1, color2, num, title, }) => {
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
                <TextView padding={15} color={color2} style={styles.heading}>
                    {num}
                </TextView>
                <TextView color="gray" h6>
                    {title}
                </TextView>
            </Block>
        </Block>
    );
};
const styles = StyleSheet.create({
    heading: {
        fontSize: StyleUtils.widthDevice < 1 ? 22 : 32,
        fontWeight: 'bold'
    }
})
export default ItemDot