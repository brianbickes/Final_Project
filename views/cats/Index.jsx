const React = require('react');
const Default = require('../components/Default');
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Index extends React.Component {
    render() {
        return (
            <Default>
                <h1 class="indexHeadline">Cats currently available in our shelter.</h1>

                {
                    this.props.cats.map((cats) => {
                        return (
                            <div class="createCats">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img class="catImage" variant="top" src={cats.image} />
                                    <Card.Body>
                                        <Card.Title>{cats.name}</Card.Title>
                                        <Card.Text>
                                            {cats.sex}
                                        </Card.Text>
                                        <Button href={`/cats/${cats._id}`} variant="primary">Check me Out!</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            //     <div class="createCats" key={cats._id}>
                            //         <div class="createCats">
                            //             <span><img src={cats.image} className="catImage" height="300px" width="30%" /></span><br />
                            //             <h1><a href={`/cats/${cats._id}`}>{cats.name}</a></h1>
                            // <h2> {cats.breed}</h2>
                            //         </div>
                            //         {this.props.children}
                            //     </div>
                        )
                    })
                }

            </Default>
        )
    }
}
module.exports = Index;