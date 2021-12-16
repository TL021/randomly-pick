import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import LeftMenu from '../components/leftMenu/leftMenu'

import homeStyle from '../styles/Home.module.css'

export default function Customized() {
  return (
    <>
    <LeftMenu/>
      {/* <Header/>
      <div className={homeStyle.main}>
        <div className={homeStyle.developing}>Developing...</div>
      </div>
      <Footer/> */}
    </>
  )
}