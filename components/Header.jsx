import React, { Component } from 'react';
import ButtonText from './buttonText';
import ButtonIcon from './buttonIcon';
import Logo from './Logo';
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

export class Header extends Component {
    render() {
        return (
            <header className="grid grid-cols-1 border-b mb-12 py-6 gap-6">
                <div className="flex justify-center content-center flex-row">
                    <Logo />
                </div>
                <div className="flex flex-row content-center justify-center gap-12">
                    <div className="flex justify-center content-center flex-row gap-6">
                        <ButtonText>Trabalhos</ButtonText>
                        <ButtonText>Contato</ButtonText>
                        <ButtonText>Sobre</ButtonText>
                        <ButtonText>WhatsApp</ButtonText>
                    </div>
                    <div className="flex justify-center content-center flex-row gap-6">
                        <ButtonIcon><InstagramLogoIcon className="w-5 h-5" /></ButtonIcon>
                        <ButtonIcon><LinkedInLogoIcon className="w-5 h-5" /></ButtonIcon>
                        <ButtonIcon><TwitterLogoIcon className="w-5 h-5" /></ButtonIcon>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;