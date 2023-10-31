import { Provider } from 'react-redux';
import store from './src/store/store';
import Layout from './src/Layout/Layout';

export default function App() {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
}