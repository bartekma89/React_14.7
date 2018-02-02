var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
                <form className='contactForm'>
                    <input 
                        type={'text'}
                        placeholder={'First Name'} 
                        value={this.props.contact.firstName}
                    />
                    <input 
                        type={'text'}
                        placeholder={'Last Name'}
                        value={this.props.contact.lastName}
                    />
                    <input 
                        type={'email'}
                        placeholder={'example@example.com'}
                        value={this.props.contact.email}
                    />
                    <button type={'submit'}>Add</button>
                </form>
            )
    }
});