/* This is for learning Props in React */

// Animal props
const Animal = (props) => {
    return (
        <div>
            <p>Emoji: {props.emoji}</p>
            <p>Name: {props.name}</p>
            <p> Species: {props.species}</p>
            
        </div>
    )
}

// Pass an array or bject in props
const RandomChoice = (props) => {
    const index = Math.floor(Math.random() * props.choices.length); // choices is an array that will be passed in App.js file
    const choice = props.choices[index]; // this is an array
    return <h4> {choice} </h4>
}