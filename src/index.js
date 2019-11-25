// Copyright (c) 2019 Fall Guy LLC All Rights Reserved.

import * as vol from 'fgc';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

import { configure } from 'mobx';

import registerServiceWorker            from './registerServiceWorker';
import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

configure ({
    enforceActions:     'always',
});



//----------------------------------------------------------------//
const App = () => {

    return (<BrowserRouter>
        <div>
            <Switch>
                <Route exact path = "/debug/aes"                component = { vol.debug.AESScreen }/>
                <Route exact path = "/debug/barcode/pdf417"     component = { vol.debug.BarcodePDF417Screen }/>
                <Route exact path = "/debug/barcode/qr"         component = { vol.debug.BarcodeQRScreen }/>
                <Route exact path = "/debug/cryptokey"          component = { vol.debug.CryptoKeyScreen }/>
                <Route exact path = "/debug/dropzone"           component = { vol.debug.DropzoneScreen }/>
                <Route exact path = "/debug/filepicker"         component = { vol.debug.FilePickerScreen }/>
                <Route exact path = "/debug/fixedscroll"        component = { vol.debug.FixedRowScrollScreen }/>
                <Route exact path = "/debug/handlebars"         component = { vol.debug.HandlebarsScreen }/>
                <Route exact path = "/debug/mobx"               component = { vol.debug.MobXScreen }/>
                <Route exact path = "/debug/print"              component = { vol.debug.PrintScreen }/>
                <Route exact path = "/debug/textfitter"         component = { vol.debug.TextFitterScreen }/>
                <Route exact path = "/debug/textstyle"          component = { vol.debug.TextStyleScreen }/>
                <Route exact path = "/debug/variablescroll"     component = { vol.debug.VariableRowScrollScreen }/>
            </Switch>
        </div>
    </BrowserRouter>);
}

//----------------------------------------------------------------//
ReactDOM.render (
    <App/>,
    document.getElementById ( 'root' )
);

registerServiceWorker ();
