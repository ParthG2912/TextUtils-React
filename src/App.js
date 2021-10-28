import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#0d1d3d';
            showAlert('Dark mode has been enabled', 'success');
            // document.title = 'TextUtils - DarkMode';
            // setInterval(() => {
            //     document.title = 'TextUtils is Amazing';
            //     setTimeout(() => {
            //         document.title = 'Install TextUtils';
            //     }, 500);
            // }, 2000);
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('Light mode has been enabled', 'success');
            // document.title = 'TextUtils - LightMode';
        }
    };
    return (
        <>
            <Router>
                {/* <Navbar title="TextUtils" aboutText="about" /> */}
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Switch>
                        <Route exact path="/about">
                            <About mode={mode} />
                        </Route>
                        <Route exact path="/">
                            <TextForm
                                showAlert={showAlert}
                                // heading="Enter the text below to Analyze"
                                heading="Try TextUtils - Word counter, Character counter, Remove extra spaces"
                                mode={mode}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
