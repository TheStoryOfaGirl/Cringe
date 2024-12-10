import { ComponentProps } from "react";
import { classnames } from "./../../utils/classnames";
import styles from "./Button.module.css";

interface ButtonProps extends ComponentProps<'button'> {
  text: string;
  mode: "primary" | "secondary";
}

export const Button = ({ text, mode, ...props }: ButtonProps) => {
  return (
    <>
      <button type="button" className={styles[mode]} {...props}>
        {text}
      </button>
    </>
  );
};
