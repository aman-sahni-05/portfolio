import AboutHome from './assets/components/About/AboutHome.jsx'
import ContactMe from './assets/components/Contact/ContactMe.jsx'
import Footer from './assets/components/Footer.jsx'
import Header from './assets/components/Home/Header.jsx'
import Main from './assets/components/Home/Main'
import ServicesHome from "./assets/components/Services/servicesH/ServicesHome"
import SkillsHome from './assets/components/Skills/SkillsHome.jsx'


export default function Home() {
  return (
    <div>
      <div id='home'>
        <Header />
        <Main />
      </div>
      <div id='services'>
        <ServicesHome />
      </div>
      <div id='aboutMe'>
        <AboutHome />
      </div>
      <div id='skills'>
        <SkillsHome />
      </div>
      <Footer />
    </div>
  )
}
