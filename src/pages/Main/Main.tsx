import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "./../../shared/Button/Button";
import { Header } from "./../../shared/Header/Header";
import styles from "./Main.module.css";
import { Textarea } from "./../../shared/Textarea/Textarea";
import { useCreateJokeMutation } from "./../../utils/api/hooks/useCreateJokeMutation";
import { Loader } from "./../../shared/Loader/Loader";

export const Main = () => {
  const [isContext, setIsContext] = useState(false);
  const [context, setContext] = useState("Придумай любую кринжовую шутку");
  const [joke, setJoke] = useState("");
  const { mutate, isPending, isSuccess } = useCreateJokeMutation();

  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setContext(evt.target.value);
  };

  const handleClickCreateJoke = async () => {
    mutate(
      { topic_input: context ? context : "Придумай любую кринжовую шутку" },
      {
        onSuccess: (response) => {
          setJoke(response.data.text_joke);
        },
      }
    );
  };

  useEffect(() => {
    mutate(
      { topic_input: context },
      {
        onSuccess: (response) => {
          setJoke(response.data.text_joke);
        },
      }
    );
  }, []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Случайная штука</h1>
        <div className={styles.joke}>
          {isPending && <div className={styles.loader}>
            <Loader/>
            </div>}
          {isSuccess && <p>{joke}</p>}
        </div>
        {isContext && (
          <>
            <div className={styles.container_context}>
              <p>Ввод контекста</p>
              <Textarea
                placeholer="Например: Напиши шутку про кота"
                onChange={handleChange}
              />
            </div>
          </>
        )}
        <Button
          text="СГЕНЕРИРОВАТЬ"
          mode="primary"
          onClick={handleClickCreateJoke}
        />
        {!isContext && (
          <div className={styles.block_context}>
            <p>Желаете персонализировать шутку? </p>
            <Button
              text="Введите контекст"
              mode="secondary"
              onClick={() => setIsContext(true)}
            />
          </div>
        )}
      </div>
      <div className={styles.hidden_container}></div>
    </>
  );
};
