import React from 'react';
import { View } from '@tarojs/components';
import './index.scss';

// 存在问题, 点击子级元素, 父级的事件不触发
// 根据事件的冒泡机制, 理论上点击子级元素父级元素的点击事件也会触发
// 注释掉 app.ts 文件内的 gio 初始化之后冒泡事件就正常了
export default function Index() {
  return (
    <View className='index' onClick={parentClick}>
      <View onClick={childClick}>test</View>
    </View>
  );

  function parentClick() {
    console.log('我是 parent');
  }

  function childClick() {
    console.log('我是 child');
  }
}
