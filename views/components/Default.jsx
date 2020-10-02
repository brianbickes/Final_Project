const React = require('react');
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                        crossorigin="anonymous"
                    />
                    <title>Furever Home</title>
                </head>
                <body>
                    <div class="homeContainer">
                        <div class="pageTop">
                            <img class="dogBanner" src="https://i.imgur.com/1XuecUo.png" height="100px" width="180px"></img>
                            {/* <h1>Furever Home</h1> */}
                        </div>
                        <Nav class="navBar" fill variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/dogs" eventKey="dogs">Dogs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/cats" eventKey="cats">Cats</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/maps" eventKey="maps">Area Map</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/request" eventKey="requests">Adoption Request</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/stats" eventKey="stats">County Shelter Statistics</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {/* <nav class="navBar">
                            <a class="dropbtn" href="/">Home</a>
                            <div class="dropdown">
                                <div class="dropdown-content">
                                    <a href="/dogs">Dogs</a>
                                    <a href="/cats">Cats</a>
                                    <a href="/maps">Local Map</a>
                                    <a href="/request">Adoption Request</a>
                                </div>
                            </div>
                        </nav> */}
                        <div>
                            <img class="dog" src="https://i.imgur.com/vLA7Lnx.png" wodth="100%"></img>
                        </div>


                        {this.props.children}
                        <footer>
                            <></>
                        </footer>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Default;