export default function ButtonText(props) {
    return (
        <button className="uppercase tracking-wide font-medium underline decoration-2">{props.children}</button>
    );
}