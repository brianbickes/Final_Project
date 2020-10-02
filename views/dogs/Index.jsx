const React = require('react');
const Default = require('../components/Default');
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Index extends React.Component {
    render() {
        return (
            <Default>
                <h1 class="indexHeadline">Dogs currently available in our shelter. </h1>
                    {
                        this.props.dogs.map((dogs) => {
                            return (
                                <div class="createDogs">
                                <Card style={{ width: '18rem' }}>
  <Card.Img class="dogImage" variant="top" src={dogs.image} />
  <Card.Body>
    <Card.Title>{dogs.name}</Card.Title>
    <Card.Text>
      {dogs.sex}
    </Card.Text>
    <Button  href={`/dogs/${dogs._id}`}variant="primary">Check me Out!</Button>
  </Card.Body>
</Card>

                                    {this.props.children}
                                </div>)
                        })
                    }
                
            </Default>
        )
    }
}
module.exports = Index;