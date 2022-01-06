const container = document.querySelector('#container');

const paragraph = document.createElement('div');

const title = document.createElement('h3');

const div = document.createElement('div');

const mainTitle = document.createElement('h1');

mainTitle.textContent = "Im in a div!"

const text = document.createElement('p');

text.textContent = "ME TOO!";

div.appendChild(mainTitle);
div.appendChild(text);

div.style.backgroundColor = 'pink';

div.style.border = "solid black";



title.textContent = 'Im a blue h3!';

title.style.color = 'blue';

paragraph.style.color = 'red';

paragraph.textContent = "Hey Im red";

container.appendChild(paragraph);

container.appendChild(title);

container.appendChild(div);

