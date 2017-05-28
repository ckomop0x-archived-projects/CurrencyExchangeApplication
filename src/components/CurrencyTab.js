import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';


const styles = {
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400,
	},
};

export default class CurrencyTab extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: 'a',
		};
	}

	handleChange = (value) => {
		this.setState({
			value: value,
		});
	};

	render() {
		return (
			<Tabs
				value={this.state.value}
				onChange={this.handleChange}
			>
				<Tab label="USD" value="a">
					<div>
						{/*<h2 style={styles.headline}>USD</h2>*/}
						<TextField
							hintText="Input amount"
							floatingLabelText="USD"
							defaultValue={0}
						/>
					</div>
				</Tab>
				<Tab label="EUR" value="b">
					<div>
						<h2 style={styles.headline}>EUR</h2>
						<p>
							This is another example of a controllable tab. Remember, if you
							use controllable Tabs, you need to give all of your tabs values or else
							you wont be able to select them.
						</p>
					</div>
				</Tab>
				<Tab label="GBR" value="c">
					<div>
						<h2 style={styles.headline}>GBR</h2>
						<p>
							This is another example of a controllable tab. Remember, if you
							use controllable Tabs, you need to give all of your tabs values or else
							you wont be able to select them.
						</p>
					</div>
				</Tab>
			</Tabs>
		);
	}
}