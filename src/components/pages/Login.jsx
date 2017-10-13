import React, {Component} from 'react';
import {Page, ContentBlockTitle, ContentBlock, List, ListItem, FormLabel, FormInput, Button} from 'framework7-react';
import axios from 'axios';
import Cookies from 'js-cookie';

const pStyle = {margin: '1em 0'};

export class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: "",
            password: "",
            error: ""
        };        
    }

    loginButtonClick() {
        this.setState({error: ""})
        axios.post(`https://api.tjedankarijera.info:443/api/login`, {
            email: this.state.email,
            zaporka: this.state.password
        }).then(function (response) {
            if(response.data === null) {
                this.setState({error: "Neispravna kombinacija e-maila i zaporke!"})
            }
            else {
                Cookies.set('email', this.state.email);
                Cookies.set('password', this.state.password);
            }
            this.props.closeLogin();
        }.bind(this))
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <Page loginScreen id="login">
                <img id="loginImg" src="http://cpsrk.foi.hr/sites/default/files/2017-09/tk2017_banner.jpg"></img>
                { this.state.error !== "" &&
                    <ContentBlock inset>
                        { this.state.error }
                    </ContentBlock>
                }
                <List form>
                    <ListItem>
                        <FormInput placeholder="E-mail" type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
                    </ListItem>
                    <ListItem>
                        <FormInput placeholder="Lozinka" type="text" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
                    </ListItem>
                </List>
                <Button id="loginButton" style={pStyle} onClick={this.loginButtonClick.bind(this)}>Prijavi se</Button>
            </Page>
        );
    }
};
