import React from "react";
import styled from "styled-components";

function Modal({ setOpenModal, deleteIcon, id }) {
  return (
    <Container>
      <div className="text">Are you sure you want to delete this post?</div>
      <div className="footer">
        <button
          className="cancel"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          No, go back
        </button>
        <button
          className="confirm"
          onClick={() => {
            deleteIcon(id);
          }}
        >
          Yes, delete it
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 597px;
  height: 262px;

  background: #333333;
  border-radius: 50px;

  position: fixed;
  top: 400px;
  left: 400px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .text {
    width: 350px;
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;

    color: #ffffff;
  }

  .footer {
    width: 320px;

    display: flex;
    justify-content: space-around;

    .cancel {
      width: 134px;
      height: 37px;

      background: #ffffff;
      border-radius: 5px;

      font-family: "Lato", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;

      /* identical to box height */

      color: #1877f2;
    }
    .confirm {
      width: 134px;
      height: 37px;

      background: #1877f2;
      border-radius: 5px;

      font-family: "Lato", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;

      color: #ffffff;
    }
  }
`;

export default Modal;
