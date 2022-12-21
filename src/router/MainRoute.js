import { Navigate, Route, Routes } from "react-router-dom";

import ActivePage from "../pages/ActivePage";
import AddPage from "../pages/AddPage";
import ArchivePage from "../pages/ArchivePage";
import NotFoundPage from "../pages/NotFoundPage";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import GuardRoute from "./GuardRoute";
import GuestRoute from "./GuestRoute";
import { RouteKey } from "./RouteKey";

const MainRoute = () => (
    <Routes>
        <Route element={<GuestRoute />}>
            <Route path={RouteKey.auth.login} element={<LoginPage />} />
            <Route path={RouteKey.auth.register} element={<RegisterPage />} />
        </Route>
        <Route element={<GuardRoute />}>
            <Route
                index
                element={<Navigate to={RouteKey.main.index} replace />}
            />
            <Route path={RouteKey.main.new} element={<AddPage />} />
            <Route path={RouteKey.main.detail} element={<DetailPage />} />
            <Route path={RouteKey.main.index} element={<HomePage />}>
                <Route index element={<ActivePage />} />
                <Route
                    path={RouteKey.main.archived}
                    element={<ArchivePage />}
                />
            </Route>
        </Route>
        <Route path={RouteKey.error.notFound} element={<NotFoundPage />} />
        <Route
            path={RouteKey.all}
            element={<Navigate to={RouteKey.error.notFound} replace />}
        />
    </Routes>
);

export default MainRoute;
