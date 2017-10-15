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
        if(navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({video: true})
                .catch(function (err) {
                    alert("Tvoj internet preglednik ne podržava WebRTC tehnologiju. Provjeri ukoliko je nadograđen na najnoviju verziju ili probaj drugi preglednik.\n\nPodržani su:\niOS 11+ - Safari\nAndroid 4.0+ - Većina browsera");
                });
        }
        else {
            alert("Tvoj internet preglednik ne podržava WebRTC tehnologiju. Provjeri ukoliko je nadograđen na najnoviju verziju ili probaj drugi preglednik.\n\nPodržani su:\niOS 11+ - Safari\nAndroid 4.0+ - Većina browsera");
        }
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
                    legacySupp
                />
            </Page>
        )
    }
};
