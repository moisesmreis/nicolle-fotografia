import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export default function Title(props) {
    return (
        <section className="flex flex-row content-center items-center justify-between mb-2">
            <span className="flex flex-row gap-1 items-center font-normal text-sm group-hover:underline">{props.title}</span>
            <Link href="/">
                <span className="flex flex-row gap-1 items-center font-normal text-sm group-hover:underline"><ArrowLeftIcon />Voltar</span>
            </Link>
        </section>
    );
}
