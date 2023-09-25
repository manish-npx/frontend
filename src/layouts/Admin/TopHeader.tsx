import React, { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'


type PropType = {
    setToggleMenu: Dispatch<SetStateAction<string>>,
    toggleMenu: string
}


const TopHeader: React.FC<PropType> = ({ setToggleMenu, toggleMenu }: PropType) => {

    const toggleSIdeMenu = (e: React.FormEvent) => {
        e.preventDefault();
        toggleMenu !== 'toggled' ? setToggleMenu('toggled') : setToggleMenu('')
    }

    return (
        <>
            <div className="top-header">
                <div className="header-bar d-flex justify-content-between border-bottom">
                    <div className="d-flex align-items-center">
                        <Link to="#" className="logo-icon me-3">
                            <img src="assets/images/logo-icon.png" height="30" className="small" alt="" />
                            <span className="big">
                                <img src="assets/images/logo-dark.png" height="24" className="logo-light-mode" alt="" />
                                <img src="assets/images/logo-light.png" height="24" className="logo-dark-mode" alt="" />
                            </span>
                        </Link>
                        <Link id="close-sidebar" className="btn btn-icon btn-soft-light" to="" onClick={(e) => toggleSIdeMenu(e)}>
                            <i className="ti ti-menu-2"></i>
                        </Link>
                    </div>

                    <ul className="list-unstyled mb-0">
                        <li className="list-inline-item mb-0">
                            <Link to="/" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <div className="btn btn-icon btn-soft-light"><i className="ti ti-settings"></i></div>
                            </Link>
                        </li>

                        <li className="list-inline-item mb-0 ms-1">
                            <div className="dropdown dropdown-primary">
                                <button type="button" className="btn btn-icon btn-soft-light dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-bell"></i></button>
                                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                    <span className="visually-hidden">New alerts</span>
                                </span>

                                <div className="dropdown-menu dd-menu shadow rounded border-0 mt-3 p-0" data-simplebar style={{ height: "320px; width: 290px" }}>
                                    <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
                                        <h6 className="mb-0 text-dark">Notifications</h6>
                                        <span className="badge bg-soft-danger rounded-pill">3</span>
                                    </div>
                                    <div className="p-3">
                                        <Link to="#!" className="dropdown-item features feature-primary key-feature p-0">
                                            <div className="d-flex align-items-center">
                                                <div className="icon text-center rounded-circle me-2">
                                                    <i className="ti ti-shopping-cart"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="mb-0 text-dark title">Order Complete</h6>
                                                    <small className="text-muted">15 min ago</small>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#!" className="dropdown-item features feature-primary key-feature p-0 mt-3">
                                            <div className="d-flex align-items-center">
                                                <img src="assets/images/client/04.jpg" className="avatar avatar-md-sm rounded-circle border shadow me-2" alt="" />
                                                <div className="flex-1">
                                                    <h6 className="mb-0 text-dark title"><span className="fw-bold">Message</span> from Luis</h6>
                                                    <small className="text-muted">1 hour ago</small>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#!" className="dropdown-item features feature-primary key-feature p-0 mt-3">
                                            <div className="d-flex align-items-center">
                                                <div className="icon text-center rounded-circle me-2">
                                                    <i className="ti ti-currency-dollar"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="mb-0 text-dark title"><span className="fw-bold">One Refund Request</span></h6>
                                                    <small className="text-muted">2 hour ago</small>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="#!" className="dropdown-item features feature-primary key-feature p-0 mt-3">
                                            <div className="d-flex align-items-center">
                                                <div className="icon text-center rounded-circle me-2">
                                                    <i className="ti ti-truck-delivery"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="mb-0 text-dark title">Deliverd your Order</h6>
                                                    <small className="text-muted">Yesterday</small>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div >

        </>
    )
}

export default TopHeader
