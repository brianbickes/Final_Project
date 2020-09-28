const React = require('react');
const Default = require('../components/Default');

class Index extends React.Component {
    render() {
        return (
            <Default>
                
                    {
                        this.props.cats.map((cats) => {
                            return (
                                <div class="createCats" key={cats._id}>
                                    <div class="createCats">
                                        <span><img src={cats.image} className="Image" height="300px" width="30%" /></span><br />
                                        <h1><a href={`/cats/${cats._id}`}>{cats.name}</a></h1>
                            <h2> {cats.breed}</h2>
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