var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    render: function() {
            return (
                <div className='contactItem'>
                    <span className='icon glyphicon glyphicon-user'></span>
                        <div className='content'>
                            <p className='contactLabel'>First Name: {this.props.item.firstName}</p>
                            <p className='contactLabel'>Last Name: {this.props.item.lastName}</p>
                            <a className='contactEmail' href={'mailto:' + this.props.email}>Email: {this.props.item.email}</a>
                        </div>
                </div>
                )
        }
});