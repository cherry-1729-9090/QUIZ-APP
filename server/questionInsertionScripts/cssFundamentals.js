// CSS FUNDAMENTALS
const mongoose = require('mongoose');
const Question = require('../models/Question'); // Ensure the correct path to your Question model

mongoose.connect('mongodb+srv://chitluridevicharan:charan@cluster0.qgrpql7.mongodb.net/QUIZ-APPLICATION?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

const questions = [
  // Easy Level Questions
  {
    question_description: "What does CSS stand for?",
    type: "single",
    options: [
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets"
    ],
    correct_options: ["Cascading Style Sheets"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which property is used to change the background color?",
    type: "single",
    options: [
      "bgcolor",
      "color",
      "background-color",
      "background"
    ],
    correct_options: ["background-color"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which HTML attribute is used to define inline styles?",
    type: "single",
    options: [
      "class",
      "style",
      "font",
      "styles"
    ],
    correct_options: ["style"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "True or False: CSS stands for Computer Style Sheets.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["False"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which CSS property controls the text size?",
    type: "single",
    options: [
      "font-style",
      "font-size",
      "text-size",
      "text-style"
    ],
    correct_options: ["font-size"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "How do you select an element with id 'header' in CSS?",
    type: "single",
    options: [
      ".header",
      "#header",
      "*header",
      "header"
    ],
    correct_options: ["#header"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which CSS property is used to change the text color of an element?",
    type: "single",
    options: [
      "fgcolor",
      "color",
      "text-color",
      "font-color"
    ],
    correct_options: ["color"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which of the following CSS properties is used to control the element's font?",
    type: "single",
    options: [
      "font-family",
      "text-family",
      "font-style",
      "font-weight"
    ],
    correct_options: ["font-family"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "True or False: CSS can be added to HTML documents in three ways: inline, internal, and external.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["True"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which property is used to change the font of an element?",
    type: "single",
    options: [
      "font-style",
      "font-weight",
      "font-family",
      "text-style"
    ],
    correct_options: ["font-family"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },

  // Medium Level Questions
  {
    question_description: "Which CSS property controls the space between the content and the border of an element?",
    type: "single",
    options: [
      "margin",
      "padding",
      "spacing",
      "border-spacing"
    ],
    correct_options: ["padding"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "How do you make each word in a text start with a capital letter in CSS?",
    type: "single",
    options: [
      "text-transform: capitalize",
      "transform: capitalize",
      "You can't do that with CSS",
      "text-style: capitalize"
    ],
    correct_options: ["text-transform: capitalize"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which property is used to change the font size of an element?",
    type: "single",
    options: [
      "font-size",
      "text-size",
      "font-style",
      "text-style"
    ],
    correct_options: ["font-size"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which CSS property is used to specify the transparency of an element?",
    type: "single",
    options: [
      "opacity",
      "transparency",
      "visible",
      "alpha"
    ],
    correct_options: ["opacity"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which of the following is NOT a valid CSS display property value?",
    type: "single",
    options: [
      "block",
      "inline",
      "none",
      "hidden"
    ],
    correct_options: ["hidden"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
        question_description: "Which CSS property is used to control the layout of flex items?",
        type: "multiple",
        options: [
          "flex-direction",
          "flex-wrap",
          "justify-content",
          "align-items"
        ],
        correct_options: ["flex-direction", "flex-wrap", "justify-content", "align-items"],
        difficulty: "medium",
        quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "True or False: The 'margin' property in CSS can be used to create space inside the border of an element.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["False"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "How do you select all <p> elements inside a <div> in CSS?",
    type: "single",
    options: [
      "div p",
      "div + p",
      "div > p",
      "div.p"
    ],
    correct_options: ["div p"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which CSS property is used to change the text decoration of an element?",
    type: "single",
    options: [
      "text-decoration",
      "text-style",
      "text-transform",
      "text-decoration-line"
    ],
    correct_options: ["text-decoration"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which of the following CSS selectors selects elements with a specific class?",
    type: "single",
    options: [
      ".classname",
      "#classname",
      "*classname",
      "classname"
    ],
    correct_options: [".classname"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },

  // Hard Level Questions
  {
    question_description: "What is the default value of the 'position' property in CSS?",
    type: "single",
    options: [
      "static",
      "relative",
      "absolute",
      "fixed"
    ],
    correct_options: ["static"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which CSS property is used to create a grid layout?",
    type: "single",
    options: [
      "display: grid",
      "display: flex",
      "layout: grid",
      "grid-layout: yes"
    ],
    correct_options: ["display: grid"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "How can you apply multiple classes to a single HTML element in CSS?",
    type: "single",
    options: [
      "Separate the class names with a comma",
      "Separate the class names with a space",
      "Use a plus sign between class names",
      "It's not possible to apply multiple classes to a single element"
    ],
    correct_options: ["Separate the class names with a space"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which pseudo-class is used to select an element when it is being hovered over by the mouse?",
    type: "single",
    options: [
      ":hover",
      ":active",
      ":focus",
      ":visited"
    ],
    correct_options: [":hover"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which CSS property is used to control the stacking order of positioned elements?",
    type: "single",
    options: [
      "z-index",
      "stack-order",
      "position",
      "layer"
    ],
    correct_options: ["z-index"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which CSS function allows you to embed a URL within a stylesheet?",
    type: "single",
    options: [
      "link()",
      "url()",
      "embed()",
      "import()"
    ],
    correct_options: ["url()"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "True or False: CSS variables can be defined within any selector, not just the :root selector.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["True"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which of the following CSS properties can be animated using CSS transitions?",
    type: "multiple",
    options: [
      "color",
      "width",
      "height",
      "all of the above"
    ],
    correct_options: ["color", "width", "height", "all of the above"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "How do you create a CSS rule that targets only the first child of a parent element?",
    type: "single",
    options: [
      ":first-child",
      ":first-of-type",
      ":nth-child(1)",
      "All of the above"
    ],
    correct_options: ["All of the above"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
  },
  {
    question_description: "Which CSS property is used to specify the number of columns an element should span across in a multi-column layout?",
    type: "single",
    options: [
      "column-span",
      "column-count",
      "span-columns",
      "columns-spanned"
    ],
    correct_options: ["column-span"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a5ff4aec1b96024540d')
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
