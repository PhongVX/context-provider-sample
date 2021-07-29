import * as React from "react";
import {LanguageType} from './types';

const defaultValue: LanguageType ={
    language: 'vn'
}
export const LanguageContext = React.createContext(defaultValue);