import React from "react";

import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";

import MainRoute from "./router/MainRoute";

const App = () => (
    <>
        <Header>
            <h1>CatatanKu</h1>
            <Navigation />
        </Header>

        <MainRoute />
    </>
);

export default App;
