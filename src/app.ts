import Taro from '@tarojs/taro';
import './app.scss'
import gio from './common/gio-minp/index';

// 把我注释掉之后一切正常了
gio('setConfig', {
  projectId: 'a00b953ff6451ed3',
  appId: 'wx188647d2505877e8',
  version: '1.0',
  taro: Taro,
});

export default function App(props) {
  return props.children;
}
