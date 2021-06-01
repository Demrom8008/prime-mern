import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import 'materialize-css'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/Navbar";
import {Loader} from "./components/Loader";

function App() {
    const {login, logout, token, userId, ready} = useAuth()
    const isAuth = !!token
    const routes = useRoutes(isAuth)

    if (!ready) {
        return <Loader/>
    }
    return (
        <AuthContext.Provider value={{login, logout, token, userId, isAuth}}>
            <BrowserRouter>
                {isAuth && <Navbar/>}
                <div>
                    {routes}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
