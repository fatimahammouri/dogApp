"use strict";

 
function Homepage(){
    
    return (
        <React.Fragment>
            <h1>Hi, Doggy</h1>
        </React.Fragment>
    )
}



// render the Homepage component on div with id=root
ReactDOM.render(<Homepage />, document.getElementById("root"))