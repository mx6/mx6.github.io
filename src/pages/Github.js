import React from "react"

function Github() {
    return (
        <div>
            {/* OG DIV */}
            <div class="containter">
                <div class="row">
                    <div class="col-md-12">

                        <div class="jumbotron jumbotron-fluid">
                            <div class="container">
                                <h1 class="display-4">M. Adamson</h1>
                                <p class="lead"><span>Here's a few things I've been working on and posted to GitHub.  You can see more at the link below.</span></p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">

                    <div className="card-deck">

                    <div className="card">
                            <a href="https://enigmatic-garden-49283.herokuapp.com/" target="_blank"><img src="../images/reactreadinglist_th.png" className="card-img-top" alt="This is a full-stack Google Book Search App" /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="https://enigmatic-garden-49283.herokuapp.com/" target="_blank"> React Reading List App </a></h3>
                                <p className="card-text">This is a book search app, using the Google Books API and saving the data with Mongoose.</p>
                                <p>Click <a href="https://github.com/mx6/GoogleBooksSearch">here</a> for the GitHub repository.</p>
                            </div>
                        </div>

                        <div className="card">
                            <a href="https://project-deux.herokuapp.com/" target="_blank"><img src="../images/copy_cat_th.png" className="card-img-top" alt="Project 2 is a full-stack web application ecommerce site" /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="https://project-deux.herokuapp.com/" target="_blank"> Copy Cats </a></h3>
                                <p className="card-text">This was group project two; we built a full-stack ecommerce site.</p>
                                <p>Click <a href="https://github.com/pabloivanjuarez/project_deux">here</a> for the GitHub repository.</p>
                            </div>
                        </div>

                        <div className="card">
                            <a href="https://mx6.github.io/Bootcamp_Project_1/" target="_blank"><img src="../images/airwalk_th.jpg" className="card-img-top" alt="Screen shot of a hike app project." /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="https://mx6.github.io/Bootcamp_Project_1/" target="_blank"> AirWalk </a></h3>
                                <p className="card-text">This was my first group project.  We built a hiking app.  Take a hike!</p>
                                <p>Click <a href="https://github.com/mx6/Bootcamp_Project_1">here</a> for the GitHub repository.</p>
                            </div>
                        </div>

                        {/* <div className="card">
                            <a href="https://eat-da-b-urger.herokuapp.com/" target="_blank"><img src="../images/burger_app_th.png" className="card-img-top" alt="Screen shot of a burger database application." /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="https://eat-da-b-urger.herokuapp.com/" target="_blank"> Burger App </a></h3>
                                <p className="card-text">It doesn't look like much, but it's got it where it counts, kid.  This is a full-stack app using handlebars and a database back-end.</p>
                                <p>Click <a href="https://github.com/mx6/Eat_Da_Burger">here</a> for the GitHub repository.</p>
                            </div>
                        </div> */}



                    </div>

                </div>
            </div>
            <div><br /></div>

            <div className="container">
                <div className="row">

                    <div className="card-deck">

                    <div className="card">
                            <a href="https://eat-da-b-urger.herokuapp.com/" target="_blank"><img src="../images/burger_app_th.png" className="card-img-top" alt="Screen shot of a burger database application." /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="https://eat-da-b-urger.herokuapp.com/" target="_blank"> Burger App </a></h3>
                                <p className="card-text">It doesn't look like much, but it's got it where it counts, kid.  This is a full-stack app using handlebars and a database back-end.</p>
                                <p>Click <a href="https://github.com/mx6/Eat_Da_Burger">here</a> for the GitHub repository.</p>
                            </div>
                        </div>

                        <div className="card">
                            <a href="https://whispering-woodland-16291.herokuapp.com/" target="_blank"><img src="../images/fitness_tracker.png" className="card-img-top" alt="Simple Workout Tracker App" /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="https://whispering-woodland-16291.herokuapp.com/" target="_blank"> Workout Tracker </a></h3>
                                <p className="card-text">This is a simple workout tracker. Plan, Lift, Save, Repeat.</p>
                                <p>Click <a href="https://github.com/mx6/WorkoutTracker">here</a> for the GitHub repository.</p>
                            </div>
                        </div>

                        <div className="card">
                            <a href="https://github.com/mx6/Employee_Summary_Template_Engine" target="_blank"><img src="../images/este_final.png" className="card-img-top" alt="HTML-generating CLI." /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="https://github.com/mx6/Employee_Summary_Template_Engine" target="_blank"> Employee Template Engine </a></h3>
                                <p className="card-text">This app generates html documents from a Command Line Interface.  Stylish, too.</p>
                                <p>Click <a href="https://github.com/mx6/Employee_Summary_Template_Engine">here</a> for the GitHub repository.</p>
                            </div>
                        </div>

                        {/* <div className="card">
                            <a href="https://github.com/mx6/Employee_Tracker" target="_blank"><img src="../images/employee_tracker.png" className="card-img-top" alt="CLI Employee Tracker." /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="https://github.com/mx6/Employee_Tracker" target="_blank"> CLI Employee Tracker </a></h3>
                                <p className="card-text">A CLI Employee Tracker.  Reminds me of classic 80s movies.</p>
                                <p>Click <a href="https://github.com/mx6/Employee_Tracker">here</a> for the GitHub repository.</p>
                            </div>
                        </div> */}



                    </div>

                </div>
            </div>
            {/* OG DIV END */}
        </div>
    )
};

export default Github;