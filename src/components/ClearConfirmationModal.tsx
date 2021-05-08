import styled from "styled-components";

interface Props {
  clearContent(): void;
  hideClearConfirmationModal(): void;
}

const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  z-index: 10;
`;

const Modal = styled.div`
  background-color: white;
  border: 1px solid grey;
  position: absolute;
  height: 170px;
  width: 300px;
  max-width: 100%;
  z-index: 20;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  border-radius: 12px;
`;

const ModalTitle = styled.p`
  margin-top: 0px;
  margin-bottom: 40px;
  font-size: 16px;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButton = styled.button`
  border: 1px solid black;
  background-color: white;
  font-size: 16px;
  box-shadow: none;
  flex: 0 0 30%;
  margin: 0px 10% 0px;
  padding: 8px;
  cursor: pointer;
  border-radius: 6px;
`;

const PrimaryActionButton = styled(ActionButton)`
  background-color: #e60023;
  color: white;
  border: 1px solid red;
`;

const ClearConfirmationModal = ({
  clearContent,
  hideClearConfirmationModal,
}: Props) => {
  return (
    <ModalContainer>
      <Modal>
        <ModalTitle>Do you want to clear all content?</ModalTitle>

        <ActionButtonsContainer>
          <PrimaryActionButton onClick={clearContent}>
            Confirm
          </PrimaryActionButton>
          <ActionButton onClick={hideClearConfirmationModal}>
            Cancel
          </ActionButton>
        </ActionButtonsContainer>
      </Modal>
    </ModalContainer>
  );
};

export default ClearConfirmationModal;
