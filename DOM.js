const title = document.getElementById('title');
const description = document.querySelector('.description');
const button = document.getElementById('changeButton');
const prevButton = document.getElementById('prevButton');

button.addEventListener('click', () => {
    title.textContent = 'Updated Title';
    description.innerHTML = '<strong>Content is updated after click!</strong>';
    description.style.color = 'blue';
});

prevButton.addEventListener('click', () => {
    title.textContent = 'Hello, World!';
    description.innerHTML = 'This is a paragraph.';
    description.style.color = 'black';
})