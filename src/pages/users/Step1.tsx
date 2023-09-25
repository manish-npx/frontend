import React from "react";
import { Col, Card } from "react-bootstrap";


interface IUser {
    fname: string;
    lname: string;
    email: string;
    occupation: string;
    number: number;
    url: string;
    comments: string;
}

interface IStepProp {
    user: IUser;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Step1 = ({ user, handleChange }: IStepProp) => {
    return (
        <>
            <h2 className="text-md-start text-center mb-0">Personal Detail</h2>

            <Col lg={12} className="mt-4">
                <Card className="border rounded">
                    <div className="card-body">
                        <form>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">First Name</label>
                                        <div className="form-icon position-relative">
                                            <i data-feather="user" className="fea icon-sm icons" />
                                            <input
                                                name="fname"
                                                id="first"
                                                type="text"
                                                className="form-control ps-5"
                                                placeholder="First Name :"
                                                value={user.fname}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Last Name</label>
                                        <div className="form-icon position-relative">
                                            <i data-feather="user-check"
                                                className="fea icon-sm icons"
                                            />
                                            <input
                                                name="lname"
                                                id="last"
                                                type="text"
                                                className="form-control ps-5"
                                                placeholder="Last Name :"
                                                value={user.lname}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Email</label>
                                        <div className="form-icon position-relative">
                                            <i data-feather="mail" className="fea icon-sm icons" />
                                            <input
                                                name="email"
                                                id="email"
                                                type="email"
                                                className="form-control ps-5"
                                                placeholder="Your email :"
                                                value={user.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Occupation</label>
                                        <div className="form-icon position-relative">
                                            <i
                                                data-feather="bookmark"
                                                className="fea icon-sm icons"
                                            />
                                            <input
                                                name="occupation"
                                                id="occupation"
                                                type="text"
                                                className="form-control ps-5"
                                                placeholder="Occupation :"
                                                value={user.occupation}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Phone No. :</label>
                                            <div className="form-icon position-relative">
                                                <i data-feather="phone" className="fea icon-sm icons" />
                                                <input
                                                    name="number"
                                                    id="number"
                                                    type="text"
                                                    className="form-control ps-5"
                                                    placeholder="Phone :"
                                                    value={user.number}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Website :</label>
                                            <div className="form-icon position-relative">
                                                <i data-feather="globe" className="fea icon-sm icons" />
                                                <input
                                                    name="url"
                                                    id="url"
                                                    type="url"
                                                    className="form-control ps-5"
                                                    placeholder="Url :"
                                                    value={user.url}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <div className="form-icon position-relative">
                                            <i
                                                data-feather="message-circle"
                                                className="fea icon-sm icons"
                                            />
                                            <textarea
                                                name="comments"
                                                id="comments"
                                                rows={4}
                                                className="form-control ps-5"
                                                placeholder="Description :"
                                                defaultValue={user.comments}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Card>
            </Col>
            {/*  <div className="form">
                <Row>
                    <Col lg={2}>
                        <label htmlFor="fname">First Name:</label>
                    </Col>
                    <Col lg={10}>
                        <input
                            className="form-control"
                            id="fname"
                            name="fname"
                            value={user.fname}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <label htmlFor="lname">Last Name:</label>
                <input
                    id="lname"
                    name="lname"
                    value={user.lname}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
            </div> */}
        </>
    );
};

export default Step1;
