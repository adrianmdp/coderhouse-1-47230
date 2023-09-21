import { useState } from "react";

const Button = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
  };

  return (
    <button disabled={isDisabled} onClick={handleClick}>
      Mi button
    </button>
  );
};

export default Button;
