const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        const { name, breed, sex, age, color, details, dateAvailable, location, isDogFixed, image, _id } = this.props.dogs;
        return (
            <Default>
                <div class="showDog">
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
                    {/* <p>Fixed</p>
                    <h2>{isDogFixed ? `The dog is fixed` : `The dog still needs to be fixed`}</h2> */}
                    <a href={`/dogs/${_id}/edit`}>Edit</a>
                    <form action={`/dogs/${_id}/?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete This Dog" /> 
                        </form>
                        {this.props.children}
                </div>
            </Default>
        )
    }
};

module.exports = Show;