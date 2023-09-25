import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {

    return (
        <>

            <footer className="footer bg-footer" style={{ backgroundImage: 'url("assets/images/svg-map.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className="bg-footer">
                    <div className="row justify-content-center">
                        <div className="col-12 py-lg-5">
                            <div className="footer-py-60 text-center">
                                <Link to="#" className="logo-footer">
                                    <img src="assets/images/logo-light.png" height={30} alt={'light-logo'} />
                                </Link>
                                <p className="mt-4 para-desc mx-auto">Start working with Limedesk that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                    <li className="list-inline-item mb-0"><Link to="/" target="_blank" className="rounded"><i className="uil uil-shopping-cart align-middle" title="Buy Now" /></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="/" target="_blank" className="rounded"><i className="uil uil-dribbble align-middle" title="dribbble" /></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="/" target="_blank" className="rounded"><i className="uil uil-behance align-middle" title="behance" /></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="/" target="_blank" className="rounded"><i className="uil uil-facebook-f align-middle" title="facebook" /></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="/" target="_blank" className="rounded"><i className="uil uil-instagram align-middle" title="instagram" /></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="/" target="_blank" className="rounded"><i className="uil uil-twitter align-middle" title="twitter" /></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="/" target="_blank" className="rounded"><i className="uil uil-envelope align-middle" title="email" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-py-30 footer-bar bg-footer">
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="text-center">
                                    <p className="mb-0">© 2023 Limedesk. Design with <i className="mdi mdi-heart text-danger" /> by <a href="#" className="text-reset">Manish</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}

export default Footer
