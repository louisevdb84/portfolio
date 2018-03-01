import React from 'react';


const Contact = () => {    
    return (
        <div className="animated bounceInUp">        
            <h1>Contact Me</h1>    
        <br/>    
        <form class= "contactform" action="https://formspree.io/louisevdb84@gmail.com" method="POST">
        <div class="form-group">
                <label>Name:</label>
                <input name="name" type="text" class="form-control" placeholder="Enter your name"/>                            
              </div>
        <div class="form-group">
                <label>Email address</label>
                <input name="replyto" type="email" class="form-control" placeholder="Enter your email"/>                            
              </div>
              <div class="form-group">
                    <label>Message</label>
                    <textarea name="message" rows="10" class="form-control" placeholder="Type message"></textarea>
                                                
                  </div>
                <div className = "formButton">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>      
        </form>    
        </div>
     
    )
}  

export default Contact;