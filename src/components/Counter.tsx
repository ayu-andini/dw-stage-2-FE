type CounterProps = {
    text: number;
};

function Counter ({text}:CounterProps){
    return <p>Nilai Counter {text}</p>
}

type CounterProfileProps = {
    text: string;
};

export function CounterProfile ( {text}:CounterProfileProps ){
    return (
        <>
        <p>{ text }</p><hr />
        </>
    )
}

export default Counter;
// named export
// default export