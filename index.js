/**
 *
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import networking from './src/server/networking';

AppRegistry.registerComponent(appName, () => App);
