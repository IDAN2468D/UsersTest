import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const mainSizes = {
    titleSize: 30,
    textSizes: 18
}

export const sizes = {
    // TextSizes
    titleSize: mainSizes.titleSize,
    textSizes: 18,

    windowWidth,
    windowHeight

}