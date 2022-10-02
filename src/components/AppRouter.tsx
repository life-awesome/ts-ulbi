import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, RoutesNames} from "../routes";

const AppRouter = () => {
    const isAuth = true
    return (
        <Routes>
            {(isAuth ? privateRoutes : publicRoutes)
                .map((route) =>
                    <Route key={route.path} path={route.path} element={<route.component/>}/>)}
            <Route
                path="*"
                element={<Navigate to={isAuth ? RoutesNames.EVENT : RoutesNames.LOGIN} replace />}
            />
        </Routes>
    );
};

export default AppRouter;