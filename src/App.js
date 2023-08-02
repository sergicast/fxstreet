import './App.scss';

import { Layout } from './containers/Layout';
import MainRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Layout>
        <MainRoutes />
      </Layout>
    </div>
  );
};

export default App;
