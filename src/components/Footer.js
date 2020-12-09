import React from "react"

function Footer() {
    return (
        <div>

            <footer className="page-footer font-small blue pt-4">

                <div className="container text-center text-md-left">
                    <div className="row">

                        <hr className="clearfix w-100 d-md-none pb-3" />

                            <div className="col-md-6 mt-md-0 mt-3">
                                <h2 className="text-uppercase">MXADAM//MX6</h2>
                            </div>

                            <hr class="clearfix w-100 d-md-none pb-3" />

                            <div className="col-md-6 mt-md-0 mt-3">
                                <a href="http://www.mxadam.com" target="_blank" className="fa fa-external-link"></a>
                                <a href="https://twitter.com/mxadamcom" target="_blank" className="fa fa-twitter"></a>
                                <a href="https://www.instagram.com/mx_adam_/" target="_blank" className="fa fa-instagram"></a>
                                <a href="https://github.com/mx6" target="_blank" class="fa fa-github"></a>
                                <a href="https://www.linkedin.com/in/matthew-adamson-56a874114/" target="_blank" className="fa fa-linkedin"></a>
                                <a href="mailto:m@mxadam.com" className="fa fa-envelope-square"></a>
                            </div>

                        </div>
                </div>

                    <div className="footer-copyright text-center py-3"></div>

            </footer>    

        </div>
    )
};

export default Footer;