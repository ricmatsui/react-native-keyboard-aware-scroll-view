/* @flow */

import React from 'react';
import { SectionList } from 'react-native'
import listenToKeyboardEvents from './KeyboardAwareHOC'

export default listenToKeyboardEvents(SectionList)
