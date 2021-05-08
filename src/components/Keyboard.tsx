import { ChangeEventHandler, useState } from "react";
import styled from "styled-components";
import shuffle from "../common/shuffle";
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
`;

const FunctionalKey = styled(Key)`
  background-color: ${(props) => (props.isActive ? "darkseagreen" : "white")};
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteKey = styled(Key)`
  background-color: #ff6961;
  &:hover {
    opacity: 0.8;
  }
`;

// const ClearKey = styled(Key)`
//   background-color: #ff6961;
//   &:hover {
//     opacity: 0.8;
//   }
// `;

const SpaceKey = styled(Key)`
  flex: 0 0 25%;
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
  // const [showClearConfirmationModal, setShowClearConfirmationModal] = useState(
  //   false
  // );

  const handleClick = (keyTitle: string) => {
    setContent(content + keyTitle);

    if (shouldShuffle) {
      setAlphabetKeys(shuffle(alphabetKeys));
      setNumericKeys(shuffle(numericKeys));
      setSpecialKeys(shuffle(specialKeys));
    }

    turnShiftOff();
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

  // const displayClearConfirmationModal = () => {
  //   setShowClearConfirmationModal(true);
  // };

  // const hideClearConfirmationModal = () => {
  //   setShowClearConfirmationModal(false);
  // };

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

  const handleSpace = () => {
    setContent(content + " ");
  };

  const handleDeleteClick = () => {
    const contentCopy = content;
    const updatedContent = contentCopy.slice(0, contentCopy.length - 1);
    setContent(updatedContent);
  };

  // const handleClearClick = () => {
  //   displayClearConfirmationModal();
  //   setContent("");
  // };

  // const clearContent = () => {
  //   setContent("");
  // };

  return (
    <KeyboardContainer>
      <h1>Virtual Keyboard with auto shuffle</h1>

      <TextAreaContainer>
        <StyledTextArea
          rows={10}
          onChange={handleContentChange}
          value={content}
        />
      </TextAreaContainer>

      <div>
        {numericKeys.map((key) => (
          <Key
            key={key.title}
            title={key.title}
            shiftCharacter={key.shiftedKey}
            capsLockCharacter={key.upperCaseKey}
            handleClick={handleClick}
            shift={shift}
            capsLock={capsLock}
          />
        ))}
      </div>

      <AlphaSpecialKeysContainer>
        <div>
          {alphabetKeys.map((key) => (
            <Key
              key={key.title}
              title={key.title}
              shiftCharacter={key.shiftedKey}
              capsLockCharacter={key.upperCaseKey}
              handleClick={handleClick}
              shift={shift}
              capsLock={capsLock}
            />
          ))}
        </div>

        <div>
          {specialKeys.map((key) => (
            <Key
              key={key.title}
              title={key.title}
              shiftCharacter={key.shiftedKey}
              capsLockCharacter={key.upperCaseKey}
              handleClick={handleClick}
              shift={shift}
              capsLock={capsLock}
            />
          ))}
        </div>
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

        {/* <ClearKey
          title="Clear"
          handleClick={handleClearClick}
          shift={shift}
          capsLock={capsLock}
        /> */}
      </FunctionalKeysContainer>

      {/* {showClearConfirmationModal && (
        <div>
          <div>Do you want to clear all content?</div>
          <button onClick={clearContent}>Confirm</button>
          <button onClick={hideClearConfirmationModal}>Cancel</button>
        </div>
      )} */}
    </KeyboardContainer>
  );
};

export default Keyboard;
