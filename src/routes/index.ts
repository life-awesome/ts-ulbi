import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
    path: string;
    component: React.FC;
    exact?: boolean
}
export enum RoutesNames {
    LOGIN = '/login',
    EVENT = '/'
}
export const publicRoutes: IRoute[] = [
    {
        path: RoutesNames.LOGIN,
        component: Login,
        exact: true
    },
]
export const privateRoutes: IRoute[] = [
    {
        path: RoutesNames.EVENT,
        component: Event,
        exact: true
    }
]