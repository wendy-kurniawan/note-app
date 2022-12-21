import { Outlet } from "react-router-dom";
import Tab from "../layouts/Tab";

const HomePage = () => {
    return (
        <main>
            <Tab />
            <Outlet />
        </main>
    );
};

export default HomePage;
