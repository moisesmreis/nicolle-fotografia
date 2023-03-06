export default function ButtonText(props) {
    return (
        <button className="flex flex-row gap-2 justify-center items-center uppercase tracking-wide font-medium text-sm">{props.children}</button>
    );
}