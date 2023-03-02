import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Casamento from '@/assets/img/casamento.jpg'
import Gestante from '@/assets/img/gestante.jpg'
import Familia from '@/assets/img/familia.jpg'
import Feminino from '@/assets/img/feminino.jpg'
import Bebe from '@/assets/img/bebe.jpg'
import Festainfantil from '@/assets/img/festa-infantil.jpg'

export class Category extends Component {
    render() {
        return (
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mb-12">
                <Link href="/casamento">
                    <div className="flex flex-col cursor-pointer gap-2" id="grid-casamento">
                        <span className="uppercase underline font-light text-sm">Casamento</span>
                        <Image className="h-96 w-full object-cover rounded-lg shadow-lg" src={Casamento} alt="Casamento" />
                    </div>
                </Link>
                <div className="flex flex-col cursor-pointer gap-2" id="grid-gestante">
                    <span className="uppercase underline font-light text-sm">Gestante</span>
                    <Image className="h-96 w-full object-cover rounded-lg shadow-lg" src={Gestante} alt="Gestante" />
                </div>
                <div className="flex flex-col cursor-pointer gap-2" id="grid-familia">
                    <span className="uppercase underline font-light text-sm">Família</span>
                    <Image className="h-96 w-full object-cover rounded-lg shadow-lg" src={Familia} alt="Familia" />
                </div>
                <div className="flex flex-col cursor-pointer gap-2" id="grid-festa-infantil">
                    <span className="uppercase underline font-light text-sm">Festa infantil</span>
                    <Image className="h-96 w-full object-cover rounded-lg shadow-lg" src={Festainfantil} alt="Festa infantil" />
                </div>
                <div className="flex flex-col cursor-pointer gap-2" id="grid-newborn">
                    <span className="uppercase underline font-light text-sm">Recém-nascido</span>
                    <Image className="h-96 w-full object-cover rounded-lg shadow-lg" src={Bebe} alt="Bebê" />
                </div>
                <div className="flex flex-col cursor-pointer gap-2" id="grid-feminino">
                    <span className="uppercase underline font-light text-sm">Feminino</span>
                    <Image className="h-96 w-full object-cover rounded-lg shadow-lg" src={Feminino} alt="Feminino" />
                </div>
            </section>
        )
    }
}
export default Category;