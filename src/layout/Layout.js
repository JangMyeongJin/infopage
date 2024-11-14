import Header from "../component/Header";
import Footer from "../component/Footer";
import Navbar from '../component/Navbar';


const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;