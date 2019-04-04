import React from 'react';

class Projects extends React.Component{
    render(){
        return (
            <div className="my-projects">
                <h2>My Projects</h2>        
                <div className="card1">
                    <h3>My project title</h3>
                    <p>My project description</p>
                    <a href="#">Checkout</a>
                </div>

                <div className="card2">
                    <h3>My project title 2</h3>
                    <p>My project description2 </p>
                    <a href="#">Checkout 2</a>
                </div>
                
                
            </div>
        );
    }
}



export default Projects;