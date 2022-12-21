import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

import Loading from "../components/UI/Loading";
import { RouteKey } from "./RouteKey";

const GuestRoute = () => {
    const { user, isLoading } = useAuth();
    if (isLoading) return <Loading />;
    return user ? (
        <Navigate to={RouteKey.main.index} replace={true} />
    ) : (
        <Outlet />
    );
};

export default GuestRoute;
