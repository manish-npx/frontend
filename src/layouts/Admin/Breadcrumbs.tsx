import React from 'react'
import { ChildProp } from '../../types/commonTypes'

const Breadcrumbs: React.FC<ChildProp> = ({ children }: ChildProp): JSX.Element => {
    return (
        <>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Profile Setting</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item text-capitalize"><a href="/dashboard">Limedesk</a></li>
                                <li className="breadcrumb-item text-capitalize"><a href="/user">Proflie</a></li>
                                <li className="breadcrumb-item text-capitalize active" aria-current="page">Setting</li>
                            </ul>
                        </nav>
                    </div>
                    {children}
                </div>
            </div>

        </>
    )
}

export default Breadcrumbs
