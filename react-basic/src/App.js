//函数组件创建和使用
import React  from "react";
function Hello() {
    const clickHandler = (e) => {
        //阻止默认行为
        e.preventDefault()
      console.log('函数组件中的时间被触发了！',e)
    }
    return <div><a onClick={clickHandler} href="http://www.baidu.com">百度</a></div>
}
//类组件创建
class HelloComponent extends React.Component{
    //事件回调函数(标准写法，避免this指向问题)
    //这样写 回调函数中的this指向的是当前的组件实例对象
    clickHandler = () =>{
        console.log('类组件中的事件被触发了!')
    }
    render() {
        return <div onClick={this.clickHandler}>this is class component</div>
    }
}
function App() {
  return (
      <>
          <Hello></Hello>
          <HelloComponent/>
      </>
  );
}
export default App
