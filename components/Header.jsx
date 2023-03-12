import Link from 'next/link';
import ButtonText from './buttonText';
import ButtonCurrent from './buttonCurrent';
import Logo from './Logo';
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, ArrowLeftIcon } from '@radix-ui/react-icons';

export default function Header(props) {
    return (
        <header className="grid grid-cols-2 bg-white my-12 py-2 gap-4">
            <div className="flex justify-start content-center items-center flex-row">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div className="flex justify-end content-center items-center flex-row gap-6">
                {/* <ButtonCurrent>{props.title}</ButtonCurrent> */}
                <ButtonText>Sobre</ButtonText>
                <ButtonText>WhatsApp</ButtonText>
                <ButtonText>Instagram</ButtonText>
                <ButtonText>Linkedin</ButtonText>
            </div>
        </header>
    )
}
