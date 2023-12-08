import { observer } from 'mobx-react-lite';

import { Header } from 'components/Header/Header.jsx';
import { Hero } from 'components/Hero/Hero.jsx'

const App = observer(() => {
  // const { basketStore } = useStore();

  return (
  <div>
    <Header />
    <Hero/>
  </div>);
});

export default App;