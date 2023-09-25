import React from "react";
import { getCurrentUser, logout } from "../../services/auth.service";
import { Link, useNavigate } from "react-router-dom";
import AddStepWizard from "./AddStepWizard";


const Profile: React.FC = () => {

  const currentUser = getCurrentUser();
  const navigate = useNavigate();

  const logOut = () => {

    logout();
    navigate('/login')
  }

  return (
    <>

      <section className="section">
        <div className="container">
          <div className="card">

            <div className="jumbotron">
              <h3>Profile: <strong>{currentUser.name}</strong></h3>
            </div>
            <p></p>
            <p>
              <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
            <p><strong>Authorities:</strong> {currentUser.role}</p>

            <div className="col">
              <Link className='btn btn-sm btn-outline-danger' to="/login" onClick={logOut}>Logout</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
