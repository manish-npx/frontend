import React from 'react'

const AdminFooter: React.FC = () => {
    return (
        <>
            {/* Footer Start */}
            <footer className="shadow py-3">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="text-sm-start text-center mx-md-2">
                                <p className="mb-0 text-muted">©  Limedesk. Design with <i className="mdi mdi-heart text-danger" /> by <a href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</a>.</p>
                            </div>
                        </div>{/*end col*/}
                    </div>{/*end row*/}
                </div>{/*end container*/}
            </footer>{/*end footer*/}
            {/* End */}

        </>
    )
}

export default AdminFooter
