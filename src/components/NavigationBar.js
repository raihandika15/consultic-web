/* eslint-disable jsx-a11y/anchor-is-valid */

import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <section className="header">
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <a className="navbar-brand">Consultic</a>
                    </Navbar.Brand>
                    <Nav>
                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item align-self-center">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item align-self-center">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item align-self-center">
                                    <a className="nav-link" href="#">Stories</a>
                                </li>
                                <li className="nav-item align-self-center">
                                    <a className="nav-link" href="#">Team</a>
                                </li>
                                <li className="nav-item align-self-center">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
    
                                <button className="btn px-4 btn-outline-warning ms-5" type="submit">Sign In</button>
                                <button className="btn px-4 btn-trinary ms-2" type="submit">Sign Up</button>
                            </ul>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </section>
    )
}

export default NavigationBar