import { Col } from 'react-bootstrap';
import feather from "feather-icons";


interface IUser {
    fname: string;
    lname: string;
    email: string;
    occupation: string;
    number: number;
    url: string;
    comments: string;
}

const Step2 = ({ user }: IUser) => {
    return (
        <>
            <h2 className="mb-0">Change password</h2>
            <Col lg={12} className="mt-4">
                <div className="card border-0 rounded p-4">
                    <h5 className="mb-0">Change password :</h5>
                    <form>
                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label className="form-label">Old password :</label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="key" className="fea icon-sm icons" />
                                        <input type="password" className="form-control ps-5" placeholder="Old password" required />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label className="form-label">New password :</label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="key" className="fea icon-sm icons" />
                                        <input type="password" className="form-control ps-5" placeholder="New password" required />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label className="form-label">Re-type New password :</label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="key" className="fea icon-sm icons" />
                                        <input type="password" className="form-control ps-5" placeholder="Re-type New password" required />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-2 mb-0">
                                <button className="btn btn-primary">Save password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Col>

            {/* <div className="form_data">
                <p>First Name: {user.fname}</p>
                <p>Last Name: {user.lname}</p>
                <p>Email: {user.email}</p>
            </div> */}
        </>
    )
}

export default Step2
