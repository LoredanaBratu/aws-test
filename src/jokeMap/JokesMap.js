import React from "react";
import Joke from "../jokes/Joke";
import JokesData from "./JokesData";

export default function JokesMap() {
  //   const jokeComponents = JokesData.map(function(joke) {
  //     return <Joke key={joke.id} question={joke.question} answer={joke.answer} />; SAUUUUU
  const jokeComponents = JokesData.map(obj => (
    <Joke key={obj.id} question={obj.question} answer={obj.answer} />
  ));
  //});
  return <div>{jokeComponents}</div>;
}
