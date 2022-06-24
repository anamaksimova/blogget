import Header from "./components/Header";
import Main from "./components/Main";
// import {useToken} from './hooks/useToken';
// import {tokenContext} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';
import {PostsContextProvider} from './context/postsContext';
function App() {
  // const [token, delToken] = useToken('');
  // const {Provider} = tokenContext;
  // console.log(token);
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PostsContextProvider>
          <Header />
          <Main />
        </PostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>

  );
}

export default App;
