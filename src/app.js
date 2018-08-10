import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader' // 新增

const App = () => {
  return (
    <div>
      <p>这是一个测试文件！真得是动态更新啊</p>
      <div>好棒棒啊!!</div>
    </div>
  );
};

export default hot(module)(App); // 修改