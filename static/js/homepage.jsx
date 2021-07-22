"use strict";
function DogBreeds(){
    // use Reacts' useState hook to access/update the breeds list 
    const [breeds, setBreeds] = React.useState([]);

    // use Reacts' useState hook to access/update images list
    const [images, setImages] = React.useState([]);

    // use Reacts' useEffect hook to fetch data from server route
    // upon success: parse data as JSON into JS object
    // update the components' state with data
    React.useEffect( () => {
        fetch("/api/breeds")
        .then((response) => response.json())
        .then((breedData) =>  setBreeds(breedData))
        }, []);
    console.log(breeds)
    

    function getImages(breed){

        fetch(`/api/${breed}/images`)
        .then(response => response.json())
        .then((imagesData) => setImages(imagesData))   
      }
      
      
    return(
        <React.Fragment>

        {breeds.map(breed => <button onClick={() => getImages(breed)}> {breed} </button> )}
        
        {images.map(image => <img src={image}></img>)}
        
        </React.Fragment>
    )
    
}
 
function Homepage(){
    /* Homepage component */

    return (
        <React.Fragment>
            <h1>Hi, Doggy</h1>
            {/* <Search /> */}
            <DogBreeds />
        </React.Fragment>
    )
}



// render the Homepage component on div with id=root
ReactDOM.render(<Homepage />, document.getElementById("root"))