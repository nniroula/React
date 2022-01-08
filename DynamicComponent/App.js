// this is a top-level component

const App = () => {
    return <div>
        <p>First random number is: </p>
        <Dynamic/>
        <p>Second radnom number is: </p>
        <Dynamic/>
        <p>New random number is: </p>
        <Dynamic/>
    </div>
}

// call this to display the component in web page
ReactDOM.render(<App/>, document.getElementById("top-level"));