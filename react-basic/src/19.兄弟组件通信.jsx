import React from "react";
/**
 * 兄弟组件之间传值
 * 先把B组件中的数据通过子传父的方式传给App
 * 在把App组件中接收到的数据通过父传子传给A
 */
function SonA(props){
    return(
        <>
            <div>
                我是子组件A
            </div>
            <div>{props.setMsg}</div>
        </>
    )
}

function SonB(props){
    const msg = "我是来自子组件B的数组"
    const {getSonBMsg} = props
    return(
        <>
            <div>
                我是子组件B
            </div>
            <button onClick={()=>{getSonBMsg(msg)}}>click me</button>
        </>
    )
}

class App extends React.Component{
    //组装数据
    state ={
        setMsg:'我是来自父组件数据App'
    }
    getSonBMsg= (msg)=>{
        console.log(msg)
        this.setState({
            setMsg:msg
        })
    }
    render() {
        return(
            <>
                <div>我是父组件</div>
                <SonA setMsg={this.state.setMsg}/>
                <SonB getSonBMsg={this.getSonBMsg}/>
            </>
        )
    }
}

export default App
