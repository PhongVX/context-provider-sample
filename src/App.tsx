import 'antd/dist/antd.css';
import 'src/common/styles/styles.scss';
import 'src/styles.scss';
import { Tabs } from 'antd';
import ThemeProvider from 'src/providers/ThemeProvider';
import LanguageProvider from 'src/providers/LanguageProvider';
import Content from 'src/views/Content';

const { TabPane } = Tabs;

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className='wrapper-app'>
          <Tabs defaultActiveKey='1'>
            <TabPane tab='Content' key='1'>
              <Content />
            </TabPane>
          </Tabs>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
