import { observer } from 'mobx-react-lite';

import { Header } from 'components/Header/Header.jsx';

const App = observer(() => {
  // const { basketStore } = useStore();

  return (
  <div>
    <Header />
  </div>);
});

export default App;