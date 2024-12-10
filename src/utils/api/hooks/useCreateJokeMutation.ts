import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { Joke } from "./../../../types";
import { createJoke } from "../requests/createJoke";

export const useCreateJokeMutation = () =>
  useMutation<
    AxiosResponse<any, any>,
    AxiosError<any, any>,
    Joke,
    unknown
  >({
    mutationKey: ["create-joke"],
    mutationFn: (joke: Joke) =>
      createJoke(joke),
  });
