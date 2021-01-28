import React, { useState, useEffect } from "react";
import * as config from "../config";

export function VinylDetails(props) {
  const { id } = props.match.params;
  const [vinyl, setVinyl] = useState({});

  useEffect(() => {
    fetch(config.db_link + "vinyls/" + id)
      .then((r) => r.json())
      .then((body) => setVinyl(body));
  });
  return (
    <>
      <h3>dettagli per il vinile {id}</h3>
      <pre>{JSON.stringify(vinyl, null, 2)}</pre>
    </>
  );
}
