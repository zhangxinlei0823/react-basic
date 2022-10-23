import React from "react";
/**
 * 子组件给父组件传值
 * 子组件调用父组件传递过来的函数，并且把想要传递的数据当做函数的实参
 */
function Son(props){
    //解构函数
    const { getSonMsg } = props
    function clickHandler(){
        const sonMsg = '这是来自子组件的数据'
        getSonMsg(sonMsg)
    }
    return(
        <>
            <div>
                我是子组件
            </div>
            <button onClick={clickHandler}>click</button>
        </>
    )
}

class App extends React.Component{
    //准备数据
    state={
        list:[1,2,3]
    }
    getSonMgs=(sonMsg)=>{
        console.log(sonMsg)
    }
    render() {
        return(
            <>
                <div>我是父组件</div>
                <Son getSonMsg={this.getSonMgs}/>
            </>
        )
    }
}

export default App
