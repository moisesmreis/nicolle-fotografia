import React from "react";
import Link from 'next/link';
import ButtonText from './buttonText';
import Logo from './Logo';
import { useRouter } from 'next/router';

export default function Header(props) {

    const router = useRouter();

    return (
        <header className="grid grid-cols-2 bg-white my-12 py-2 gap-4">
            <div className="flex justify-start content-center items-center flex-row">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div className="flex justify-end content-center items-center flex-row gap-6">
                <Link href="/">
                    <ButtonText className={router.pathname == "/" ? "opacity-100" : ""}>Início</ButtonText>
                </Link>
                <ButtonText>Sobre</ButtonText>
                <ButtonText>WhatsApp</ButtonText>
                <ButtonText>Instagram</ButtonText>
                <ButtonText>Linkedin</ButtonText>
            </div>
        </header>
    )
}





