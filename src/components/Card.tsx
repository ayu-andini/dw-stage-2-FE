function Card(){
    return <p>Hello Batch 64</p>
}

export function CardProfile(){
    return <p>HAI Batch 64</p>
}

export function Hello() {
  const name = "John";
  return <h1>Hello {name}</h1>;
}


interface HelloPropsTypes {
    name: string;
}

export function HelloProps({ name } : HelloPropsTypes) {
  return <h1>Hello {name}</h1>;
}

export default Card;