import React from 'react';
import Company from "./Company";


class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: null,
            isSelected: false,
            company:{
                companyName: "",
                id: "",
                register_no: ""
            }
        };

        this.searchInput = React.createRef();

        this.handler = this.handler.bind(this);

        this._handleSubmit = this._handleSubmit.bind(this);
    }

    handler(e){
        this.setState({
            isSelected: false
        })
    }

    _handleSubmit(e) {
        e.preventDefault();
        if(this.state.query ===null) return;
        this.setState({isSelected: true});
    }

    handleInputChange(){
        let dropDownField = document.getElementById('dropDown-li');
        if(dropDownField) dropDownField.innerHTML = "";
        this.setState({
            query: this.refs.searchInput.value
        }, () => {
            if(this.state.query.length > 0) this.bindEvent(this.state.query)
        })
    }

    doCORSRequest(options, printResult) {
        let cors_api_url = 'https://cors-anywhere.herokuapp.com/';
        let x = new XMLHttpRequest();

        x.open(options.method, cors_api_url + options.url);
        x.onload = x.error = function() {
            printResult(JSON.parse(x.responseText) || '');
        };
        x.send(options.data);
    }

    bindEvent(keyWord) {
        let urlField = "https://app.fincompare.de/api/v1/company?q="+keyWord;
        let outputField = document.getElementById('searchInfo');
        let dropDownField = document.getElementById('dropDown-li');
        this.doCORSRequest({
            method: 'GET',
            url: urlField
        },
             (result =>{
            dropDownField.innerHTML = "";

            result.forEach(company => {
                let aElement = document.createElement("a");
                aElement.appendChild(document.createTextNode(company.name));

                aElement.onclick = function () {
                    let inputField = document.getElementById("myInput");
                    inputField.value = aElement.innerHTML;
                };

                let dropdown =document.getElementById('dropDown-li');
                if(dropdown!=null) dropdown.appendChild(aElement);
            });

            this.setState({
                company:{
                    companyName: result[0].name,
                    id: result[0].id,
                    register_no: result[0].register_no
                }
            });
            outputField.innerHTML = result.length + " Companies were found in this search.";
        }));

    }

    render() {

        if(this.state.isSelected) {
            return <Company handler={this.handler} companyName={this.state.company.companyName} id={this.state.company.id} register_no={this.state.company.register_no}/>
        }
        return (
            <div className="search-page">
                <h1>Company Search Form</h1>

                <header className="main-header">
                    <p id="main_subtitle">Please search for the company name to proceed next step</p>
                </header>

                <p id="searchInfo"></p>
                <form className="dropdown" onSubmit= {this._handleSubmit}>
                    <div id="myDropdown" className="dropdown-content">
                        <input autoComplete="off" ref="searchInput" onChange={ e => this.handleInputChange(e)} className="search-page__input" placeholder="Unternehmensname" type="text" id="myInput" />
                        <button className="btnSearch">Search</button>
                        <div id="dropDown-li"></div>
                    </div>
                </form>
            </div>
        );
    }

}

export default Search;
