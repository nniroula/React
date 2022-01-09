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
