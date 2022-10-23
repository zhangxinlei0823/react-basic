import React,{createRef} from "react";

class Input extends React.Component{
    msgRef = createRef()
    // 回调函数
    getValue = () =>{
        console.log(this.msgRef.current.value)
    }
    //产出UI模板结构
    render() {
        return(
            <>
                <input
                    type='text'
                    ref={this.msgRef}/>
                <button onClick={this.getValue}>获取输入框的值</button>
            </>
        )
    }
}

function App(){
    return(
        <div className="App">
            <Input/>
        </div>
    )
}

export default App
