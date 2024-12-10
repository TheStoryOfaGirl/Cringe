import { Joke } from "./../../../../types";
import { api, API_URL } from "./../../../../utils/api/api";

export const createJoke = async (joke: Joke) =>
  await api.post(`/create-joke/`, joke);
