import React from "react"
//App 父组件 Son子组件

//函数式的Son
function SonF(props){
    //props是一个对象，里面存着通过父组件传入的所有数据
    return(
        <div>我是函数式子组件,{props.msg}</div>
    )
}

//类组件的Son
class SonC extends React.Component{
    //类组件必须通过this关键词，去获取这里的props是固定的
    render() {
        return(
            <>
                <div>我是类子组件,{this.props.msg}</div>
            </>
        )
    }
}


class App extends React.Component{
    //准备数据
    state={
        msg:'this is msg'
    }
    render() {
        return(
            <>
                <SonF msg={this.state.msg}/>
                <SonC msg={this.state.msg}/>
            </>
        )
    }
}

export default App
