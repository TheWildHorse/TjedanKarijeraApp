import React, {Component} from 'react';
import {Page} from 'framework7-react';
import QrReader from 'react-qr-reader';
import axios from 'axios';
import Cookies from 'js-cookie';

export class ScanQR extends Component {
    constructor(props, context){
        super(props, context)
        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data){
        console.log(data);
        axios.post(`https://api.tjedankarijera.info:443/api/bodovi`, {
            email: Cookies.get('email'),
            zaporka: Cookies.get('password'),
            qr: data
        })
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
