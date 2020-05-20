/* @flow */

import React from 'react';
import { FlatList } from 'react-native'
import listenToKeyboardEvents from './KeyboardAwareHOC'

export default listenToKeyboardEvents(FlatList)
