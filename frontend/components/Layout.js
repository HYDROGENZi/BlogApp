import Header from "./Header";
const Layout = ({children})=>{
    return(
        <React.Fragment>
            <Header />
            <p>Header</p>
                {children}
            <p>Footer</p>
        </React.Fragment>
    )
}

export default Layout;