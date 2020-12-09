import React from "react"
import {Link} from "react-router-dom";

function MainBody() {
    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="card-deck">

                        <div className="card">
                            <Link to={"./portfolio"}><img alt="Digital painting of an airplane falling out of the sky over an orange background." src='../images/maidez.jpg' className="card-img-top"  /></Link>
                            <div className="card-body">
                                <h3 className="card-title"><Link to={"./portfolio"}> Portfolio </Link></h3>
                                <p className="card-text">Have a look at what he's been working on.</p>
                            </div>
                        </div>

                        <div className="card">
                            <Link to={"./github"}><img src="../images/copy_cat_th.png" className="card-img-top" alt="Screen shot of a website that sells cats." /></Link>
                            <div className="card-body">
                                <h3 className="card-title"><Link to={"./github"}> GitHub Projects </Link></h3>
                                <p className="card-text">Here are some of my more recent projects in GitHub.</p>
                            </div>
                        </div>

                        <div className="card">
                            <Link to={"./contact"}><img src="../images/bio_pic.jpg" className="card-img-top" alt="M. Adamson, the second-most interesting man in the world." /></Link>
                            <div className="card-body">
                                <h3 className="card-title"><Link to={"./contact"}> Contact </Link></h3>
                                <p className="card-text">Reach out and say 'hi', he'll probably say 'hi' back.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default MainBody;