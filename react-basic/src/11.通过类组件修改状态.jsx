//通过类组件修改状态的方式counter
import React  from "react";
class Counter extends React.Component{
    //1.定义组件状态
    state = {
        //在这里可以定义各种属性，全都是当前组件的状态
        count:0,
        list:[1,2,3],
        person:{
            age:25,
            name:'rose'
        }
    }
    //时间回调好书
    changeCount = () =>{
        //3.修改state中的状态name
        //注意：不可以直接做复制修改 必须填通过一个方法setState修改
        this.setState({
            count: this.state.count+1
        })
        //数组修改
        this.setState({
            list:[...this.state.list,4,5]
        })
        //对象修改
        this.setState({
            person:{
            ...this.state.person,
                name:'jack'
            }
        })

    }
    render() {
        //2.使用状态
        return(
            <div>
                {/*<div>{this.state.count}</div>*/}
                {/*<button onClick={this.changeCount}>click</button>*/}

                <ul>
                    {this.state.list.map((item)=><li key={item}>{item}</li>)}
                </ul>
                <div>{this.state.person.name}</div>
                <button onClick={this.changeCount}>click</button>
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
            <Counter/>
        </>
    );
}
export default App
