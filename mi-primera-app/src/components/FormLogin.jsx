import { useEffect, useRef } from "react";

const FormLogin = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form action="">
      <input type="text" ref={inputRef} />
    </form>
  );
};

export { FormLogin };
