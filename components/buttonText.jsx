export default function ButtonText(props) {
    return (
        <button className={`justify-center hover:opacity-100 opacity-40 items-center uppercase tracking-wide font-medium text-lg ${props.className}`}>{props.children}</button>
    );
}