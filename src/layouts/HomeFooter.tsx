import React from 'react'
import { Link } from 'react-router-dom'

const HomeFooter: React.FC = () => {
    return (
        <>
            <section className="section border-bottom bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5 col-12 order-1 order-md-2">
                            <img src="assets/images/illustrator/user_interface.svg" className="img-fluid mx-auto d-block" alt='userInterface' />
                        </div>
                        <div className="col-lg-7 col-md-7 col-12 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title">
                                <h4 className="title mb-4">Available for your <br /> Smartphones</h4>
                                <p className="text-muted para-desc mb-0">Start working with <span className="text-primary fw-bold">Limedesk</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <div className="my-4">
                                    <Link to="#" className="btn btn-lg btn-dark mt-2 me-2"><i className="uil uil-apple" /> App Store</Link>
                                    <Link to="#" className="btn btn-lg btn-dark mt-2"><i className="uil uil-google-play" /> Play Store</Link>
                                </div>
                                <div className="d-inline-block">
                                    <div className="pt-4 d-flex align-items-center border-top">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-smartphone fea icon-md me-2 text-primary"><rect x={5} y={2} width={14} height={20} rx={2} ry={2} /><line x1={12} y1={18} x2="12.01" y2={18} /></svg>
                                        <div className="content">
                                            <h6 className="mb-0">Install app now on your cellphones</h6>
                                            <a href="#" className="text-primary">Learn More <i className="uil uil-angle-right-b align-middle" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeFooter
