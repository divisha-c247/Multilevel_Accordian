import { Provider } from "react-redux"
import ParentElement from "./ParentElement"
import Store from '../store/Store'

function Main(){
return(
    <>
    <Provider store={Store}>
    <header className="header"/>
    <ParentElement/>
    </Provider>
    </>
)
}

export default Main