import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
<<<<<<< HEAD
=======
import Test from "./pages/Test";
>>>>>>> c82e50e831968181310407de35a5fd40b8a5f313
import { GoogleOAuthProvider } from '@react-oauth/google'



const App = () => {
    const clientId = '879795063670-a2a8avf7p2vnlqg9mc526r8ge2h5cgvc.apps.googleusercontent.com'

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <Routes>
                <Route index component={Home} element={<Home />} />
<<<<<<< HEAD
=======
                <Route path='/test' component={Test} element={<Test/>}/>
                {/*<Route path='/chatroom/:{id}' element={<ChatRoom/>}/>*/}
                <Route path="*" element={<NotFound />} />
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
>>>>>>> c82e50e831968181310407de35a5fd40b8a5f313
            </Routes>
        </GoogleOAuthProvider>
    );
};

export default App;
