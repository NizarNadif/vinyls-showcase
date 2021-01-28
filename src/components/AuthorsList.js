import React, { useEffect, useState } from "react";
import * as config from "../config";

export function AuthorsList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch(config.db_link + "authors")
      .then((r) => r.json())
      .then((body) => setAuthors(body));
  });

  return (
    <div>
      <pre>{JSON.stringify(authors, null, 2)}</pre>
    </div>
  );
}
