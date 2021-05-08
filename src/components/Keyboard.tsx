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
`;

const TextAreaContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
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
`;

const FunctionalKey = styled(Key)`
  background-color: ${(props) => (props.isActive ? "darkseagreen" : "white")};
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    flex: 0 0 30%;
  }
`;

const DeleteKey = styled(Key)`
  background-color: #e60023;
  color: white;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    flex: 0 0 40%;
  }
`;

const ClearKey = styled(Key)`
  background-color: #e60023;
  color: white;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    flex: 0 0 40%;
  }
`;

const SpaceKey = styled(Key)`
  flex: 0 0 25%;
  @media (max-width: 768px) {
    order: -1;
    flex: 0 0 100%;
  }
`;

const StyledTextArea = styled.textarea`
  width: 300px;
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
    const textAreaEl: any = refToContentInput.current;

    if (textAreaEl instanceof HTMLTextAreaElement) {
      textAreaEl.focus();
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
      <h1>Virtual Keyboard with auto shuffle</h1>

      <TextAreaContainer>
        <StyledTextArea
          ref={refToContentInput}
          rows={10}
          onChange={handleContentChange}
          value={content}
        />
      </TextAreaContainer>

      <div>{renderKeys(numericKeys)}</div>

      <AlphaSpecialKeysContainer>
        <div>{renderKeys(alphabetKeys)}</div>
        <div>{renderKeys(specialKeys)}</div>
      </AlphaSpecialKeysContainer>

      <FunctionalKeysContainer>
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

        <SpaceKey
          title="Space"
          handleClick={handleSpace}
          shift={shift}
          capsLock={capsLock}
        />

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
