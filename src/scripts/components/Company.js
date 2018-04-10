import React from 'react';

class Company extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            company: {
                name: props.companyName,
                id: props.id,
                register_no: props.register_no
            }
        };
    }

    render() {
        if (!this.state.company) {
            return (<div className="user-page">LOADING...</div>);
        }

        const company = this.state.company;

        return (
            <div className="user-page">
                <div className="user-info">
                    <div className="companyName">
                        <span><p> {company.name} </p></span>
                    </div>

                    <div className="companyInfo">
                        <div id="companyInfo-id">
                            <span>
                                <h4> Id.N. : </h4>
                                <p> {company.id} </p>
                            </span>
                        </div>
                        <div id="companyInfo-reg">
                            <span>
                                <h4> Register N. : </h4>
                                <p> {company.register_no} </p>
                            </span>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
};

export default Company;
