import React from "react";
import { BrowserRouter, Routes as Routed, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import { Container } from 'react-bootstrap';
import Store from "./pages/store";
import NavBar from "./components/NavBar";

const Routes = () => {
   return(  
        <Container className="mb-4">
            <BrowserRouter>
                <NavBar />
                <Routed>
                    <Route element = { <Home /> } path="/" />
                    <Route element = { <Store /> } path="/store" />
                    <Route element = { <About /> } path="/about" />
                </Routed>
            </BrowserRouter>
        </Container>
   )
}

export default Routes;