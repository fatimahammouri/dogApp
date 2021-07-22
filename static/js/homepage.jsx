"use strict";

 
function Homepage(){
    /* Homepage component */

    // use Reacts' useState hook to access/update the breeds list 
    const [breeds, setBreeds] = React.useState([]);


    // use Reacts' useEffect hook to fetch data from server route
    // upon success: parse data as JSON into JS object
    // update the components' state with data
    React.useEffect( () => {
        fetch("/api/breeds")
        .then((response) => response.json())
        .then((breedData) =>  setBreeds(breedData))
        }, []);
    console.log(breeds)

    return (
        <React.Fragment>
            <h1>Hi, Doggy</h1>
        </React.Fragment>
    )
}



// render the Homepage component on div with id=root
ReactDOM.render(<Homepage />, document.getElementById("root"))