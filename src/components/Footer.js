import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Footer = (props) => {
	const {
		time
	} = props;
	return (
		<div>
			<div style={{ textAlign: 'center', margin: 20 }}>
				{time && `Currencies rates timestamp: ${moment(time * 1000).format('Do MMM YYYY, h:mm a')}`}
			</div>
			<div style={{ textAlign: 'center', margin: 20, fontWeight: 'bold' }}>&copy; 2017 <a href="https://github.com/ckomop0x">Pavel Klochkov</a></div>
		</div>
	);
};

Footer.propTypes = {
	time: PropTypes.number
};

export default Footer;
