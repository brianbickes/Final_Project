const React = require('react');
const Default = require('../components/Default');
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


class Stats extends React.Component {
    render() {
        return (
            <Default>


                <h1 class="statsHeadline">Maricopa County Animal Shelter Statistics</h1>
                <Container fluid>
                    <Row>
                        <Col><img src="https://i.imgur.com/e8QNk7o.jpg" /></Col>
                        <Col><img src="https://i.imgur.com/YBGN3oA.jpg" /></Col>
                        <Col><img src="https://i.imgur.com/gRkyhlA.jpg" /></Col>
                    </Row>

                </Container>

            </Default>
        )
    }
};

module.exports = Stats; 