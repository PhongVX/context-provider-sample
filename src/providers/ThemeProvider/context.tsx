import * as React from "react";
import {ThemeType} from './types';

const defaultValue: ThemeType ={
    mode: 'dark'
}
export const ThemeContext = React.createContext(defaultValue);


