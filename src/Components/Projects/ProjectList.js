import React from 'react';
import Project from './Project';

const ProjectList = ({projects}) => {    
    return(
        <div className="cardHolder dynamic-grid">
            {
                projects.map((p, i) => {
                    return <Project 
                        key={i}
                        name={p.name}
                        description={p.description}
                        date = {p.date}
                        image={p.image}
                        tools={p.tools}
                        link={p.link}/>    
                })    
            }
        </div>
    )
}

export default ProjectList;