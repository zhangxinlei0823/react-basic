import React, {createContext} from "react";
/**
 * 跨组件通信
 * App->A->C
 * App数据->C
 * 1.导入createContext方法并执行，解构提供者和消费者
 */
const {Provider,Consumer}= createContext()
function ComA(){
    return(
        <>
            <div>
                我是子组件A
            </div>
            <ComC/>
        </>
    )
}

function ComC(){
    return(
        <>
            <div>
                我是子组件C
                <Consumer>
                    {value => <span>{value}</span>}
                </Consumer>
            </div>
        </>
    )
}

class App extends React.Component{
    //组装数据
    state={
        message:'this is App'
    }
    render() {
        return(
            <Provider value={this.state.message}>
                <div>我是根组件App</div>
                <ComA/>
            </Provider>
        )
    }
}

export default App
