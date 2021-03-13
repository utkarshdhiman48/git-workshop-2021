let spider = document.createElement("img");
spider.setAttribute('src', './assets/spider.svg');
spider.classList.add('bug');

let bugWeb = document.createElement('div');
bugWeb.classList.add('bug-web');

let bugParent = document.createElement('div');
bugParent.classList.add("bug-parent");

let bugContainer = document.createElement('div');
bugContainer.classList.add("bug-container");

bugContainer.appendChild(bugParent);
bugParent.appendChild(bugWeb);
bugParent.appendChild(spider);

function bug(){
	document.body.appendChild(bugContainer);
	console.log("buggss!!");
}
