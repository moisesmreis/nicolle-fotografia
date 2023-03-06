import Image from 'next/image';

export default function Card(props) {
    return (
        <div className="flex flex-col cursor-pointer gap-2">
            <span className="uppercase font-normal text-sm">{props.title}</span>
            <Image className="h-96 w-full object-cover" src={props.img} alt="Card" width={576} height={576} />
        </div>
    );
}
