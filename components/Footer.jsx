import React, { Component } from 'react';
import ButtonText from './buttonText';

export class Footer extends Component {
    render() {
        return (
            <footer className="grid grid-cols-1 border-t mt-12 py-6 gap-6">
                <div className="flex justify-between content-center flex-row">
                    <span className="uppercase tracking-wide font-black text-sm">Feito por La Monhang</span>
                    <span className="uppercase tracking-wide font-normal text-sm">Copyright 2022. Nicolle Della Cruz</span>
                </div>
            </footer>
        )
    }
}
export default Footer;