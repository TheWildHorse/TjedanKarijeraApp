import React, {Component} from 'react';
import {Page, ContentBlock} from 'framework7-react';
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
                    legacySupp
                />
                <ContentBlock inset>
                    <p>Ukoliko se kamera nije prikazala nakon prihvaćanja pristupa tvoj internet preglednik ne podržava WebRTC tehnologiju. Provjeri ukoliko je nadograđen na najnoviju verziju ili probaj drugi preglednik.</p>
                    <p>
                        Podržani su:
                        <ul>
                            <li>iOS 11+ - Safari</li>
                            <li>Android 4.0+ - Većina browsera</li>
                        </ul>
                    </p>
                </ContentBlock>
            </Page>
        )
    }
};
