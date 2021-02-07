import React, { useEffect, useState } from "react";
import * as config from "../config";

export function VinylsList() {
	const [vinyls, setVinyls] = useState([]);

	useEffect(() => {
		fetch(config.db_link + "vinyls")
			.then((r) => r.json())
			.then((body) => setVinyls(body));

		console.log(config.db_link);
	});

	return (
		<div>
			{/* <pre>{JSON.stringify(vinyls, null, 2)}</pre> */}
			<table>
				<thead>
					<tr>
						<th>Autore</th>
						<th>Titolo</th>
					</tr>
				</thead>
				<tbody>
					{vinyls.map(function (v) {
						return (
							<tr key={v.id}>
								<td>{v.autore.nome}</td>
								<td>{v.titolo}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
