import React, { Component } from 'react';
import ButtonText from './buttonText';

export class Footer extends Component {
    render() {
        return (
            <footer className="grid grid-cols-1 border-t mt-12 py-6 gap-6">
                <div className="flex justify-between content-center flex-row">
                    <ButtonText>Feito por La Monhang</ButtonText>
                    <span className="uppercase tracking-wide font-light">Copyright 2022. Nicolle Della Cruz</span>
                </div>
            </footer>
        )
    }
}
export default Footer;