import React from "react";

class Counter extends React.Component{
    //1.声明用来控制input value的react组件自己的状态
    state = {
        message:'this is message'
    }
    // 回调函数
    inputChange = (e) =>{
        console.log('change事件触发了',e)
        //4.拿到输入框最新的值交给state中的message
        this.setState({
            message:e.target.input
        })
    }
    //产出UI模板结构
    render() {
        return(
            //2.给Input框value属性绑定react state
            //3.给Input框绑定一个change的事件为了拿到当前输入框中的数据
            <input
                type='text'
                value={this.state.message}
                onChange={this.inputChange}/>
        )
    }
}

function App(){
    return(
        <div className="App">
            <Counter/>
        </div>
    )
}

export default App
