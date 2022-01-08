// This is for dynamic react components

const Dynamic = () => {
    let rand = Math.floor(Math.random() * 10); // give a decimal number
    return <p>{rand}</p>
}

// you do not have do ReactDOM.render(<Dynamic/>, document.getElementById("top-level")) here, since you will call
// this compoent in App component(a top-level component)