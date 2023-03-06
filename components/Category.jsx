import React, { Component } from 'react';
import Link from 'next/link';
import Card from './Card';
import Casal from '@/assets/img/casal.jpg'
import Feminino from '@/assets/img/feminino.jpg'
import Casamento from '@/assets/img/casamento.jpg'
import Familia from '@/assets/img/familia.jpg'
import Festainfantil from '@/assets/img/festa-infantil.jpg'
import Festas from '@/assets/img/festas.jpg'
import Gestante from '@/assets/img/gestante.png'
import Imobiliaria from '@/assets/img/imobiliaria.jpg'
import Infantil from '@/assets/img/infantil.jpg'

export class Category extends Component {
    render() {
        return (
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mb-12">
                <Card title="Feminino" img={Feminino} />
                <Card title="Casal" img={Casal} />
                <Link href="/casamento">
                    <Card title="Casamento" img={Casamento} />
                </Link>
                <Card title="Família" img={Familia} />
                <Card title="Festa infantil" img={Festainfantil} />
                <Card title="Festas" img={Festas} />
                <Card title="Gestante" img={Gestante} />
                <Card title="Imobiliária" img={Imobiliaria} />
                <Card title="Infantil" img={Infantil} />
            </section>
        )
    }
}
export default Category;