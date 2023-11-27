export default function Footer() {
    return (
        <footer className="bg-dark" id="tempaltemo_footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-success border-bottom pb-3 border-light logo">Gems Shop</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                Earth
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw"></i>
                                <a className="text-decoration-none" href="tel:010-020-0340">089 020 0340</a>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <a className="text-decoration-none" href="mailto:info@company.com">gemposts@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Categories</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><a className="text-decoration-none" href="#">Raw Gems</a></li>
                            <li><a className="text-decoration-none" href="#">Tumbled Gems</a></li>
                            <li><a className="text-decoration-none" href="#">Shaped gems</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><a className="text-decoration-none" href="#">About</a></li>
                            <li><a className="text-decoration-none" href="#">Contacts</a></li>
                            <li><a className="text-decoration-none" href="#">FAQs</a></li>
                        </ul>
                    </div>

                </div>

                <div className="row text-light mb-4">
                    <div className="col-12 mb-3">
                        <div className="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div className="col-auto me-auto">
                        <ul className="list-inline text-left footer-icons">
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                            <div className="input-group-text btn-success text-light">Subscribe</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 bg-black py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-left text-light">
                                Copyright &copy; 2025 Gems Shop
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}