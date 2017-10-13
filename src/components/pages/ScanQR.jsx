import React, {Component} from 'react';
import {Page} from 'framework7-react';
import QrReader from 'react-qr-reader';
import axios from 'axios';
import Cookies from 'js-cookie';
import {getFramework7} from '../App';

export class ScanQR extends Component {
    constructor(props, context){
        super(props, context)
        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data) {
        if (data !== null) {
            axios.post(`https://api.tjedankarijera.info:443/api/bodovi`, {
                email: Cookies.get('email'),
                zaporka: Cookies.get('password'),
                qr: data
            }).then(function(response) {
                getFramework7().mainView.router.loadPage('/tabs/bodovi')
            });
        }
    }
    handleError(err){
        console.error(err)
    }
    render() {
        const style = {
            width: "100%",
            height: "auto"
        }
        return(
            <Page>
                <QrReader
                    style={style}
                    facingMode="rear"
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
            </Page>
        )
    }
};
