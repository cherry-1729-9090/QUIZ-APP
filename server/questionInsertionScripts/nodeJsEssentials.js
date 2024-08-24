//NODE JS ESSENTIALS
const mongoose = require('mongoose');
const Question = require('../models/Question'); // Ensure the correct path to your Question model

mongoose.connect('mongodb+srv://chitluridevicharan:charan@cluster0.qgrpql7.mongodb.net/QUIZ-APPLICATION?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

const questions = [
  // Easy Level Questions
  {
    question_description: "What is Node.js?",
    type: "single",
    options: [
      "A JavaScript runtime built on Chrome's V8 JavaScript engine",
      "A frontend framework",
      "A CSS framework",
      "A database"
    ],
    correct_options: ["A JavaScript runtime built on Chrome's V8 JavaScript engine"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which of the following modules is built-in to Node.js?",
    type: "single",
    options: [
      "express",
      "http",
      "react",
      "mongodb"
    ],
    correct_options: ["http"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which command is used to initialize a new Node.js project?",
    type: "single",
    options: [
      "npm install",
      "npm start",
      "npm init",
      "npm new"
    ],
    correct_options: ["npm init"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "True or False: Node.js is single-threaded.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["True"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which method is used to read files in Node.js?",
    type: "single",
    options: [
      "fs.readFile()",
      "fs.read()",
      "fs.readFiles()",
      "fs.getFile()"
    ],
    correct_options: ["fs.readFile()"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which of the following is a correct way to import a module in Node.js?",
    type: "single",
    options: [
      "import 'module_name';",
      "require('module_name');",
      "include 'module_name';",
      "use('module_name');"
    ],
    correct_options: ["require('module_name');"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which of the following is NOT a Node.js global object?",
    type: "single",
    options: [
      "console",
      "process",
      "window",
      "Buffer"
    ],
    correct_options: ["window"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "How do you start a Node.js application?",
    type: "single",
    options: [
      "node app.js",
      "npm app.js",
      "start app.js",
      "run app.js"
    ],
    correct_options: ["node app.js"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "True or False: Node.js is platform-independent.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["True"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which of the following is used to create a server in Node.js?",
    type: "single",
    options: [
      "http.createServer()",
      "express()",
      "server.create()",
      "http.create()"
    ],
    correct_options: ["http.createServer()"],
    difficulty: "easy",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },

  // Medium Level Questions
  {
    question_description: "Which of the following are core modules in Node.js?",
    type: "multiple",
    options: [
      "fs",
      "http",
      "os",
      "express"
    ],
    correct_options: ["fs", "http", "os"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which method is used to write data to a file in Node.js?",
    type: "single",
    options: [
      "fs.write()",
      "fs.writeFile()",
      "fs.writeData()",
      "fs.writeToFile()"
    ],
    correct_options: ["fs.writeFile()"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "What is the purpose of the 'process' object in Node.js?",
    type: "single",
    options: [
      "To interact with the current Node.js process",
      "To manage user sessions",
      "To handle file system operations",
      "To control the flow of asynchronous operations"
    ],
    correct_options: ["To interact with the current Node.js process"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "True or False: Node.js uses an event-driven, non-blocking I/O model.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["True"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which of the following is a built-in module in Node.js for handling paths?",
    type: "single",
    options: [
      "url",
      "querystring",
      "path",
      "dns"
    ],
    correct_options: ["path"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which of the following is the correct way to make a GET request using the 'http' module in Node.js?",
    type: "single",
    options: [
      "http.get('http://example.com', callback)",
      "http.request('http://example.com', callback)",
      "http.createGet('http://example.com', callback)",
      "http.createRequest('http://example.com', callback)"
    ],
    correct_options: ["http.get('http://example.com', callback)"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which of the following is NOT a valid event emitter method in Node.js?",
    type: "single",
    options: [
      "emit",
      "on",
      "once",
      "subscribe"
    ],
    correct_options: ["subscribe"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "What does the 'npm install' command do?",
    type: "single",
    options: [
      "It installs the packages listed in 'package.json'",
      "It updates all installed packages",
      "It starts the Node.js application",
      "It creates a new Node.js project"
    ],
    correct_options: ["It installs the packages listed in 'package.json'"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "True or False: The 'buffer' module in Node.js is used to handle binary data.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["True"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which of the following commands is used to remove a package in Node.js?",
    type: "single",
    options: [
      "npm remove <package_name>",
      "npm uninstall <package_name>",
      "npm delete <package_name>",
      "npm un <package_name>"
    ],
    correct_options: ["npm uninstall <package_name>"],
    difficulty: "medium",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },

  // Hard Level Questions
  {
    question_description: "Which of the following is true about streams in Node.js?",
    type: "multiple",
    options: [
      "Streams are instances of EventEmitter",
      "There are four types of streams: Readable, Writable, Duplex, and Transform",
      "Streams can be used to read data from and write data to files",
      "Streams are used for HTTP requests only"
    ],
    correct_options: ["Streams are instances of EventEmitter", "There are four types of streams: Readable, Writable, Duplex, and Transform", "Streams can be used to read data from and write data to files"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which method is used to handle exceptions in Node.js?",
    type: "single",
    options: [
      "process.on('uncaughtException')",
      "throw new Error()",
      "try/catch block",
      "All of the above"
    ],
    correct_options: ["All of the above"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "What does the 'cluster' module in Node.js do?",
    type: "single",
    options: [
      "It creates child processes to handle multiple connections simultaneously",
      "It manages dependencies in a Node.js project",
      "It is used to cluster databases",
      "It provides an interface to work with binary data"
    ],
    correct_options: ["It creates child processes to handle multiple connections simultaneously"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "True or False: Node.js can be used to create both frontend and backend applications.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["False"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which of the following statements is true about the 'os' module in Node.js?",
    type: "multiple",
    options: [
      "It provides information about the operating system",
      "It can be used to interact with the file system",
      "It provides methods to fetch user information",
      "It can be used to create network servers"
    ],
    correct_options: ["It provides information about the operating system", "It provides methods to fetch user information"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which of the following is NOT a correct way to create a buffer in Node.js?",
    type: "single",
    options: [
      "Buffer.alloc(size)",
      "Buffer.from(data)",
      "new Buffer(size)",
      "Buffer.allocUnsafe(size)"
    ],
    correct_options: ["new Buffer(size)"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "True or False: The 'dns' module in Node.js provides a way to perform DNS lookups and resolve hostnames.",
    type: "true_false",
    options: [
      "True",
      "False"
    ],
    correct_options: ["True"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "What is the purpose of the 'child_process' module in Node.js?",
    type: "single",
    options: [
      "To spawn new processes",
      "To create and manage child processes",
      "To handle child components in React",
      "To manage threads"
    ],
    correct_options: ["To create and manage child processes"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which of the following methods is used to send HTTP requests in Node.js?",
    type: "multiple",
    options: [
      "http.request()",
      "https.get()",
      "http.get()",
      "https.post()"
    ],
    correct_options: ["http.request()", "https.get()", "http.get()"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
  },
  {
    question_description: "Which of the following is true about the 'process.nextTick()' method in Node.js?",
    type: "single",
    options: [
      "It is used to schedule a callback to be invoked in the next iteration of the event loop",
      "It is used to block the event loop",
      "It is used to stop the current process",
      "It is used to start a new process"
    ],
    correct_options: ["It is used to schedule a callback to be invoked in the next iteration of the event loop"],
    difficulty: "hard",
    quiz_id: new mongoose.Types.ObjectId('66c94a6ff4aec1b960245419')
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
