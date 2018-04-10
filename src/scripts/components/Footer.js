import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="footer">
                <div className="logo_wrapper">
                    <img src="../../src/images/Datenschutzsiegel-tuev.png"/>
                    <img src="../../src/images/256BIT-SSL.png"/>
                    <img src="../../src/images/nortonsiteseal.png"/>
                </div>
            </div>
        );
    }
};

export default Footer;
