import React, { Component } from 'react';
import Logo from './Logo';

export class Header extends Component {
    render() {
        return (
            <header class="grid grid-cols-2 px-12">
                <div class="flex flex-row justify-start content-center items-center py-6">
                    <Logo />
                </div>
                <div class="flex flex-row justify-end content-center items-center gap-6 py-6">
                    <button class="border">Contato</button>
                    <button>Sobre</button>
                    <button>Instagram</button>
                </div>
            </header>
        )
    }
}
export default Header;