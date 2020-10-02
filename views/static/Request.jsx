const React = require('react');
const Default = require('../components/Default');

class Request extends React.Component {
    render(){
        return(
            <Default>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiIk0nYro1_ZVWf9BjVl0iCs7wR0CfuhkY44AL15jKoCghyQ/viewform?embedded=true" width="100%" height="943" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Default>
        )
    }
};

module.exports = Request; 