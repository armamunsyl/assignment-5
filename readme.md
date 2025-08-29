1. getElementById, getElementsByClassName, querySelector, querySelectorAll

getElementById finds only one element using its unique id. getElementsByClassName finds many elements that share the same class name, and it gives a collection of them. querySelector can find the first element that matches a CSS style selector like .class or #id. querySelectorAll works the same way but it gives all matching elements as a list.

2. Create and insert a new element into the DOM

To add something new in a page, first create it with document.createElement("tag"). Then give it some text using innerText or design using classList. Finally, put it in the page with appendChild or append. For example, you can make a new div and attach it to the body.

3. Event Bubbling

When you click on something, the event first happens on that element, then it slowly goes up to its parent, then the parent’s parent, until it reaches the top of the page. This is called bubbling because the click seems to rise upwards like a bubble.

4. Event Delegation

Instead of adding click events to many small elements, you can add just one event to their parent. Inside that parent you check which child was clicked. This is called event delegation. It is useful because it needs less code and it still works even if new elements are added later.

5. preventDefault vs stopPropagation

preventDefault() stops the browser’s normal action, like stopping a link from opening or a form from submitting. stopPropagation() stops the bubbling process so the event does not go to parent elements. They are different: one controls the default action and the other controls the event flow.