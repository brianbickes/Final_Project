const React = require('react');
const Default = require('../components/Default');
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'


class Home extends React.Component {
    render(){
        return(
            <Default>
        <Jumbotron class="statement" fluid>
  <Container class="statementText">
    <h1>“Morty saved me as much as I saved him.” - Shonda L, who adopted her Cavapoo, Morty, in January 2020</h1>
    <h2 class="mission">
    Here at Furever Home, we believe in the powerful bond created between an animal and their human. So, we’re on a mission to connect you with the purfect dog or cat through our adoption services.
    </h2>
    <h4>
   <strong>HOW IT WORKS: </strong>
Simply browse the available animals using the toolbar above. Once you find a furry friend you’re interested in, click “Adopt me” to begin your application.
<br/>
<br/>
We’ll process your information and reach out via your preferred contact method with next steps.
<br/>
<br/>
On behalf of everyone at Furever Home, thank you for making a difference in the lives of these precious creatures.
    </h4>
  </Container>
</Jumbotron>
<center><iframe class="video" width="700" height="420" src="https://www.youtube.com/embed/XVl0sQLQ05M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
            </Default>
        )
    }
};

module.exports = Home; 