"use strict";

export default function makeRequest(method, url)
{
	return new Promise(function (resolve, reject)
	{
		let xhr = new XMLHttpRequest();

		xhr.onload = () =>
		{
			if (xhr.status >= 200 && xhr.status < 300) resolve(JSON.parse(xhr.response));
			else
			{
				reject({
					status: xhr.status,
					statusText: xhr.statusText
				});
			}
		};

		xhr.onerror = () =>
		{
			reject({
				status: xhr.status,
				statusText: xhr.statusText
			});
		};

		xhr.open(method, url);
		xhr.send();
	});
}