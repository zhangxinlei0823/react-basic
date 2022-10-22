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
function App() {
  return (
      <>
         <TestComponent/>
      </>
  );
}
export default App
