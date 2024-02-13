function Contact(){
    return(
        <div className="maindiv-contact">
            <h3>Contact Me</h3>
            <div className="subdiv-contact">
                <a href="https://www.linkedin.com/in/juzznick/"><img className="contact-logos" src="img/linked.png"></img></a>
                <a href="https://github.com/Juzznick"><img className="contact-logos" src="img/github.png"></img></a>
                <a href="https://www.instagram.com/juzznick/"><img className="contact-logos" src="img/insta.png"></img></a>
            </div>
            
            <div className="subdiv-contact">
                <a href="cv.pdf"><button className="button-cv">get my CV</button></a>
            </div>
            <div className="subdiv-contact">
                <p>xnick126@gmail.com</p>
            </div>

            
        </div>
        



    );

}
export default Contact;