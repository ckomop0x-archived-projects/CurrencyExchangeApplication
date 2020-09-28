import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const { time } = props;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <div style={{ textAlign: 'center', margin: 20 }}>
        {time && `Currencies rates timestamp: ${moment(time * 1000).format('Do MMM YYYY, h:mm a')}`}
      </div>
      <div style={{ textAlign: 'center', margin: 20, fontWeight: 'bold' }}>
        &copy; 2017-{year} &nbsp;
        <a href="http://ckomop0x.github.io" style={{ color: '#004d9a', textDecoration: 'none' }}>
          Pavel Klochkov
        </a>
      </div>
    </div>
  );
};

Footer.propTypes = {
  time: PropTypes.number
};

export default React.memo(Footer);
