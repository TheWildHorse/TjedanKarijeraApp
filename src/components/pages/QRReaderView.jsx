import React, {Component} from 'react';
import {Page} from 'framework7-react';
import QrReader from 'react-qr-reader'

export class QRReaderView extends Component {
    constructor(props, context){
        super(props, context)
        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data){
        console.log(data)
    }
    handleError(err){
        console.error(err)
    }
    render(){
        return(
            <div>
                <Page>
                    <QrReader
                        facingMode="rear"
                        style="video"
                        onError={this.handleError}
                        onScan={this.handleScan}
                    />
                </Page>
            </div>
        )
    }
}
