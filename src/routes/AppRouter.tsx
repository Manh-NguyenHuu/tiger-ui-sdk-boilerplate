import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { WorkspaceProvider } from "../contexts/Workspace";
import Page from "../components/Page";

import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import Home from "./Home";

import styles from "./AppRouter.module.scss";
import Pivot from "./Pivot";
import Advances from "./Advances";
import InsightViewAndDashboardView from "./InsightViewAndDashboardView";
import Filters from "./Filters";
import PoPAndAm from "./PoPAndAM";
import Approximate from "./Approximate";

// Uncomment these lines if you want to redirect unauthorized users to login form
// import { useAuth } from "../contexts/Auth";
// import { AuthStatus } from "../contexts/Auth/state";
// const RedirectIfNotLoggedIn: React.FC = () => {
//     const auth = useAuth();
//     const shouldRedirectToLogin = auth.authStatus === AuthStatus.UNAUTHORIZED;
//     return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
// };

const AppRouter: React.FC = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                {/* WorkspaceProvider depends on Router so it must be nested */}
                <WorkspaceProvider>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/welcome" component={Welcome} />
                    <Route exact path="/dashboard" component={() => <Page>Dashboard</Page>} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/pivot" component={Pivot} />
                    <Route exact path="/advances" component={Advances} />
                    <Route exact path="/insightview-and-dashboardview" component={InsightViewAndDashboardView}/>
                    <Route exact path="/filters" component={Filters} />
                    <Route exact path="/pop-and-am" component={PoPAndAm} />
                    <Route exact path="/approximate" component={Approximate} />

                    {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                    {/* <RedirectIfNotLoggedIn /> */}
                </WorkspaceProvider>
            </Router>
        </div>
    );
};

export default AppRouter;