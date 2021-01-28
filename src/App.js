
import './App.css';
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'

import layoutImage_1 from './img/bg1.jpg'
import layoutImage_2 from './img/bg2.jpg'
import layoutImage_3 from './img/bg3.jpg'

const App = () => {
  return (
    <>
      <Header title="This is Tittle" descr="This is description" />
      <Layout id="layout_1" title="This is first Layout" descr="Discription for first Layout" urlBg={layoutImage_1} colorBg="green" />
      <Layout id="layout_2" title="This is second Layout" descr="Discription for second Layout" urlBg={layoutImage_2} colorBg="red" />
      <Layout id="layout_3" title="This is third Layout" descr="Discription for third Layout" urlBg={layoutImage_3} colorBg="blue" />
      <Footer />
    </>

  )
}

export default App;
