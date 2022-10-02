//1.识别常规的变量
//2.原生Js方法调用
//3.三元运算符(常用)
const name='柴柴老师'
const getAge = () =>{
    return 18
}
const flag = true
function App() {
  return (
    <div className="App">
        {name}
        {getAge()}
        {flag?'真棒':'真菜'}
    </div>
  );
}

export default App;
