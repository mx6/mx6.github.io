import React from "react"

function Contact() {
    return (
        <div>
      
      
            <div className="containter">
                <div className="row">
                    <div className="col-md-12">

                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-4">M. Adamson</h1>
                                <p className="lead"><span>Drop a note.  Don't be shy.</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
     
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <form>

                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Say what you want:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Try to be nice..." rows="5"></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary"> Submit </button>

                        </form>

                    </div>
                </div>
            </div>

        
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <section>
                            <p className="contact-text">Matt will not send/sell/distribute any of your contact information, to include email address, personally identifying information, or anything you confess to in the little box above.</p>

                            <p className="contact-text">He is not very versed in the depths of GitHub's privacy statement, but he would assume it's on the up-and-up.  The GitHub privacy statement is located <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" target="_blank">HERE</a>. </p>

                            <p className="contact-text">Either way, the contact form above is out of order.  Click <a href="https://www.mxadam.com/matthew_adamson_resume.pdf">here to download his resume</a>, and you can always reach out to Matt by clicking on the links nestled gently in the footer below.</p>
                        </section>
                    </div>
                </div>
            </div>
            {/* <!--End Privacy--> */}
        </div>
              
        
        
    )
};

export default Contact;