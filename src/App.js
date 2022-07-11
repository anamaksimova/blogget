import Header from './components/Header';
import Main from './components/Main';
import {store} from './store';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';


const App = () => (
  <Provider store={store}>
    <AuthContextProvider>
      <PostsContextProvider>
        <Header />
        <Main />
      </PostsContextProvider>
    </AuthContextProvider>
  </Provider>
);

export default App;
