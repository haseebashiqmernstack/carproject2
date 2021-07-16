import Header from "../header"

const Layout=(props)=>{
    return (<>
    <Header/>
    <div>
        {
            props.children
        }
    </div>
    </>)
}
export default Layout;