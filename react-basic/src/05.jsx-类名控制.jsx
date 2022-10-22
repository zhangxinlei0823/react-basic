// jsx样式控制
// 1.行内样式-在元素身上绑定一个style属性即可
// 2.类名样式-在元素身上绑定一个className属性即可
import './app.css'
const style = {
    color: 'red',
    fontSize: '30px'
}
// 3.动态控制一个active类名，满足条件才有
const activeFlag = true
function App() {
    return (
        <div className="App">
            <div><span style={style}>this is span</span></div>
            <div><span className='active'>测试类名样式</span></div>
            {/*  动态控制类名是否展示 */}
            <div><span className={ activeFlag? 'active':'' }>动态控制类名</span></div>
        </div>
    );
}
export default App
