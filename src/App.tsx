
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Users from "./pages/user";
import Edit from "./pages/user/edit";


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/user' element={<Users/>}/>
                <Route path='/users/edit/:id' element={<Edit />} />
                {/*<Route path='/user' element={<Users/>}>*/}
                {/*    <Route index element={<Users/>}/>*/}
                {/*    <Route path='create' element={<UserCreate/>}/>*/}
                {/*    <Route path='detail/:id' element={<UserDetail/>}/>*/}
                {/*    <Route path=':id/edit' element={<UserEdit/>}/>*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
