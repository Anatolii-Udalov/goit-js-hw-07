const listItem = document.querySelectorAll(".item");
console.log('Number of categories: ' + listItem.length);
listItem.forEach((listItems) => {
    console.log('Category: ' + listItems.firstElementChild.textContent);
    console.log('Elements: ' + listItems.querySelectorAll("li").length);
});
