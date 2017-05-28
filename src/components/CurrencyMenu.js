import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class CurrencyMenu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: 'EUR',
			rates: {
				EUR: this.props.rates.EUR,
				USD: this.props.rates.USD,
				GBP: this.props.rates.GBP
			}
		};
	}
	handleChange = (event, index, value) => this.setState({value});
	componentDidMount() {
		this.setState({rates: this.props.rates});
		console.log('Before mount', this.props.rates);
	}
	render() {
		const items = [];
		Object.keys(this.props.rates).map(item => {
			items.push(<MenuItem value={item} key={item} primaryText={`${item}: ${this.state.rates[item]}`} />);
			return true;
		});
		return (
			<DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
				{items}
			</DropDownMenu>
		);
	}
}