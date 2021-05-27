import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Author from "./components/Author/Author";
import Footer from "./components/Footer/Footer";

import './App.css';


function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/reload">
                        <div>
                            <Redirect to="/"/>
                        </div>
                    </Route>
                    <Route exact={true} path="/:name">
                        <Author/>
                    </Route>
                    <Route exact={true} path="/">
                        <Home/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
