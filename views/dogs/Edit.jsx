const React = require('react');
const Default = require('../components/Default');

class Edit extends React.Component {
  render() {
    const { name, breed, sex, age, color, details, dateAvailable, location, isDogFixed, image, _id } = this.props.dogs;
    const id = _id;
    return (
      <Default>
        <div>
          <form action={`/dogs/${id}/?_method=PUT`} method="POST">
          <label htmlFor="name">Cat Name: </label><input type="text" name="name" id="name" defaultValue={name} /><br />
            <label htmlFor="breed">Breed:</label><input type="text" name="breed" id="breed" defaultValue={breed} /><br />
            <label htmlFor="sex">Sex:</label><input type="text" name="sex" id="sex" defaultValue={sex} /> <br />
            <label htmlFor="age">Age:</label><input type="text" name="age" id="age" defaultValue={age} /> <br />
            <label htmlFor="color">Color: </label><input type="text" name="color" id="color" defaultValue={color} /> <br />
            <label htmlFor="details">Details: </label><input type="text" name="details" id="details" defaultValue={details} /> <br />
            <label htmlFor="dateAvailable">Date Available:</label><input type="text" name="dateAvailable" id="dateAvailable" defaultValue={dateAvailable} /> <br />
            <label htmlFor="isDogFixed">Spayed or Neutered: </label><input type="checkbox" name="isDogFixed" id="isDogFixed" defaultValue={isDogFixed} /> <br />
            <label htmlFor="location">Location:</label><input type="text" name="location" id="location" defaultValue={location} /> <br />
            <label htmlFor="image">Image:</label><input type="text" name="image" id="image" defaultValue={image} /> <br />
            
            <input type="submit" value="Edit Class" />
          </form>
        </div>
      </Default>
    )
  }
}
module.exports = Edit;