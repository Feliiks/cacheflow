var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
var App = function () {
    useEffect(function () {
        window.process = __assign({}, window.process);
    }, []);
    return (React.createElement(Container, { style: { width: "400px" } },
        React.createElement(Row, null,
            React.createElement(Col, null,
                React.createElement(UserAuthContextProvider, null,
                    React.createElement(Routes, null,
                        React.createElement(Route, { path: "/home", element: React.createElement(ProtectedRoute, null,
                                React.createElement(Home, null)) }),
                        React.createElement(Route, { path: "/", element: React.createElement(Login, null) }),
                        React.createElement(Route, { path: "/signup", element: React.createElement(Signup, null) })))))));
};
export default App;
//# sourceMappingURL=App.js.map