import styled from "styled-components";

interface KeyProps {
  title: string;
  handleClick(title: string): void;
  shift: boolean;
  capsLock: boolean;
  shiftCharacter?: string;
  capsLockCharacter?: string | null;
  className?: string;
  isActive?: boolean;
}

const StyledButton = styled.button`
  background-color: lightblue;
  box-shadow: none;
  border: 1px solid grey;
  padding: 12px;
  border-radius: 6px;
  min-width: 64px;
  font-size: 16px;
  margin: 4px;

  &:hover {
    border: 1px solid darkblue;
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Key = ({
  className,
  title,
  handleClick,
  shift,
  capsLock,
  shiftCharacter,
  capsLockCharacter,
}: KeyProps) => {
  let displayTitle = title;

  // c - 0, s - 0 => default
  // c - 1, s - 0 => alpha - to capital
  // c - 0, s - 1 => all shifted characters
  // c - 1, s - 1 => all shifted characters

  if (shift) {
    displayTitle = shiftCharacter || title;
  } else if (capsLock) {
    displayTitle = capsLockCharacter || title;
  }

  return (
    <StyledButton
      className={className}
      type="button"
      onClick={() => handleClick(displayTitle)}
    >
      {displayTitle}
    </StyledButton>
  );
};

export default Key;
