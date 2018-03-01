import React from 'react';

var style = {
    'text-align': 'center',
}
const SideHustles = () => {    
    return (
        <div className="animated pulse">
        <h1>Side Hustles</h1>
            <div className="container dynamic-grid">  
                <div>        
                    
        <article className="grid-item content-box">
            <div className="inner">                
            <h1 className="content-box-header">
                    UXelerate
                </h1>         
                        <p className="content-box-blurb" style={style}>
            a fellowship program for intermediate-level product designers looking to make social impact.
                </p>
                <hr/>
   
                <a className="readmore-link" href="">Coming Soon</a>
            </div>
                    </article>
                </div>        
                <div>
                <article className="grid-item content-box">
                <div className="inner">                
                <h1 className="content-box-header">
                Silly Valley
                    </h1>         
                            <p className="content-box-blurb" style={style}>
                            a multimedia project that’s all about satirizing the worlds of entrepreneurship and entertainment
                    </p>
                    <hr/>
       
                    <a className="readmore-link" href="">Coming Soon</a>
                </div>
                    </article>        
                    </div>        
    </div>            
        </div>
     
    )
}  

export default SideHustles;

    
