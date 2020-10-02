const React = require('react');
const Default = require('../components/Default');

class Index extends React.Component {
    render() {
        return (
            <Default>
                
                    {
                        this.props.dogs.map((dogs) => {
                            return (
                                
                                <div class="createDogs" key={dogs._id}>
                                    <div class="createDogs">
                                        <span><img src={dogs.image} className="dogImage" height="300px" width="30%" /></span><br />
                                        <h1><a href={`/dogs/${dogs._id}`}>{dogs.name}</a></h1>
                            <h2> {dogs.breed}</h2>
                                    </div>
                                    {this.props.children}
                                </div>)
                        })
                    }
                
            </Default>
        )
    }
}
module.exports = Index;