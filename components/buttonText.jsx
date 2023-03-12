export default function ButtonText(props) {
    return (
        <button className="hover:underline justify-center items-center uppercase tracking-wide font-medium text-lg">{props.children}</button>
    );
}