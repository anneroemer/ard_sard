import Navbar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <div className="content">
            { children }
            <Navbar />
        </div>
      );
}
 
export default Layout;