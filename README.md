1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById is used to get one specific element with its with its unique ID. This returns one single element. Whereas getElementsByClassName returns multiple elements those share the same class name.
querySelector returns the first matching element. And querySelectorAll returns all matching elements.

2. How do you create and insert a new element into the DOM?
- I use document.createElement() then add content or classes. This is how I create. Then to insert, I use methods like appendChild() or append().

3. What is Event Bubbling? And how does it work?
- Event bubbling means that when an event happens on an element, it starts from that element and then moves upward through its parent elements. For example, if I click a button inside a job card, the click event first happens on the button, then the job card, then the container, and finally the document.

4. What is Event Delegation in JavaScript? Why is it useful?
- Event delegation is a where we attach one event listener to a parent element and handle events for its child elements using event bubbling.
The usefulness is written below:
    1. It improves performance
    2. It works with dynamically created elements
    3. It keeps the code cleaner and easier to maintain

5. What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() stops the default browser behavior. stopPropagation() stops the event from bubbling up to parent elements.
