//函数组件创建和渲染
//创建
//如果传递自定义参数？
//1.只需要一个额外参数 onClick = {()=>clickHandler('自定义参数')}
//2.急需要e也需要额外的参数 onClick = {(e)=>clickHandler(e,'自定义参数')}
import React  from "react";
function Hello() {
    const clickHandler = (e,msg) => {
        console.log('函数组件中的时间被触发了！',e,msg)
    }
    return <div onClick={(e) => clickHandler(e,"this is msg")}>click me</div>
}
//类组件创建
// class HelloComponent extends React.Component{
//     //事件回调函数(标准写法，避免this指向问题)
//     //这样写 回调函数中的this指向的是当前的组件实例对象
//     clickHandler = () =>{
//         console.log('类组件中的事件被触发了!')
//     }
//     render() {
//         return <div onClick={this.clickHandler}>this is class component</div>
//     }
// }
function App() {
    return (
        <>
            <Hello></Hello>
        </>
    );
}
export default App
