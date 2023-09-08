
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Users from "./pages/user";


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/users' element={<Users/>}/>
                {/*<Route path='/notification' element={<Notification/>}>*/}
                {/*    <Route index element={<NotificationList/>}/>*/}
                {/*    <Route path='create' element={<AddNotification/>}/>*/}
                {/*    <Route path='detail/:id' element={<DetailNotification/>}/>*/}
                {/*    <Route path=':id/edit' element={<EditNotification/>}/>*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
