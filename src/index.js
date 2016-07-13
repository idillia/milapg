/* eslint-disable import/default */
import React from 'react';
import 'babel-polyfill';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import configureStore from './store/configureStore';
import './styles/styles.css';
// import 'font-awesome/css/font-awesome.css';
// import "../node_modules/font-awesome/fonts/fontawesome-webfont.woff";
// import "../node_modules/font-awesome/fonts/fontawesome-webfont.woff2";
// require('font-awesome/css/font-awesome.css');
// import 'font-awesome/package.json';
// import 'font-awesome-webpack';
require("font-awesome-webpack");


window.$ = window.jQuery = require('jquery');
const Bootstrap = require('bootstrap-sass');
Bootstrap.$ = $;
require('../node_modules/bootstrap-sass/assets/javascripts/bootstrap');
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore(); // TODO: if I create server side rendering, I might want to pass initialStage to configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);