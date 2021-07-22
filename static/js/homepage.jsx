"use strict";

 
function Homepage(){
    /* Homepage component */

    // use Reacts' useState hook to access/update the breeds list 
    const [breeds, setBreeds] = React.useState([]);


    return (
        <React.Fragment>
            <h1>Hi, Doggy</h1>
        </React.Fragment>
    )
}



// render the Homepage component on div with id=root
ReactDOM.render(<Homepage />, document.getElementById("root"))