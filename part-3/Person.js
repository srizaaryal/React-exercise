
const Person = (props) => {
    let voting;
    if(props.age < 18 ){
        voting = "You must be 18 to Vote!"
    } else {
        voting = "Please go Vote!"
    }
    let shortName;
    if(props.name.length >= 8){
        shortName = (props.name.slice(0,6));
    } else {
        shortName= props.name
    }
    return(

     
    <div>
        <p>Learn some information about this person: </p>
        <p>Name: {shortName}</p>
        <p>Age: {props.age}</p>
        <h3>{voting}</h3>
        <p>Hobbies: {props.hobbies.map(v => <li>{v}</li>)}</p>
    </div>
    )

}
