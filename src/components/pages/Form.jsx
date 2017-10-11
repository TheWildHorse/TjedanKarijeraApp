import React, {Component} from 'react';
import {Page, ContentBlockTitle, List, ListItem, FormLabel, FormInput, Button, Popup} from 'framework7-react';
import {QRReaderView} from './QRReaderView';


const pStyle = {margin: '1em 0'};

export class Form extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
        };        
    }

    render() {
        return (
            <Page>
                <ContentBlockTitle>TK Bodovi</ContentBlockTitle>
                <List form>
                    <ListItem>
                        <FormLabel>Tvoje stanje</FormLabel>
                        <FormInput type="text" value="100" disabled/>
                    </ListItem>
                    <ListItem>
                        <FormLabel>Najbolji</FormLabel>
                        <FormInput type="text" value="120" disabled/>
                    </ListItem>
                </List>
                <Button style={pStyle} openPopup="#qr-reader">Skeniraj QR kod</Button>

                <Popup id="qr-reader">
                    <QRReaderView/>
                </Popup>
            </Page>
        );
    }
};
