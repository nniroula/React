// this is a top-level component. Inside this other components could be called

const App = () => {
    // inside return call an Animal component and pass values for different attributes of Animal component
    return (
        <div>
            <Animal emoji="🐓" name="stevie" species="Silkie Chicken" />
            <Animal emoji="🐄" name="Colorful Cow" species="Unknown"/>
       {/* for RandomChoices */}
       <RandomChoice choices= { ["Red", "green", "orange"] }/> 
        </div>
    )
}
// if you do not instantiate or call this, it won't work to render a web page
ReactDOM.render(<App/>, document.getElementById("top-level"));
