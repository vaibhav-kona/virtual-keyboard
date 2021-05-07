import styled from "styled-components";

interface KeyProps {
  title: string;
  handleClick(title: string): void;
  shift: boolean;
  capsLock: boolean;
  shiftCharacter?: string;
  capsLockCharacter?: string;
}

const StyledButton = styled.button`
  background-color: white;
  box-shadow: none;
  border: 1px solid grey;
  padding: 12px;
  border-radius: 6px;
  min-width: 64px;
  font-size: 16px;
  margin: 4px;

  &:hover {
    border: 1px solid red;
  }
`;

const Key = ({
  title,
  handleClick,
  shift,
  capsLock,
  shiftCharacter,
  capsLockCharacter,
}: KeyProps) => {
  let displayTitle = title;

  if (capsLock) {
    displayTitle = capsLockCharacter || title;
  } else if (shift) {
    displayTitle = shiftCharacter || title;
  }

  return (
    <StyledButton type="button" onClick={() => handleClick(displayTitle)}>
      {displayTitle}
    </StyledButton>
  );
};

export default Key;
