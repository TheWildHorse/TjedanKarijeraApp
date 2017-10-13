import React, {Component} from 'react';
import {Page, ContentBlockTitle, List, ListItem, FormLabel, FormInput, Button} from 'framework7-react';
import {User} from '../services/User';


const pStyle = {margin: '1em 0'};

export class Form extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {
                bodovi: "-"
            },
            rang: [
                {
                    bodovi: "-"
                }
            ]
        };        
    }
    componentDidMount() {
        var us = new User();
        us.getUser(function(user) {
            this.setState({user: user});
        }.bind(this));
        us.getRang(function(rang) {
            this.setState({rang: rang});
        }.bind(this));
    }

    render() {
        return (
            <Page>
                <ContentBlockTitle>Bodovi</ContentBlockTitle>
                <List form id="points">
                    <ListItem>
                        <FormLabel>Tvoje stanje</FormLabel>
                        <FormInput type="text" value={this.state.user.bodovi} disabled/>
                    </ListItem>
                    <ListItem>
                        <FormLabel>Najbolji</FormLabel>
                        <FormInput type="text" value={this.state.rang[0].bodovi} disabled/>
                    </ListItem>
                </List>
                <Button style={pStyle} href="/tabs/scan" routeTabLink="#scan">Skeniraj QR kod</Button>
            </Page>
        );
    }
};
