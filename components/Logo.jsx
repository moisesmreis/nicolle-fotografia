import React, { Component } from 'react';
import Image from 'next/image';
import logo from '@/static/logo.png'

export class Logo extends Component {
    render() {
        return (
            <Image src={logo} alt="Logo" class="w-28" />
        )
    }
}
export default Logo;