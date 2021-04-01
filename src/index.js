import ReactDom from 'react-dom'
import './index.css'
import ReducerBasic from './components/useReducer/ReducerBasic'
const App = () =>{
    return(
        <div className="index">
            <h2>Todo App</h2>
            <ReducerBasic />
            
        </div>
    )
}
ReactDom.render(<App />,document.getElementById('root'))
