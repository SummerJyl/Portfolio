The Lesson: Always verify that every variable used in the JSX is accounted for in the component's state or props.

JavaScript
// ReferenceError: contactOpen is not defined
// FIX: Add to top of App.jsx
const [contactOpen, setContactOpen] = useState(false);