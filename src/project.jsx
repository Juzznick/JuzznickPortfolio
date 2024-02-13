function Project(){
    return(
        <div className="maindiv-project">
        <h3><span>P r o j e c t s</span></h3>
            <div className="subdiv-project">
                <div className="card-project"><a href="https://caseverze.netlify.app">
                    <img src="img/caseverse.jpg" height={200}></img></a>
                    <p>CaseVerze</p>
                </div>
                <div className="card-project card-project-2"><a href="https://climasight.netlify.app">
                    <img src="img/climasight.jpg" height={200}></img></a>
                    <p>ClimaSight</p>
                </div>
                <div className="card-project card-project-3"><a href="https://scorektu.netlify.app">
                    <img src="img/scorektu.jpg" height={200}></img></a>
                    <p>ScoreKtu</p>
                </div>
                <div className="card-project card-project-4"><a href="https://powerfitnesss.netlify.app">
                    <img src="img/powerfitness.jpg" height={200}></img></a>
                    <p>PowerFitness</p>
                </div>
            </div>
            
        </div>
    )
}
export default Project;