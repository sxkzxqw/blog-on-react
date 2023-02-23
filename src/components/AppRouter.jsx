import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';
import { authContext } from './context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(authContext);
    
    if (isLoading) {
        return <Loader />
    }
    
    return (
        isAuth 
            ?           <Routes>
            {privateRoutes.map(route =>
                <Route 
                    path = {route.path}
                    element={<route.component />}
                    exact={route.exact}
                    key={route.path}
                    />
            )}
            <Route path="/*" element={<Navigate to="/posts/" replace />} />
            </Routes>
            :   <Routes>
            {publicRoutes.map(route =>
                <Route 
                    path = {route.path}
                    element={<route.component />}
                    exact={route.exact}
                    key={route.path}
                    />
            )}
            <Route path="/*" element={<Navigate to="/login/" replace />} />
            </Routes>
    );
};

export default AppRouter;

/* <Route path="/about" element={<About />} />
<Route exact path="/posts" element={<Posts />} />
<Route exact path="/posts/:id" element={<PostIdPage />} />
<Route path="/error" element={<Error />} /> */