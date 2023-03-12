import Image from 'next/image';
import { ArrowTopRightIcon, ArrowRightIcon } from '@radix-ui/react-icons';

export default function Card(props) {
    return (
        <div className="relative z-10 flex flex-col cursor-pointer gap-2 group">
            <div>
                <span className="flex flex-row gap-1 items-center font-normal text-sm group-hover:underline">{props.title}<ArrowTopRightIcon /></span>
            </div>
            <div className="overflow-hidden rounded">
                <Image className="h-96 w-full object-cover rounded hover:scale-[1.25] transition-all" src={props.img} alt="Card" width={576} height={576} />
                <span className="opacity-0 transition-opacity absolute bottom-4 left-4 flex flex-row gap-1 text-white items-center font-normal text-sm group-hover:underline group-hover:opacity-100">veja mais<ArrowRightIcon /></span>               
            </div>
        </div>
    );
}
