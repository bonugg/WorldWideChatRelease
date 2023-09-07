import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
import { GoogleOAuthProvider } from '@react-oauth/google'



const App = () => {
    const clientId = '879795063670-a2a8avf7p2vnlqg9mc526r8ge2h5cgvc.apps.googleusercontent.com'

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <Routes>
                <Route index component={Home} element={<Home />} />
                {/*<Route path='/chatroom/:{id}' element={<ChatRoom/>}/>*/}
                {/*<Route path="/" element={<Layout />}>*/}
                {/*    <Route path="/about" element={<About />} />*/}
                {/*    <Route path="/profiles/:username" element={<Profile />} />*/}
                {/*    <Route path="/articles" element={<Articles />}>*/}
                {/*        <Route path=":id" element={<Article />} />*/}
                {/*    </Route>*/}
                {/*    <Route path="/mypage" element={<MyPage/>} />*/}
                {/*    <Route path="/mypage2" element={<MyPage2 />} />*/}
                {/*</Route>*/}

                {/*<Route path="/login" element={<Login />} />*/}
                {/*<Route path="/join" element={<Join />} />*/}
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        </GoogleOAuthProvider>
    );
};

export default App;
