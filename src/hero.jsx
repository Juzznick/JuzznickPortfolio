

function Hero() {


    return(
        
        <div className="maindiv-hero">
            <h2>Front-end Dev</h2>

            <div className="subdiv-hero subdiv-hero-left">
                <h1>I<br/>M</h1>
            </div>

            <div className="subdiv-hero subdiv-hero-right rotating-element">
                <img src="img/nikhil.png" height={288} width={288}></img>
            </div>
            

            <div className="subdiv-bento">
                <div className="bento-elements first-bento">
                    <img  src="img/me2.png" height={520} width={250}></img>
                </div>

                <div className="bento-elements second-bento">
                    <img src="img/me5.png" height={198} width={250}></img>
                    <img src="img/me10.png" height={310} width={250}></img>
                </div>

                <div className="bento-elements third-bento">
                    <img src="img/me3.png" height={308} width={250}></img>
                    <img src="img/me9.png" height={200} width={250}></img>
                </div>

                <div className="bento-elements fourth-bento">
                    <img src="img/me6.png" height={220} width={250}></img>
                    <img src="img/me7.png" height={288} width={250}></img>
                </div>
                
            </div>

            <div className="subdiv-hero subdiv-hero-right">
                <h1>N<br/>IK<br/>HI<br/>L</h1>
            </div>


        </div>







    );


}

export default Hero;