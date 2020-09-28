const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
                    <title>Sable's Sanctuary</title>
                </head>
                <body>
                    <div class="homeContainer">
                    <h1>Adoptions</h1>
                    <nav class="navBar">
                        <a class="dropbtn" href="/">Home</a>
                        <div class="dropdown">
                            <button class="dropbtn">Adoptable Pets</button>
                            <div class="dropdown-content">
                                <a href="/dogs">Dogs</a>
                                <a href="/cats">Cats</a>
                            </div>
                        </div>
                    </nav>

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