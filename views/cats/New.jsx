const React = require('react');
const Default = require('../components/Default');


class New extends React.Component {
    render(){
        return (
            <Default>
            <div>
                
                <form class="catsNew" action="/cats" method="POST">
                   
                    <h1>New Cat Page</h1>
                    <label HTMLFor="name">Cat name</label><input type="text" name="name" id="name"></input><br/>
                    <label HTMLFor="breed">Breed</label><input type="text" name="breed" id="breed"></input><br/>
                    <label HTMLFor="sex">Sex</label><input type="text" name="sex" id="sex"></input><br/>
                    <label HTMLFor="age">Age</label><input type="number" name="age" id="age"></input><br/>
                    <label HTMLFor="color">Color</label><input type="text" name="color" id="color"></input><br/>
                    <label HTMLFor="details">Details</label><input type="text" name="details" id="details"></input><br/>
                    <label HTMLFor="dateAvailable">Date Available</label><input type="text" name="dateAvailable" id="dateAvailable"></input><br/>
                    <label HTMLFor="location">Location</label><input type="text" name="location" id="location"></input><br/>
                    <label HTMLFor="isCatFixed">Is Cat Spayed or Neutered?</label><input type="checkbox" name="isCatFixed" id="isCatFixed"></input><br/>
                    <label HTMLFor="isCatDeclawed">Is Cat Declawed?</label><input type="checkbox" name="isCatDeclawed" id="isCatDeclawed"></input><br/>
                    <label HTMLFor="image">Image</label><input type="text" name="text" id="image"></input><br/>
                    <input type="submit" value="Create New Cat for Adoption"></input>
                </form>
            </div>
             </Default>
        )
    }
};

module.exports = New; 