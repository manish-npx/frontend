import { useState } from "react";
import { Steps, useSteps } from "react-step-builder";
import "react-step-progress-bar/styles.css";
// @ts-ignore
import { ProgressBar } from "react-step-progress-bar";
import "./wizardStyle.css";
import { Container, Row } from 'react-bootstrap';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";


interface IUser {
    fname: string;
    lname: string;
    email: string;
    occupation: string;
    number: number;
    url: string;
    comments: string;
}


const AddStepWizard = () => {
    const { prev, next, jump, total, current, progress } = useSteps();

    const [user, setUser] = useState<IUser>({ fname: "", lname: "", email: "", occupation: "", number: 0, url: "", comments: "" });

    const handleChange = (e: any) => {

        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <>
            <section className="section">
                <Container>
                    <Row>
                        <ProgressBar
                            className='pt-4'
                            width="1111"
                            height="1111"
                            percent={progress * 100}
                            filledBackground="linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% )"
                            text={progress * 100 + " % complete"}
                        />
                    </Row>
                    <br />

                    <Row>
                        <div className="steps_wrapper">
                            <Steps>
                                <div className="step">
                                    <Step1 handleChange={handleChange} user={user} />

                                </div>

                                <div className="step">
                                    <Step2 user={user} />
                                </div>

                                <div className="step">

                                    <Step3 />

                                </div>

                            </Steps>
                            <div className="mt-4 text-md-start text-center d-sm-flex">
                                <div className="mt-md-4 mt-3 mt-sm-0">
                                    <button className="btn btn-secondary  mt-2" onClick={prev}>Prev</button>
                                    {(total === current) ?
                                        <button className="btn btn-success mt-2 ms-2" onClick={next}>Finish</button>
                                        :
                                        <button className="btn btn-primary mt-2 ms-2" onClick={next}>Next</button>
                                    }
                                </div>
                            </div>


                            {/* <div className="steps_data">
                                <div>Total Steps: {total}</div>
                                <div>Current Step: {current}</div>
                                <div>Progress: {progress * 100}%</div>
                            </div> */}
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
}



export default AddStepWizard
