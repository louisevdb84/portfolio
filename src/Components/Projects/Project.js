import React from 'react';
import './Project.css';

const Project = ({description, name, image, tools, link, date}) => {    
    return (
        <div>            
            <div>  
                <article className="grid-item content-box">
                    <div className="inner">
                        <img className="content-box-thumb" src={image} alt="tech" />
                    <h1 className="content-box-header">
                    { name }
                        </h1>
                        <p className="date-completed">Completed:
                        {" " + date }
                            </p>    
                    <p className="content-box-blurb">
                    {description }
                        </p>
                        <hr/>
                        <p className="content-box-blurb">
                        {tools }
                        </p>    
                        <a className="readmore-link" target = "_blank" href={link}>View Project</a>
                    </div>
                </article>
            </div>
        </div>    
    );
}

export default Project;