export default function ButtonText(props) {
    return (
        <button className="uppercase tracking-wide font-medium text-sm decoration-1">{props.children}</button>
    );
}