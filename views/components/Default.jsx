const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
                    <title>Furever Home</title>
                </head>
                <body>
                    <div class="homeContainer">
                        <div class="pageTop">
                            <img class="dogBanner" src="https://i.imgur.com/9rTNMgb.png" height="100px" width="100px"></img>
                            <h1>Furever Home</h1>
                        </div>
                        <nav class="navBar">
                            <a class="dropbtn" href="/">Home</a>
                            <div class="dropdown">
                                <div class="dropdown-content">
                                    <a href="/dogs">Dogs</a>
                                    <a href="/cats">Cats</a>
                                </div>
                            </div>
                        </nav>
                        <div>
                            <img class="dogBanner" src="https://i.imgur.com/L0xJkfa.jpg" height="400px" width="100%"></img>
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