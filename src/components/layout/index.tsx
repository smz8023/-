import React, {useCallback, useState} from 'react';
import { Flex, Layout, Button} from 'antd';
import layoutModuleStyle from './index.module.less'
import Chart from '../chart/index'
const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#000',
  borderBottom: '1px solid #fff'
};

const contentStyle: React.CSSProperties = {
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#000',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#000',
  borderRight: '1px solid #fff'
};



const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
};

const  clientStyle = {
  color: '#fff'
}
const App: React.FC = () => {
const [action, setAction] = useState(1)
const setMode = useCallback(async (item: { id: React.SetStateAction<number>; })=>{
  setAction(item.id)
 
},[])

const start = useCallback(async (item: any)=>{
  await window.ipcRenderer.invoke('start', item);
},[])
 return <Flex gap="middle" wrap>
    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        {
          [{name: '电脑',id: 1}, {name:'手机',id:2}].map(item=>{
            return <div key={item.id} style={clientStyle}>
              <Button onClick={()=>setMode(item)} color="primary" variant={action === item.id ? 'outlined' : 'filled' } >{item.name}</Button>
            </div>
          })
        }
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          {
            [{ name: '开始', id: 1},{name: '暂停', id: 2},{name:'自动', id: 3}].map(item=>{
              return <Button onClick={()=>start(item)} className={layoutModuleStyle.model} key={item.id}>{item.name}</Button>
            })
          }
        </Header>
        <Content style={contentStyle}>
          <Chart />
        </Content>
      </Layout>
    </Layout>
  </Flex>
};

export default App;