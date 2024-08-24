const mongoose = require('mongoose');
const Question = require('./models/Question'); // Ensure the correct path to your Question model

mongoose.connect('mongodb+srv://chitluridevicharan:charan@cluster0.qgrpql7.mongodb.net/QUIZ-APPLICATION?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

const questions = [
  {
    question_description: "What is the correct syntax for referring to an external script called 'app.js'?",
    type: "single",
    options: [
      "<script src='app.js'>",
      "<script href='app.js'>",
      "<script ref='app.js'>",
      "<script name='app.js'>"
    ],
    correct_options: ["<script src='app.js'>"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "Which company developed JavaScript?",
    type: "single",
    options: [
      "Netscape",
      "Bell Labs",
      "Sun Microsystems",
      "IBM"
    ],
    correct_options: ["Netscape"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "How do you create a function in JavaScript?",
    type: "single",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "createFunction myFunction()",
      "def myFunction()"
    ],
    correct_options: ["function myFunction()"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "How do you call a function named 'myFunction'?",
    type: "single",
    options: [
      "call myFunction()",
      "call function myFunction()",
      "myFunction()",
      "Call.myFunction()"
    ],
    correct_options: ["myFunction()"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "Which of the following is the correct way to write a JavaScript array?",
    type: "single",
    options: [
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      "var colors = ['red', 'green', 'blue']",
      "var colors = 'red', 'green', 'blue'"
    ],
    correct_options: ["var colors = ['red', 'green', 'blue']"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "How do you round the number 7.25 to the nearest integer?",
    type: "single",
    options: [
      "Math.round(7.25)",
      "round(7.25)",
      "Math.rnd(7.25)",
      "rnd(7.25)"
    ],
    correct_options: ["Math.round(7.25)"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "How do you find the largest number of 2 and 4?",
    type: "single",
    options: [
      "Math.ceil(2, 4)",
      "ceil(2, 4)",
      "Math.max(2, 4)",
      "Math.min(2, 4)"
    ],
    correct_options: ["Math.max(2, 4)"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "What will the following code return: Boolean(10 > 9)?",
    type: "single",
    options: [
      "NaN",
      "true",
      "false",
      "null"
    ],
    correct_options: ["true"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "Which event occurs when the user clicks on an HTML element?",
    type: "single",
    options: [
      "onchange",
      "onmouseclick",
      "onmouseover",
      "onclick"
    ],
    correct_options: ["onclick"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "Which operator is used to assign a value to a variable?",
    type: "single",
    options: [
      "*",
      "-",
      "=",
      "x"
    ],
    correct_options: ["="],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "What will the code return? Boolean(3 < 7)",
    type: "single",
    options: [
      "true",
      "false",
      "NaN",
      "undefined"
    ],
    correct_options: ["true"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "Which JavaScript method is used to write into an alert box?",
    type: "single",
    options: [
      "alert()",
      "msg()",
      "msgbox()",
      "alertBox()"
    ],
    correct_options: ["alert()"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "How can you detect the client's browser name?",
    type: "single",
    options: [
      "browser.name",
      "navigator.appName",
      "client.navName",
      "useragent.browser"
    ],
    correct_options: ["navigator.appName"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "How do you declare a JavaScript variable?",
    type: "single",
    options: [
      "variable carName;",
      "var carName;",
      "v carName;",
      "declare carName;"
    ],
    correct_options: ["var carName;"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
  },
  {
    question_description: "Which of the following is a server-side JavaScript object?",
    type: "single",
    options: [
      "File",
      "Function",
      "FileUpload",
      "Date"
    ],
    correct_options: ["File"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c98a65467dbc0165722797')
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
