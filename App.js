import { Provider } from 'react-redux';
import Layout from './src/Layout';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
}