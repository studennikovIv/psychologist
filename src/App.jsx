import { observer } from 'mobx-react-lite';

import { Header } from 'components/Header/Header.jsx';
import { Hero } from 'components/Hero/Hero.jsx'
import { BasicQueries } from 'components/BasicQueries/BasicQueries'

const App = observer(() => {
  // const { basketStore } = useStore();

  return (
  <div>
    <Header />
    <Hero/>
    <BasicQueries/>
  </div>);
});

export default App;