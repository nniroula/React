/* This is for a top-level component in React. Other components can be called inside it as long as they are included in 
html file with <script> tag. The order of the files in <script> tag matters the most. */

const App = () => {
    return (
        // put all the components you wanna call inside div
          // component you wanna call, this component is in its own file
            // component you wanna call
            // componet you wanna call
        <div>
            <Names />
            <Languages />
            <TechStack />
        </div>
    )
}

// now call App to render all other components
ReactDOM.render(<App />, document.getElementById("top-level"));
