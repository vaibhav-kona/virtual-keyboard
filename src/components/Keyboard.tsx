import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import shuffle from "../common/shuffle";
import ClearConfirmationModal from "./ClearConfirmationModal";
import Key from "./Key";
import {
  alphabetKeys as aKeys,
  numericKeys as nKeys,
  specialKeys as sKeys,
} from "./keys";

const KeyboardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: mintcream;
  border: 2px solid paleturquoise;
`;

const TitleAndContentContainer = styled.div`
  @media (max-width: 992px) {
    position: sticky;
    top: 0px;
    background-color: mintcream;
    h1 {
      margin-top: 20px;
    }
  }
`;

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
`;

const TextAreaContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    position: sticky;
    top: 20px;
  }
`;

const StyledTextArea = styled.textarea`
  @media (max-width: 992px) {
    width: 300px;
    box-shadow: 4px 5px 11px -5px rgba(23, 22, 22, 0.82);
  }
`;

const AlphaSpecialKeysContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const FunctionalKeysContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;

  @media (max-width: 992px) {
    flex-flow: column wrap;
  }
`;

const FunctionalKey = styled(Key)`
  background-color: ${(props) =>
    props.isActive ? "rgb(143,188,143)" : "white"};

  &:hover {
    background-color: ${(props) =>
      props.isActive ? "rgb(143,188,143, 0.8)" : "white"};
  }
  @media (max-width: 992px) {
    flex: 0 0 30%;
  }
`;

const DeleteKey = styled(Key)`
  background-color: rgb(230, 0, 35);
  color: white;
  &:hover {
    background-color: rgb(230, 0, 35, 0.8);
  }

  @media (max-width: 992px) {
    flex: 0 0 40%;
  }
`;

const ClearKey = styled(Key)`
  background-color: rgb(230, 0, 35);
  color: white;
  &:hover {
    background-color: rgb(230, 0, 35, 0.8);
  }

  @media (max-width: 992px) {
    flex: 0 0 40%;
  }
`;

const SpaceKey = styled(Key)`
  flex: 0 0 25%;
  @media (max-width: 992px) {
    order: -1;
    flex: 0 0 50%;
  }
`;

const EnterKey = styled(Key)`
  flex: 0 0 25%;
  @media (max-width: 992px) {
    order: -1;
    flex: 0 0 50%;
  }
`;

const DeleteClearKeysContainer = styled.div`
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;

    button {
      flex: 0 0 45%;
    }
  }
`;

const SpaceEnterKeysContainer = styled.div`
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;

    button {
      flex: 0 0 45%;
    }
  }
`;

const ShuffleShiftCapsLockKeysContainer = styled.div`
  @media (max-width: 992px) {
    order: 1;

    button {
      padding: 10px;
      font-size: 14px;
    }
  }
`;

const Keyboard = () => {
  const [content, setContent] = useState("");
  const [capsLock, setCapsLock] = useState(false);
  const [shift, setShift] = useState(false);
  const [alphabetKeys, setAlphabetKeys] = useState(aKeys);
  const [numericKeys, setNumericKeys] = useState(nKeys);
  const [specialKeys, setSpecialKeys] = useState(sKeys);
  const [shouldShuffle, setShouldShuffle] = useState(true);
  const [showClearConfirmationModal, setShowClearConfirmationModal] = useState(
    false
  );

  const refToContentInput = useRef(null);

  useEffect(() => {
    focusTextArea();
  }, []);

  const focusTextArea = () => {
    if (window.innerWidth > 992) {
      const textAreaEl: any = refToContentInput.current;

      if (textAreaEl instanceof HTMLTextAreaElement) {
        textAreaEl.focus();
      }
    }
  };

  const handleClick = (keyTitle: string) => {
    setContent(content + keyTitle);

    if (shouldShuffle) {
      setAlphabetKeys(shuffle(alphabetKeys));
      setNumericKeys(shuffle(numericKeys));
      setSpecialKeys(shuffle(specialKeys));
    }

    turnShiftOff();

    focusTextArea();
  };

  const handleSpace = () => {
    handleClick(" ");
  };

  const handleEnter = () => {
    handleClick("\n");
  };

  const handleContentChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const updatedContent = e.target.value;
    setContent(updatedContent);
  };

  const turnCapsLockOn = () => {
    setCapsLock(true);
  };

  const turnCapsLockOff = () => {
    setCapsLock(false);
  };

  const turnShiftOn = () => {
    setShift(true);
  };

  const turnShiftOff = () => {
    setShift(false);
  };

  const turnShuffleOn = () => {
    setShouldShuffle(true);
  };

  const turnShuffleOff = () => {
    setShouldShuffle(false);
  };

  const displayClearConfirmationModal = () => {
    setShowClearConfirmationModal(true);
  };

  const hideClearConfirmationModal = () => {
    setShowClearConfirmationModal(false);
    focusTextArea();
  };

  const handleShiftClick = () => {
    if (shift) {
      turnShiftOff();
    } else {
      turnShiftOn();
    }
  };

  const handleCapsLockClick = () => {
    if (capsLock) {
      turnCapsLockOff();
    } else {
      turnCapsLockOn();
    }
  };

  const handleShuffleClick = () => {
    if (shouldShuffle) {
      turnShuffleOff();
    } else {
      turnShuffleOn();
    }
  };

  const handleDeleteClick = () => {
    const contentCopy = content;
    const updatedContent = contentCopy.slice(0, contentCopy.length - 1);
    setContent(updatedContent);

    focusTextArea();
  };

  const handleClearClick = () => {
    displayClearConfirmationModal();
  };

  const clearContent = () => {
    setContent("");
    hideClearConfirmationModal();
  };

  const renderKeys = (keys: any[]) => {
    return keys.map((key) => (
      <Key
        key={key.title}
        title={key.title}
        shiftCharacter={key.shiftedKey}
        capsLockCharacter={key.upperCaseKey}
        handleClick={handleClick}
        shift={shift}
        capsLock={capsLock}
      />
    ));
  };

  return (
    <KeyboardContainer>
      <TitleAndContentContainer>
        <Title>Virtual Keyboard</Title>

        <TextAreaContainer>
          <StyledTextArea
            ref={refToContentInput}
            rows={10}
            onChange={handleContentChange}
            value={content}
          />
        </TextAreaContainer>
      </TitleAndContentContainer>

      <div>{renderKeys(numericKeys)}</div>

      <AlphaSpecialKeysContainer>
        <div>{renderKeys(alphabetKeys)}</div>
        <div>{renderKeys(specialKeys)}</div>
      </AlphaSpecialKeysContainer>

      <FunctionalKeysContainer>
        <ShuffleShiftCapsLockKeysContainer>
          <FunctionalKey
            title={shouldShuffle ? "Shuffle On" : "Shuffle Off"}
            isActive={shouldShuffle}
            handleClick={handleShuffleClick}
            shift={shift}
            capsLock={capsLock}
          />

          <FunctionalKey
            title={shift ? "Shift On" : "Shift off"}
            isActive={shift}
            handleClick={handleShiftClick}
            shift={shift}
            capsLock={capsLock}
          />

          <FunctionalKey
            title={capsLock ? "Caps Lock On" : "Caps Lock Off"}
            isActive={capsLock}
            handleClick={handleCapsLockClick}
            shift={shift}
            capsLock={capsLock}
          />
        </ShuffleShiftCapsLockKeysContainer>

        <SpaceEnterKeysContainer>
          <SpaceKey
            title="Space"
            handleClick={handleSpace}
            shift={shift}
            capsLock={capsLock}
          />

          <EnterKey
            title="Enter"
            handleClick={handleEnter}
            shift={shift}
            capsLock={capsLock}
          />
        </SpaceEnterKeysContainer>

        <DeleteClearKeysContainer>
          <DeleteKey
            title="Delete"
            handleClick={handleDeleteClick}
            shift={shift}
            capsLock={capsLock}
          />

          <ClearKey
            title="Clear"
            handleClick={handleClearClick}
            shift={shift}
            capsLock={capsLock}
          />
        </DeleteClearKeysContainer>
      </FunctionalKeysContainer>

      {showClearConfirmationModal && (
        <ClearConfirmationModal
          clearContent={clearContent}
          hideClearConfirmationModal={hideClearConfirmationModal}
        />
      )}
    </KeyboardContainer>
  );
};

export default Keyboard;
