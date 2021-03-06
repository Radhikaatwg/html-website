class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="footer_one">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
                        <div class="footer_about_widget">
                            <h4>About Site</h4>
                            <p class="footer_about">For People who are looking to Sell, Purchase, Let Out and Rent available Properties.</p>
                            <p class="footer_about">Housingstreet.com is an online Real Estate Platform that helps people to find out the best available verified properties and Customers for their properties, all at one place.</p>
                            <p>Unlike traditional Property Dealers/Agents and Real Estate Offices,
                            Housingsteet.com provides you access to hundreds of Verified Properties and Customers for your property at single Platform.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div class="footer_qlink_widget">
                            <h4>Quick Links</h4>
                            <ul class="list-unstyled">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">IP Disclaimer</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
				    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div class="footer_contact_widget">
                            <h4>Contact Us</h4>
                            <ul class="list-unstyled">
                                <li><a href="mailto: support@housingstreet.com">support@housingstreet.com</a></li>
                                <p class="footer_address">H. No B-165, Ambedkar Colony,<br>
                                Gali No 1, Chhatarpur,<br>
                                New Delhi - 110074<br>
                                (+91-9818954521)
                                </p>
                            </ul>
                        </div>
				    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div class="footer_social_widget">
                            <h4>Follow us</h4>
                            <ul class="mb30">
                                <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa fa-google"></i></a></li>
                            </ul>
                            <h4>Subscribe</h4>
                            <form class="footer_mailchimp_form">
                                <div class="d-flex align-items-center">
                                    <div class="col-auto">
                                        <input type="email" class="form-control mb-2" id="inlineFormInput" placeholder="Your email">
                                    </div>
                                    <div class="col-auto ml10">
                                        <button type="submit" class="btn btn-primary mb-2"><i class="fa fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
				    </div>
                </div>
            </div>
        </section>
        <section class="footer_middle_area py-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-xl-12">
                        <div class="copyright-widget text-center">
                            <p>All Rights Reserved. ?? Copyright 2021 Housingstreet Marketing & Consulting Private Limited.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `
    }
}

customElements.define('main-footer', Footer);