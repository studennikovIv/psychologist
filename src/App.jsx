import { observer } from 'mobx-react-lite';

import { Header } from 'components/Header/Header.jsx';
import { Hero } from 'components/Hero/Hero.jsx'
import { BasicQueries } from 'components/BasicQueries/BasicQueries'
import { Footer } from 'components/Footer/Footer';
import { AboutMe } from 'components/aboutMe/AboutMe';
import { Reviews } from 'components/Reviews/Reviews';

const App = observer(() => {
  // const { basketStore } = useStore();

  return (
  <div>
    <Header />
    <Hero/>
    <BasicQueries/>
    <AboutMe/>
    <Reviews/>
    <Footer/>
  </div>);
});

export default App;