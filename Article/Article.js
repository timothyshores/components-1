const articleCreator = article => {
	const div = document.createElement("div");
	div.classList.add("article");

	const h2 = document.createElement("h2");
	h2.textContent = article.title;
	div.appendChild(h2);

	const articleDate = document.createElement("p");
	articleDate.textContent = article.date;
	articleDate.classList.add("date");

	const p1 = document.createElement("p");
	p1.textContent = article.firstParagraph;

	const p2 = document.createElement("p");
	p2.textContent = article.secondParagraph;

	const p3 = document.createElement("p");
	p3.textContent = article.thirdParagraph;

	const expand = document.createElement("span");
	expand.classList.add("expandButton");
	expand.textContent = "Expand";
	expand.addEventListener("click", () => {
		div.classList.toggle("article-open");
	});

	div.appendChild(articleDate);
	div.appendChild(p1);
	div.appendChild(p2);
	div.appendChild(p3);
	div.appendChild(expand);

	return div;
};

for (const article of data) {
	document.querySelector(".articles").appendChild(articleCreator(article));
}
