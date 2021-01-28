
import './App.css';
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Header title="This is Tittle" descr="This is description" />
      <Layout id="layout_1" title="This is first Layout" descr="Discription for first Layout" urlBg colorBg="green" />
      <Layout id="layout_2" title="This is second Layout" descr="Discription for second Layout" urlBg={false} colorBg="red" />
      <Layout id="layout_3" title="This is third Layout" descr="Discription for third Layout" urlBg colorBg="blue" />
      <Footer />
    </>

  )
}

export default App;
