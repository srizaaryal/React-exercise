const NamedComponents =(props)=> {
    console.log(props);
    return (
        <div>
            <p>My name is {props.name} and I live in {props.place}</p>
        </div>
    )
}