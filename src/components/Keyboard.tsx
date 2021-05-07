import { ChangeEventHandler, useState } from "react";
import styled from "styled-components";
import shuffle from "../common/shuffle";
import Key from "./Key";
import keys from "./keys";

const KeyboardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 700px;
  margin: auto;
`;

const StyledTextArea = styled.textarea`
  width: 300px;
`;

const Keyboard = () => {
  const [content, setContent] = useState("");
  const [capsLock, setCapsLock] = useState(false);
  const [shift, setSshift] = useState(false);
  const [virtualKeys, setVirtualKeys] = useState(keys);

  const handleClick = (keyTitle: string) => {
    setContent(content + keyTitle);
    setVirtualKeys(shuffle(virtualKeys));
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
    setSshift(true);
  };

  const turnShiftOff = () => {
    setSshift(false);
  };

  const handleShiftClick = () => {
    turnShiftOn();
  };

  const handleCapsLockClick = () => {
    if (capsLock) {
      turnCapsLockOff();
    } else {
      turnCapsLockOn();
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

  return (
    <KeyboardContainer>
      <div>
        <StyledTextArea
          rows={10}
          onChange={handleContentChange}
          value={content}
        />
      </div>

      <div>
        {virtualKeys.map((key) => (
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
        <Key
          title="Shift"
          handleClick={handleShiftClick}
          shift={shift}
          capsLock={capsLock}
        />

        <Key
          title="Caps Lock"
          handleClick={handleCapsLockClick}
          shift={shift}
          capsLock={capsLock}
        />

        <Key
          title="Delete"
          handleClick={handleDeleteClick}
          shift={shift}
          capsLock={capsLock}
        />

        <Key
          title="Space"
          handleClick={handleSpace}
          shift={shift}
          capsLock={capsLock}
        />
      </div>
    </KeyboardContainer>
  );
};

export default Keyboard;
