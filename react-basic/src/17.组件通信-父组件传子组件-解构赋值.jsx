import React from "react"
//App 父组件 Son子组件
//解构赋值一
// function SonF(props){
//     const {list,name,span,getMsg} = props
//     //props是一个对象，里面存着通过父组件传入的所有数据
//     return(
//         <>
//             <div>我是函数式子组件</div>
//             <div>我是函数式子组件,{list.map(item =><p key={item}>{item}</p>)}</div>
//             <div>{name}</div>
//             <div>{span}</div>
//             <button onClick={getMsg}>点我啊</button>
//         </>
//     )
// }


//解构赋值二
function SonF({list,name,span,getMsg}){
    //props是一个对象，里面存着通过父组件传入的所有数据
    return(
        <>
            <div>我是函数式子组件</div>
            <div>我是函数式子组件,{list.map(item =><p key={item}>{item}</p>)}</div>
            <div>{name}</div>
            <div>{span}</div>
            <button onClick={getMsg}>点我啊</button>
        </>
    )
}

/**
 * 这里写的就是原生的函数语法，props也是一个普通的js对象
 * 所以原生支持的写法这里都是可以的放心大胆的写
 */
class App extends React.Component{
    //准备数据
    state={
        list:[1,2,3],
        person:{
            name:'zhangsan',
            age:18
        }
    }
    getMsg = () =>{
        console.log('我是一个箭头函数')
    }
    render() {
        return(
            <>
                <SonF list={this.state.list} name={this.state.person.name} getMsg={this.getMsg} span={<span>我是一个模板</span>}/>
            </>
        )
    }
}

export default App
