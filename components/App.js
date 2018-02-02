var contacts = [
	{
		id: 1,
		firstName: 'Jan',
		lastName: 'Kowalski',
		email: 'jan.kowalski@example.com'
	},
	{
		id: 2,
		firstName: 'Adam',
		lastName: 'Nowak',
		email: 'adam.nowak@example.com'
	},
	{
		id: 3,
		firstName: 'Anna',
		lastName: 'Ulatowska',
		email: 'anna.ulatowska@example.com'
	}
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
}

var App = React.createClass({
    render: function() {
		return (
			<div className='app'>
				<ContactForm  contact={contactForm}/>
				<Contacts items={contacts}/>
			</div>
		)
    }
});