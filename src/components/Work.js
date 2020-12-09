import React from "react"
import "../work.css"

function Work() {
    return (
        <div>
            {/* OG DIV */}

            <div className="containter">
                <div className="row">
                    <div className="col-md-12">

                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-4">M. Adamson</h1>
                                <p className="lead"><span>Here's a few things I've been working on.  You can see more at mxadam.com.</span></p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
       

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-4">
                        <div id="thumb01"><img src="../images/thumb01.jpg" alt="A young man looking out over the San Francisco Bay." /></div>
                    </div>
                    <div className="col-md-4">
                        <div id="thumb02"><img src="../images/thumb02.jpg" alt="A close-up of a discarded Halloween decoration." /></div>
                    </div>
                    <div className="col-md-4">
                        <div id="thumb03"><img src="../images/thumb03.jpg" alt="A protester holding a bomb icon." /></div>
                    </div>

                </div>
            </div>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-4">
                        <div id="thumb04"><img src="../images/thumb04.jpg" alt="An alien from the movie They Live holding a cell phone." /></div>
                    </div>
                    <div className="col-md-4">
                        <div id="thumb05"><img src="../images/thumb05.jpg" alt="The greatest duo since PB&J, Run the Jewels." /></div>
                    </div>
                    <div className="col-md-4">
                        <div id="thumb06"><img src="../images/thumb06.jpg" alt="A digital abstract painting of a sun over a mountain range." /></div>
                    </div>

                </div>
            </div>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-4">
                        <div id="thumb07"><img src="../images/thumb07.jpg" alt="An orchard in the fog." /></div>
                    </div>
                    <div className="col-md-4">
                        <div id="thumb08"><img src="../images/thumb08.jpg" alt="Two women sharing a secret, with the anticomputer.org logo on the left." /></div>
                    </div>

                </div>
            </div>

            {/* END OG DIV */}
        </div>
    )
}

export default Work;