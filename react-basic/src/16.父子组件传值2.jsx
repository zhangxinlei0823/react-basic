import React from "react"
//App 父组件 Son子组件

//函数式的Son
function SonF(props){
    console.log(props)
    //props是一个对象，里面存着通过父组件传入的所有数据
    return(
        <>
            <div>我是函数式子组件</div>
            <div>我是函数式子组件,{props.list.map(item =><p key={item}>{item}</p>)}</div>
            <div>{props.name}</div>
            <div>{props.span}</div>
            <button onClick={props.getMsg}>点我啊</button>
        </>
    )
}


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
