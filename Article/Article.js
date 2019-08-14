const articleCreator = article => {
	const div = document.createElement("div");
	div.classList.add("article");

	const h2 = document.createElement("h2");
	h2.textContent = article.title;

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

	const elements = [h2, articleDate, p1, p2, p3, expand];

	for (const element of elements) {
		div.appendChild(element);
	}

	return div;
};

for (const article of data) {
	document.querySelector(".articles").appendChild(articleCreator(article));
}
