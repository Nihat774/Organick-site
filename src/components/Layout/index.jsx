
import Header from '../HeaderComponents/Header'
import Footer from '../footerComponents/Footer'
function LayoutComponent({children}) {
  return (
    <>
     <Header /> 
     {children}
     <Footer/>
    </>
  )
}

export default LayoutComponent
