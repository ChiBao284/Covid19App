import { Dimensions } from 'react-native'

const getScreen = {
    screenWidth: (Dimensions.get('window').width) * ((Dimensions.get('window').width) / 414),
    screenHeight: (Dimensions.get('window').height) * ((Dimensions.get('window').height) / 736),
    widthDevice: (Dimensions.get('window').width) / 414,
    heightDevice: (Dimensions.get('window').height) / 736,

}
export default getScreen