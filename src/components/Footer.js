import React from 'react'

function Footer() {
    return (
        <footer className=" py-4  bg-light-green">

            <div className="container ">
                {/* Row 1 */}
                <div className="row mb-3 ">
                    <div className="col text-center">

                        {/* Row with 2 Columns */}
                        <div className="row">
                            {/* Column 1 */}
                            <div className="col-12 col-md-3  p-3">
                                {/* Image */}
                                <div className="mb-3 text-start">
                                    <img
                                        src="https://tequre.com/wp-content/uploads/2020/04/t-web-logo.png"
                                        alt="Logo"
                                        className="img-fluid responsive-image"
                                    />
                                </div>

                                {/* Paragraph */}
                                <p className="text-start small-text text-gray">
                                    We unleash growth by helping companies adopt cloud native technologies with our products and services!
                                </p>

                                {/* Links with Icons */}
                                <ul className="list-unstyled d-flex flex-wrap">
                                    <li className="mb-2">
                                        <a href="#facebook" className="text-decoration-none">
                                            <img
                                                src="https://via.placeholder.com/30"
                                                alt="Facebook Logo"
                                                className="me-2 rounded-circle image-hover"
                                            />

                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#twitter" className="text-decoration-none">
                                            <img
                                                src="https://via.placeholder.com/30"
                                                alt="Twitter Logo"
                                                className="me-2 rounded-circle"
                                            />

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#instagram" className="text-decoration-none">
                                            <img
                                                src="https://via.placeholder.com/30"
                                                alt="Instagram Logo"
                                                className="me-2 rounded-circle"
                                            />

                                        </a>
                                    </li>

                                    <li className="mb-2">
                                        <a href="#facebook" className="text-decoration-none">
                                            <img
                                                src="https://via.placeholder.com/30"
                                                alt="Facebook Logo"
                                                className="me-2 rounded-circle"
                                            />

                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#twitter" className="text-decoration-none">
                                            <img
                                                src="https://via.placeholder.com/30"
                                                alt="Twitter Logo"
                                                className="me-2 rounded-circle"
                                            />

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#instagram" className="text-decoration-none">
                                            <img
                                                src="https://via.placeholder.com/30"
                                                alt="Instagram Logo"
                                                className="me-2 rounded-circle"
                                            />

                                        </a>
                                    </li>
                                </ul>
                            </div>


                            {/* Column 2 */}

                            <div className="col-md-9 col-12  mx-0 my-auto p-0 row">
                                <div className="row col-md-6 col-12">
                                    <div className="col-md-6 col-12  p-3 my-auto">
                                        <img
                                            src="https://www.infracloud.io/assets/img/generic/glassdoor-rating.svg"
                                            alt="Sample 1"
                                            className="img-fluid"
                                        />
                                    </div>

                                    <div className="col-md-6 col-12 p-3 my-auto">
                                        <img
                                            src="https://www.infracloud.io/assets/img/generic/cncf-stacked-color.svg"
                                            alt="Sample 1"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>

                                <div className="row col-md-6 col-12 my-auto">
                                    <div className="col-md-3 col-6 p-4 my-auto">
                                        <img
                                            src="https://www.infracloud.io/assets/img/generic/kubernetes-kcsp-color.svg"
                                            alt="Sample 1"
                                            className="img-fluid"
                                        />
                                    </div>

                                    <div className="col-md-3 col-6  p-4 my-auto">
                                        <img
                                            src="https://www.infracloud.io/assets/img/generic/certified-tag-2.svg"
                                            alt="Sample 1"
                                            className="img-fluid"
                                        />
                                    </div>

                                    <div className="col-md-3 col-6  p-4 my-auto">
                                        <img
                                            src="https://www.infracloud.io/assets/img/generic/iso.svg"
                                            alt="Sample 1"
                                            className="img-fluid"
                                        />
                                    </div>

                                    <div className="col-md-3 col-6  p-4 my-auto">
                                        <img
                                            src="https://www.infracloud.io/assets/img/generic/certified-tag.svg"
                                            alt="Sample 1"
                                            className="img-fluid"

                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/* Row 2 */}
                <div className="row mb-3 ">



                    <div className="col ">

                        {/* Row with 5 Columns */}
                        <div className="row">

                            {/* column 1 */}
                            <div className="col-lg col-md-6 col-12  py-3 d-flex flex-column text-start">
                                <h6 className="text-gray">AI Cloud</h6>

                                {/* Row 1 */}
                                <div className="mb-5 mt-3 text-start">
                                    {/* Heading */}
                                    <h5 className="mb-3 fs-6 text-bold">Product Engineering</h5>

                                    {/* Links */}
                                    <ul className="list-unstyled">
                                        <li><a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">Cloud Native Product Development</a></li>
                                        <li><a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">Cloud Native FaaS</a></li>
                                        <li><a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">Monolith to Microservices</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">DevRel as a Service</a></li>
                                        <li><a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">Extending Kubernetes Whitepaper</a></li>
                                    </ul>
                                </div>


                                {/* Row 2 */}
                                <div className="mb-5 text-start">
                                    {/* Heading */}
                                    <h5 className="mb-3 fs-6 text-bold">Platform Engineering</h5>

                                    {/* Links */}
                                    <ul className="list-unstyled">
                                        <li><a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">Platform Engineering Consulting</a></li>
                                        <li><a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">Platform Engineering eBook</a></li>
                                        <li><a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">Backstage Consulting</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">Port Consulting</a></li>
                                        <li><a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">Progressive Delivery</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">CI/CD & Dev Exprience</a></li>
                                        <li><a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">Bare Metal Provisioning Consulting</a></li>
                                    </ul>
                                </div>

                            </div>





                            {/* column 2 */}
                            <div className="col-lg col-md-6 col-12  py-3 d-flex flex-column">

                                {/* Row 1 */}
                                <div className="mb-5  text-start">
                                    {/* Heading */}
                                    <h5 className="mb-3 fs-6 text-bold">Application Modernization</h5>

                                    {/* Links */}
                                    <ul className="list-unstyled">
                                        <li><a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">Monolith to Microservices</a></li>
                                        <li><a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">Kubernetes Consulting Services</a></li>
                                        <li><a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">GitOps Consulting</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">CI/CD & Dev Exprience</a></li>
                                        <li><a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">DevOps Toolchain</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">ArgoCD Consulting</a></li>
                                        <li><a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">Jenkins Consulting</a></li>
                                    </ul>
                                </div>


                                {/* Row 2 */}
                                <div className="mb-5  text-start">
                                    {/* Heading */}
                                    <h5 className="mb-3 fs-6 text-bold">Observability & DevSecOps</h5>

                                    {/* Links */}
                                    <ul className="list-unstyled">
                                        <li><a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">DevSecOps Consulting</a></li>
                                        <li><a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">Observability Consulting</a></li>
                                        <li><a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">Grafana Consulting</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">Prometheus Consulting</a></li>
                                    </ul>
                                </div>

                            </div>



                            {/* column 3 */}
                            <div className="col-lg col-md-6 col-12  py-3 d-flex flex-column">

                                {/* Row 1 */}
                                <div className="mb-5  text-start">
                                    {/* Heading */}
                                    <h5 className="mb-3 fs-6 text-bold">Site Reliability Engineering</h5>

                                    {/* Links */}
                                    <ul className="list-unstyled">
                                        <li><a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">SRE Consulting</a></li>
                                        <li><a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">Service Mesh Consulting</a></li>
                                        <li><a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">Cloud Native Networking</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">Istio Consulting</a></li>
                                        <li><a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">Linkerd Consulting</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">Terraform Consulting</a></li>
                                        <li><a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">Backup & Disaster Recovery</a></li>
                                        <li><a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">Bare Metal Provisioning Consulting</a></li>
                                    </ul>
                                </div>


                                {/* Row 2 */}
                                <div className="mb-5  text-start">
                                    {/* Heading */}
                                    <h5 className="mb-3 fs-6 text-bold">Consulting Partners</h5>

                                    {/* Links */}
                                    <ul className="list-unstyled">
                                        <li><a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">GitLab Partner</a></li>
                                        <li><a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">SUSE Rancher Partner</a></li>
                                        <li><a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">Tigera Partner</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">Solo Partner</a></li>
                                    </ul>
                                </div>

                            </div>


                            {/* column 4 */}
                            <div className="col-lg col-md-6 col-12  py-3 d-flex flex-column">

                                {/* Row 1 */}
                                <div className="mb-5  text-start">
                                    {/* Heading */}
                                    <h5 className="mb-3 fs-6 text-bold">Industries</h5>

                                    {/* Links */}
                                    <ul className="list-unstyled">
                                        <li><a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">Banking and Finance</a></li>
                                        <li><a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">Automotive</a></li>
                                    </ul>
                                </div>


                                {/* Row 2 */}
                                <div className="mb-5 text-start">
                                    {/* Heading */}
                                    <h5 className="mb-3 fs-6 text-bold">Enterprise Support</h5>

                                    {/* Links */}
                                    <ul className="list-unstyled">
                                        <li><a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">Linkerd Support</a></li>
                                        <li><a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">Istio Support</a></li>
                                        <li><a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">Argo CD Support</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">Prometheus Support</a></li>
                                        <li><a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">Kasten K10 Support</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">Thanos Support</a></li>
                                    </ul>
                                </div>

                                {/* Row 3 */}
                                <div className="mb-5 text-start">
                                    {/* Heading */}
                                    <h5 className="mb-3 fs-6 text-bold">Solutions</h5>

                                    {/* Links */}
                                    <ul className="list-unstyled">
                                        <li><a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">Fission Enterprise</a></li>
                                        <li><a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">BotKube Enterprise</a></li>
                                        <li><a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">Managed Services for Kubernetes</a></li>
                                    </ul>
                                </div>

                            </div>



                            {/* column 5 */}
                            <div className="col-lg col-md-6 col-12 py-3 d-flex flex-column">

                                {/* Row 1 */}
                                <div className="mb-5 text-start">
                                    {/* Heading */}
                                    <h5 className="mb-3 fs-6 text-bold">Resources</h5>

                                    {/* Links */}
                                    <ul className="list-unstyled">
                                        <li><a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">School of Kubernetes</a></li>
                                        <li><a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">OSS Contributions</a></li>
                                        <li><a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">Cloud Native Blogs</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">Cloud Native Talks</a></li>
                                        <li><a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">Webinars</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">Customers Stories</a></li>
                                        <li><a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">Spelling Bee</a></li>
                                        <li><a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">CNCF Landscape Navigator</a></li>
                                        <li><a href="#link5" className="text-decoration-none text-gray small-text link-hover-orange">Phippy Comic</a></li>
                                    </ul>
                                </div>


                                {/* Row 2 */}
                                <div className="mb-5 text-start">
                                    {/* Heading */}
                                    <h5 className="mb-3 fs-6 text-bold">Company</h5>

                                    {/* Links */}
                                    <ul className="list-unstyled">
                                        <li><a href="#link1" className="text-decoration-none text-gray small-text link-hover-orange">About Us</a></li>
                                        <li><a href="#link2" className="text-decoration-none text-gray small-text link-hover-orange">The InfraCloud Way</a></li>
                                        <li><a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">Careers</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">Mentoring Sessions</a></li>
                                        <li><a href="#link3" className="text-decoration-none text-gray small-text link-hover-orange">Newsroom</a></li>
                                        <li><a href="#link4" className="text-decoration-none text-gray small-text link-hover-orange">Contact Us</a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>


                {/* Row 3 */}
                <div className="">
                    <div className=" text-center row flex-wrap">

                        <div className="col-8  p-2 px-3 mt-3 d-flex flex-wrap text-gray text-center ">
                            <p className="px-2">© 2024 InfraCloud - Unleash Growth!</p>

                            <div className="row">
                            {/* <ul className="list-unstyled d-flex"> */}
                                <div className="col-sm-3 px-4"><a href="#link1" className="text-decoration-none  text-gray ">Terms</a></div>
                                <div className="col-sm-3 px-4"><a href="#link2" className="text-decoration-none text-gray">Privacy</a></div>
                                <div className="col-sm-3 px-4"><a href="#link3" className="text-decoration-none  text-gray">Equal Opportunity</a></div>
                                <div className="col-sm-3 px-4"><a href="#link4" className="text-decoration-none  text-gray">Sitemap</a></div>
                            {/* </ul> */}
                            </div>
                        </div>

                        {/* Inner Div 2 */}
                        <div className="col-md-4 col-12  p-2 mt-3 text-gray text-center d-flex flex-wrap">
                            <span className="px-3">Global Presence :</span>
                            <span className="px-2">USA</span>
                            <span className="px-2">India</span>
                            <span className="px-2">Netherlands</span>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
}

export default Footer
