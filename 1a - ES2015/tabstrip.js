"use strict";

export default class TabStrip
{
	constructor(id, data)
	{
		this.buildTree(id, data);
	}


	buildTree(id, data)
	{
		let tStrip = document.getElementById(id);

		if (tStrip)
		{
			let ul = document.createElement("ul")
			let container = document.createElement("div")

			ul.className = "tabSTrip";
			tStrip.appendChild(ul);

			container.className = "container";
			tStrip.appendChild(container);

			for (let tabData of data)
			{
				let itemData = tabData.content;
				let tab = document.createElement("li");
				let title = document.createElement("a")
				let frame = document.createElement("div")

				title.innerText = tabData.title;
				title.href = "#";
				title.addEventListener("click", event =>
				{
					event.preventDefault();

					this.setTab(event.target.parentNode);
				});

				frame.className = "frame";
				frame.innerHTML = `
					<div class="image">
						<img alt="${tabData.title}" src="./${itemData.url}" />
					</div>
					<div class="hideButton">
						<input type="submit" value="Drop" />
					</div>
				`;

				let button = frame.querySelector("input[type=submit]");

				button.addEventListener("click", event =>
				{
					event.preventDefault();

					event.target.parentNode.parentNode.querySelector(".image").className = "image hidden";
				});

				tab.$frame = frame;

				tab.appendChild(title);
				ul.appendChild(tab);
				container.appendChild(frame)
			}

			this.setTab(ul.childNodes[0])
		}
	}

	setTab(sourceElem)
	{
		for (let tab of sourceElem.parentNode.childNodes) if (tab.nodeType === 1) tab.className = "", tab.$frame.className = "frame hidden";

		sourceElem.className = "selected";
		sourceElem.$frame.className = "frame";
		for (let div of sourceElem.$frame.parentNode.querySelectorAll(".image")) div.className = "image";
	}
}
