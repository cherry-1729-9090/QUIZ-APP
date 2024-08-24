//REACT JS OVER VIEW
const mongoose = require('mongoose');
const Question = require('../models/Question'); // Ensure the correct path to your Question model

mongoose.connect('mongodb+srv://chitluridevicharan:charan@cluster0.qgrpql7.mongodb.net/QUIZ-APPLICATION?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

const questions = [
  // Easy Level Questions
  {
    question_description: "What is ReactJS?",
    type: "single",
    options: [
      "A JavaScript library for building user interfaces",
      "A CSS framework",
      "A backend framework",
      "A programming language"
    ],
    correct_options: ["A JavaScript library for building user interfaces"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "What is a component in React?",
    type: "single",
    options: [
      "A reusable piece of UI",
      "A JavaScript function",
      "An HTML element",
      "A CSS rule"
    ],
    correct_options: ["A reusable piece of UI"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which method is used to create a React component?",
    type: "single",
    options: [
      "React.createComponent()",
      "React.createElement()",
      "React.component()",
      "React.render()"
    ],
    correct_options: ["React.createElement()"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "True or False: ReactJS is maintained by Facebook.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["True"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "What is JSX in React?",
    type: "single",
    options: [
      "A JavaScript extension that allows writing HTML inside JavaScript",
      "A CSS preprocessor",
      "A backend language",
      "A database query language"
    ],
    correct_options: ["A JavaScript extension that allows writing HTML inside JavaScript"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which of the following is used to pass data to components in React?",
    type: "single",
    options: [
      "state",
      "props",
      "render",
      "context"
    ],
    correct_options: ["props"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "How do you handle events in React?",
    type: "single",
    options: [
      "Using event listeners like in plain JavaScript",
      "Using inline event handlers in JSX",
      "Using setState",
      "Using refs"
    ],
    correct_options: ["Using inline event handlers in JSX"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which of the following is used to render a React component?",
    type: "single",
    options: [
      "ReactDOM.render()",
      "React.render()",
      "ReactDOM.createComponent()",
      "React.createElement()"
    ],
    correct_options: ["ReactDOM.render()"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "True or False: In React, keys should be unique within an array of elements.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["True"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which React hook is used to handle side effects?",
    type: "single",
    options: [
      "useState",
      "useEffect",
      "useReducer",
      "useContext"
    ],
    correct_options: ["useEffect"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },

  // Medium Level Questions
  {
    question_description: "Which of the following is true about React components?",
    type: "multiple",
    options: [
      "They can be stateful or stateless",
      "They are reusable",
      "They must be defined using classes",
      "They can accept props"
    ],
    correct_options: ["They can be stateful or stateless", "They are reusable", "They can accept props"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which method is used to update the state in a React component?",
    type: "single",
    options: [
      "updateState()",
      "setState()",
      "changeState()",
      "modifyState()"
    ],
    correct_options: ["setState()"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which lifecycle method is called once, right after the initial rendering of a component?",
    type: "single",
    options: [
      "componentDidUpdate",
      "componentWillUnmount",
      "componentDidMount",
      "constructor"
    ],
    correct_options: ["componentDidMount"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "True or False: React supports two-way data binding.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["False"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which hook is used to add state to a functional component?",
    type: "single",
    options: [
      "useEffect",
      "useState",
      "useRef",
      "useMemo"
    ],
    correct_options: ["useState"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which of the following is NOT a valid way to create a React component?",
    type: "single",
    options: [
      "As a function component",
      "As a class component",
      "As a higher-order component",
      "As an HTML component"
    ],
    correct_options: ["As an HTML component"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which of the following are ways to optimize the performance of a React application?",
    type: "multiple",
    options: [
      "Memoization",
      "Code splitting",
      "Using pure components",
      "Avoiding keys in lists"
    ],
    correct_options: ["Memoization", "Code splitting", "Using pure components"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "How can you prevent re-renders in a React component?",
    type: "single",
    options: [
      "By using shouldComponentUpdate",
      "By using PureComponent",
      "By using React.memo",
      "All of the above"
    ],
    correct_options: ["All of the above"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "True or False: React Context is used to pass data deeply through the component tree without having to pass props manually at every level.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["True"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which of the following is the correct way to pass props to a component?",
    type: "single",
    options: [
      "<Component prop1={value} />",
      "<Component.prop1=value />",
      "<Component[prop1]=value />",
      "<Component.prop1:value />"
    ],
    correct_options: ["<Component prop1={value} />"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },

  // Hard Level Questions
  {
    question_description: "Which of the following is true about React keys?",
    type: "multiple",
    options: [
      "Keys help React identify which items have changed, are added, or removed",
      "Keys should be unique among sibling elements",
      "Keys can be any unique value",
      "Keys are mandatory in lists"
    ],
    correct_options: ["Keys help React identify which items have changed, are added, or removed", "Keys should be unique among sibling elements"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "What is the purpose of React Fragments?",
    type: "single",
    options: [
      "To return multiple elements without adding an extra node to the DOM",
      "To handle errors in components",
      "To manage state",
      "To update the DOM"
    ],
    correct_options: ["To return multiple elements without adding an extra node to the DOM"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which of the following are valid lifecycle methods in React class components?",
    type: "multiple",
    options: [
      "componentDidMount",
      "componentWillReceiveProps",
      "getSnapshotBeforeUpdate",
      "componentWillUpdate"
    ],
    correct_options: ["componentDidMount", "getSnapshotBeforeUpdate", "componentWillUpdate"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "True or False: React.memo() is used to optimize functional components by memoizing their output.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["True"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which of the following hooks can be used to create a custom hook?",
    type: "multiple",
    options: [
      "useState",
      "useEffect",
      "useContext",
      "All of the above"
    ],
    correct_options: ["All of the above"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "What does the 'useReducer' hook in React do?",
    type: "single",
    options: [
      "It manages local component state",
      "It is used to cache the result of an expensive calculation",
      "It is an alternative to 'useState' for managing complex state logic",
      "It is used to trigger side effects"
    ],
    correct_options: ["It is an alternative to 'useState' for managing complex state logic"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which of the following is the correct way to use the 'useEffect' hook to run only once after the component mounts?",
    type: "single",
    options: [
      "useEffect(() => { /* effect */ }, [])",
      "useEffect(() => { /* effect */ })",
      "useEffect(() => { /* effect */ }, [dependencies])",
      "useEffect(() => { /* effect */ }, [state])"
    ],
    correct_options: ["useEffect(() => { /* effect */ }, [])"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which of the following can be done using React Portals?",
    type: "single",
    options: [
      "Rendering a child into a different part of the DOM",
      "Handling errors in components",
      "Optimizing the render process",
      "None of the above"
    ],
    correct_options: ["Rendering a child into a different part of the DOM"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "Which of the following is true about the Context API in React?",
    type: "multiple",
    options: [
      "It allows passing data through the component tree without props",
      "It is used for local component state",
      "It can be used with functional and class components",
      "It replaces Redux"
    ],
    correct_options: ["It allows passing data through the component tree without props", "It can be used with functional and class components"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  },
  {
    question_description: "True or False: React.lazy() is used for code-splitting and lazy loading components.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["True"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a68f4aec1b960245413')
  }
];

Question.insertMany(questions)
  .then(() => {
    console.log('Questions inserted successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('Error inserting questions:', error);
  });
