import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
var ProtectedRoute = function (_a) {
    var children = _a.children;
    // @ts-ignore
    var user = useUserAuth().user;
    console.log("Check user in Private: ", user);
    if (!user) {
        return React.createElement(Navigate, { to: "/" });
    }
    return children;
};
export default ProtectedRoute;
//# sourceMappingURL=ProtectedRoute.js.map