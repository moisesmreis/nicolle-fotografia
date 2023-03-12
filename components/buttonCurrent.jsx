export default function ButtonCurrent(props) {
    return (
        <button className="justify-center items-center uppercase py-[2px] px-1 tracking-wide font-medium text-lg text-white bg-[#ffd000]">{props.children}</button>
    );
}