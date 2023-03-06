import React, { Component } from 'react';
import ButtonText from './buttonText';
import ButtonIcon from './buttonIcon';
import Logo from './Logo';
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, ArrowLeftIcon } from '@radix-ui/react-icons';

export class Header extends Component {

    render() {
        return (
            <header className="grid grid-cols-2 bg-yellow-100 rounded-full my-12 py-2 px-6 gap-6">
                <div className="flex justify-start content-center items-center flex-row">
                    <span className="text-2xl uppercase font-black font-serif">Nicolle Della Cruz</span>
                </div>
                <div className="flex flex-row content-center justify-center gap-12">
                    <div className="flex justify-center content-center flex-row gap-6">
                        <ButtonText>Trabalhos</ButtonText>
                        <ButtonText>Contato</ButtonText>
                        <ButtonText>Sobre</ButtonText>
                        <ButtonText>WhatsApp</ButtonText>
                    </div>
                    <div className="flex justify-center content-center flex-row gap-6">
                        <ButtonIcon>
                            <InstagramLogoIcon className="w-5 h-5" />
                        </ButtonIcon>
                        <ButtonIcon>
                            <LinkedInLogoIcon className="w-5 h-5" />
                        </ButtonIcon>
                        <ButtonIcon>
                            <TwitterLogoIcon className="w-5 h-5" />
                        </ButtonIcon>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;