/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import fetchApi from './src/Screen/fetchApi';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => fetchApi);
