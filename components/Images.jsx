import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Casal from '@/assets/img/casal.jpg'
import Feminino from '@/assets/img/feminino.jpg'
import Casamento from '@/assets/img/casamento.jpg'
import Familia from '@/assets/img/familia.jpg'
import Festainfantil from '@/assets/img/festa-infantil.jpg'
import Festas from '@/assets/img/festas.jpg'
import Gestante from '@/assets/img/gestante.png'
import Imobiliaria from '@/assets/img/imobiliaria.jpg'
import Infantil from '@/assets/img/infantil.jpg'

export class Images extends Component {
    render() {
        return (
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 mb-12">
                <Image className="rounded" alt="Feminino" src={Feminino} width={640} height={960} />
                <Image className="rounded" alt="Casal" src={Casal} width={640} height={960} />
                <Image className="rounded" alt="Casamento" src={Casamento} width={640} height={960} />
                <Image className="rounded" alt="Família" src={Familia} width={640} height={960} />
                <Image className="rounded" alt="Festa infantil" src={Festainfantil} width={640} height={960} />
                <Image className="rounded" alt="Festas" src={Festas} width={640} height={960} />
                <Image className="rounded" alt="Gestante" src={Gestante} width={640} height={960} />
                <Image className="rounded" alt="Imobiliária" src={Imobiliaria} width={640} height={960} />
                <Image className="rounded" alt="Infantil" src={Infantil} width={640} height={960} />
                <Image className="rounded" alt="Feminino" src={Feminino} width={640} height={960} />
                <Image className="rounded" alt="Casal" src={Casal} width={640} height={960} />
                <Image className="rounded" alt="Casamento" src={Casamento} width={640} height={960} />
                <Image className="rounded" alt="Família" src={Familia} width={640} height={960} />
                <Image className="rounded" alt="Festa infantil" src={Festainfantil} width={640} height={960} />
                <Image className="rounded" alt="Festas" src={Festas} width={640} height={960} />
                <Image className="rounded" alt="Gestante" src={Gestante} width={640} height={960} />
                <Image className="rounded" alt="Imobiliária" src={Imobiliaria} width={640} height={960} />
                <Image className="rounded" alt="Infantil" src={Infantil} width={640} height={960} />
            </section>
        )
    }
}
export default Images;