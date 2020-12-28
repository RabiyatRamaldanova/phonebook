import React from 'react';
import {AppRegistry} from 'react-native';

//import Redux libraries
import {createStore} from 'redux';
import {Provider} from 'react-redux';


//import thunk from 'redux-thunk';

//import Redux libraries
import App from './App';
import {name as appName} from './app.json';

import reducer from './reducers/index';

export const mystore = createStore(reducer);

const Myentrypoint = () => (
    <Provider store={mystore}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => Myentrypoint);
