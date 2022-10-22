//组件状态类组件作为演示
import React  from "react";
class TestComponent extends React.Component{
    //1.定义组件状态
    state = {
        //在这里可以定义各种属性，全都是当前组件的状态
        name:'cp teacher'
    }
    //时间回调好书
    changeName = () =>{
        //3.修改state中的状态name
        //注意：不可以直接做复制修改 必须填通过一个方法setState修改
        this.setState({
            name: '旭哥'
        })
    }
    render() {
        //2.使用状态
        return(
            <div>
                this is TestComponent
                当前name为:{this.state.name}
                <button onClick={this.changeName}>修改name</button>
            </div>
        )
    }
}

/**
 总结
 1.编写组件其实就是编写原生js类或者函数
 2.定义状态必须通过state实例属性的方法提供一个对象 名称是固定的就叫做state
 3.修改state中的任何属性都不可以通过直接复制必须走setState方法这个方法来自于继承得到
 4.这里的state关键词很容易出现指向错误的问题续航面的写法是最推荐和最规范的没有this指向的问题
 */
//根组件
function App() {
    return (
        <>
            <TestComponent/>
        </>
    );
}
export default App
