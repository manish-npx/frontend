import Toast from "react-bootstrap/Toast";
import IMessageProp from "../../types/message.type";
import { useState } from "react";
import { ToastContainer } from "react-bootstrap";


const Message = ({ header, body, status = false, small = '1' }: IMessageProp) => {

  const [show, setShow] = useState<boolean>(status);



  return (
    <>
      <div aria-live="polite" aria-atomic="true" className="mt-5">
        <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
          <Toast onClose={() => setShow(false)} show={show} delay={500} autohide >
            <Toast.Header>
              <strong className="me-auto">{header}</strong>
              <small>{small} mins ago</small>
            </Toast.Header>
            <Toast.Body>{body}.</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
};

export default Message;
