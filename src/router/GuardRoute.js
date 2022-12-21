import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

import Loading from "../components/UI/Loading";
import { RouteKey } from "./RouteKey";

const GuardRoute = () => {
    const { user, isLoading } = useAuth();
    if (isLoading) return <Loading />;
    return user == null ? (
        <Navigate to={RouteKey.auth.login} replace={true} />
    ) : (
        <Outlet />
    );
};

export default GuardRoute;
