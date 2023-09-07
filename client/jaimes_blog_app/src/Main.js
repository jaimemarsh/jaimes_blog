import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/Home"

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Main() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
            </Routes>
        </Router>
    );
}

export default Main;

