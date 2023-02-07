import Navbar from ".././components/Navbar"
import Footer from ".././components/Footer"
const MainContent = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
    </div>
  )
}

export default MainContent