import * as React from "react";
import { LanguageContext } from './context';
import {LanguageTypeString} from './types';

interface LanguageProviderProps {
  children: any
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
  const [languageState, setLanguageState] = React.useState<LanguageTypeString>('en')
  const updateLanguage = (e:any) => {
    setLanguageState(languageState == 'vn' ?'en':'vn');
  };
  return (
    <LanguageContext.Provider value={{
        language: languageState,
        updateLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider


