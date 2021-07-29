import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from 'react-hook-form';

import { ThemeContext } from 'src/providers/ThemeProvider/context';
import { LanguageContext } from 'src/providers/LanguageProvider/context';

import { useTheme } from 'src/providers/ThemeProvider';

import 'src/views/styles.scss';

interface FormFields {
  firstName: string
  gender: string
  lastName: string
  save: boolean
}

const CONTENT_LANGUAGE = {
  "hello": {
    "en": "Hello",
    "vn": "Xin chào"
  },
  "changeLanguageButtonText": {
    "en": "Change language",
    "vn": "Thay đổi ngôn ngữ"
  }
}

function Content() {
  const myTheme = useTheme();
  return (
    <>
      <ThemeContext.Consumer>
        {
          context => (
            <div className='text-center'>
              <h1>{context.mode == 'dark' ? 'Dark' : 'Light'}</h1>
              <h2>Welcome to React</h2>
              <Checkbox
                checked={context.mode == 'dark'}
                onChange={context.updateTheme}
              />
            <h1>{myTheme.mode == 'dark' ? 'Dark useTheme' : 'Light useTheme'}</h1>
            </div>
          )
        }
      </ThemeContext.Consumer>
      
      <LanguageContext.Consumer>
        {
          context => (
            <div className='text-center'>
              <h1>{CONTENT_LANGUAGE['hello'][context.language]}</h1>
              <button onClick={context.updateLanguage}>{CONTENT_LANGUAGE['changeLanguageButtonText'][context.language]}</button>
            </div>
          )
        }
      </LanguageContext.Consumer>
      <Checkbox
        checked={myTheme.mode == 'dark'}
        onChange={myTheme.updateTheme}
      />
    </>
  );
}

export default Content;