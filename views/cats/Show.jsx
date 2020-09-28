const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        const { name, breed, sex, age, color, details, dateAvailable, location, isCatDeclawed, isCatFixed, image, _id } = this.props.cats;
        return (
            <Default>
                <div class="showCat">
                    <h1>{name}</h1>
                    <img src={image} className="Image" height="300px" width="30%" /><br />
                    <p>Breed</p>
                    <h2>{breed}</h2>
                    <p>Sex</p>
                    <h2>{sex}</h2>
                    <p>Age</p>
                    <h2>{age}</h2>
                    <p>Color</p>
                    <h2>{color}</h2>
                    <p>Details</p>
                    <h2>{details}</h2>
                    <p>Date Available</p>
                    <h2>{dateAvailable}</h2>
                    <p>Location</p>
                    <h2>{location}</h2>
                    <p>Declawed</p>
                    <h2>{isCatDeclawed ? `The cat is declawed` : `The cat is NOT declawed`}</h2>
                    <p>Fixed</p>
                    <h2>{isCatFixed ? `The cat is fixed` : `The cat still needs to be fixed`}</h2>
                    <a href={`/cats/${_id}/edit`}>Edit</a>
                    <form action={`/cats/${_id}/?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete This Cat" /> 
                        </form>
                        {this.props.children}
                </div>
            </Default>
        )
    }
};

module.exports = Show;