import React from "react";
import { useHttp } from "../hooks/Http";

import Summary from "./Summary";

const Character = (props) => {
  const [isLoading, fetchedData] = useHttp(
    `https://swapi.dev/api/people/${props.selectedChar}/`,
    []
  );

  const { data } = fetchedData ? fetchedData : [];

  const loadedCharacter = data
    ? {
        id: props.selectedChar,
        name: data.name,
        height: data.height,
        colors: {
          hair: data.hair_color,
          skin: data.skin_color,
        },
        gender: data.gender,
        movieCount: data.films.length,
      }
    : [];

  let content = <p>Loading Character...</p>;

  if (!isLoading && loadedCharacter.id) {
    content = (
      <Summary
        name={loadedCharacter.name}
        gender={loadedCharacter.gender}
        height={loadedCharacter.height}
        hairColor={loadedCharacter.colors.hair}
        skinColor={loadedCharacter.colors.skin}
        movieCount={loadedCharacter.movieCount}
      />
    );
  } else if (!isLoading && !loadedCharacter.id) {
    content = <p>Failed to fetch character.</p>;
  }
  return content;
};

export default React.memo(Character);
