import React from 'react'
import Shape from '../layouts/Shape'
import aboutImage from '../assets/images/company/about.jpg'
import { Container } from 'react-bootstrap'
import Layout from '../layouts/Layout'

const About: React.FC = () => {
    return (
        <>
            <Layout title='About Us'>
                <section className="section">
                    <Container>
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="position-relative">
                                    <img src={aboutImage} className="rounded img-fluid mx-auto d-block" alt="" />
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="section-title ms-lg-4">
                                    <h4 className="title mb-4">Our Story</h4>
                                    <p className="text-muted">Start working with <span className="text-primary fw-bold">Limedesk</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                                    <a href="/" className="btn btn-primary mt-3">Buy Now <i className="uil uil-angle-right-b"></i></a>
                                </div>
                            </div>
                        </div>
                    </Container>

                    <div className="container mt-100 mt-60">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Key Features</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">Limedesk</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                    <div className="icon text-center rounded-circle me-3">
                                        <i data-feather="monitor" className="fea icon-ex-md"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="title mb-0">Fully Responsive</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                    <div className="icon text-center rounded-circle me-3">
                                        <i data-feather="heart" className="fea icon-ex-md"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="title mb-0">Browser Compatibility</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                    <div className="icon text-center rounded-circle me-3">
                                        <i data-feather="eye" className="fea icon-ex-md"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="title mb-0">Retina Ready</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                    <div className="icon text-center rounded-circle me-3">
                                        <i data-feather="bold" className="fea icon-ex-md"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="title mb-0">Based On Bootstrap 5</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                    <div className="icon text-center rounded-circle me-3">
                                        <i data-feather="feather" className="fea icon-ex-md"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="title mb-0">Feather Icons</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                    <div className="icon text-center rounded-circle me-3">
                                        <i data-feather="code" className="fea icon-ex-md"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="title mb-0">Built With SASS</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                    <div className="icon text-center rounded-circle me-3">
                                        <i data-feather="user-check" className="fea icon-ex-md"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="title mb-0">W3c Valid Code</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                    <div className="icon text-center rounded-circle me-3">
                                        <i data-feather="git-merge" className="fea icon-ex-md"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="title mb-0">Flaticon Icons</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                    <div className="icon text-center rounded-circle me-3">
                                        <i data-feather="settings" className="fea icon-ex-md"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="title mb-0">Easy to customize</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mt-4 pt-2 text-center">
                                <a href="/" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default About
