 // HTML BASICS

 const mongoose = require('mongoose');
 const Question = require('../models/Question'); // Ensure the correct path to your Question model
 
 mongoose.connect('mongodb+srv://chitluridevicharan:charan@cluster0.qgrpql7.mongodb.net/QUIZ-APPLICATION?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connected to MongoDB'))
   .catch((error) => console.log('Error connecting to MongoDB:', error));
 
 const questions = [
   // Easy Level Questions
   {
     question_description: "What does HTML stand for?",
     type: "single",
     options: [
       "HyperText Markup Language",
       "Home Tool Markup Language",
       "Hyperlinks and Text Markup Language",
       "Hyper Tool Markup Language"
     ],
     correct_options: ["HyperText Markup Language"],
     difficulty: "easy",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Who is making the Web standards?",
     type: "single",
     options: [
       "Google",
       "Microsoft",
       "Mozilla",
       "The World Wide Web Consortium"
     ],
     correct_options: ["The World Wide Web Consortium"],
     difficulty: "easy",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Choose the correct HTML element for the largest heading:",
     type: "single",
     options: [
       "<heading>",
       "<h1>",
       "<h6>",
       "<head>"
     ],
     correct_options: ["<h1>"],
     difficulty: "easy",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "What is the correct HTML element for inserting a line break?",
     type: "single",
     options: [
       "<break>",
       "<lb>",
       "<br>",
       "<line>"
     ],
     correct_options: ["<br>"],
     difficulty: "easy",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which HTML element defines the title of a document?",
     type: "single",
     options: [
       "<meta>",
       "<title>",
       "<head>",
       "<body>"
     ],
     correct_options: ["<title>"],
     difficulty: "easy",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
     type: "single",
     options: [
       "alt",
       "title",
       "src",
       "longdesc"
     ],
     correct_options: ["alt"],
     difficulty: "easy",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which of the following HTML elements is used to create a hyperlink?",
     type: "single",
     options: [
       "<link>",
       "<a>",
       "<href>",
       "<nav>"
     ],
     correct_options: ["<a>"],
     difficulty: "easy",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "True or False: HTML comments are visible in the browser.",
     type: "true_false",
     options: [
       "True",
       "False"
     ],
     correct_options: ["False"],
     difficulty: "easy",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which of the following is correct for creating a list with bullets?",
     type: "single",
     options: [
       "<ol>",
       "<ul>",
       "<list>",
       "<dl>"
     ],
     correct_options: ["<ul>"],
     difficulty: "easy",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "True or False: The <img> tag is used to display images in HTML.",
     type: "true_false",
     options: [
       "True",
       "False"
     ],
     correct_options: ["True"],
     difficulty: "easy",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
 
   // Medium Level Questions
   {
     question_description: "Which HTML element is used to specify a footer for a document or section?",
     type: "single",
     options: [
       "<footer>",
       "<bottom>",
       "<foot>",
       "<section-footer>"
     ],
     correct_options: ["<footer>"],
     difficulty: "medium",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "How can you make a numbered list?",
     type: "single",
     options: [
       "<dl>",
       "<ol>",
       "<ul>",
       "<list>"
     ],
     correct_options: ["<ol>"],
     difficulty: "medium",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
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
     difficulty: "medium",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which of the following is correct for adding multiple lines of text in HTML?",
     type: "single",
     options: [
       "<p>",
       "<pre>",
       "<span>",
       "<multiline>"
     ],
     correct_options: ["<pre>"],
     difficulty: "medium",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which HTML element is used to define important text?",
     type: "multiple",
     options: [
       "<strong>",
       "<important>",
       "<b>",
       "<em>"
     ],
     correct_options: ["<strong>", "<b>"],
     difficulty: "medium",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which HTML element is used to define emphasized text?",
     type: "multiple",
     options: [
       "<em>",
       "<i>",
       "<italic>",
       "<strong>"
     ],
     correct_options: ["<em>", "<i>"],
     difficulty: "medium",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which HTML element is used to define a block of navigation links?",
     type: "single",
     options: [
       "<nav>",
       "<navigation>",
       "<links>",
       "<menu>"
     ],
     correct_options: ["<nav>"],
     difficulty: "medium",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "True or False: The <div> tag is used to define a division or section in an HTML document.",
     type: "true_false",
     options: [
       "True",
       "False"
     ],
     correct_options: ["True"],
     difficulty: "medium",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which attribute is used to provide a unique identifier for an HTML element?",
     type: "single",
     options: [
       "id",
       "name",
       "class",
       "type"
     ],
     correct_options: ["id"],
     difficulty: "medium",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "True or False: <span> is an inline element.",
     type: "true_false",
     options: [
       "True",
       "False"
     ],
     correct_options: ["True"],
     difficulty: "medium",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
 
   // Hard Level Questions
   {
     question_description: "Which element is used for representing the result of a calculation in an HTML document?",
     type: "single",
     options: [
       "<output>",
       "<result>",
       "<calc>",
       "<compute>"
     ],
     correct_options: ["<output>"],
     difficulty: "hard",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which HTML element is used to embed an external resource, such as a web page or video?",
     type: "single",
     options: [
       "<embed>",
       "<iframe>",
       "<object>",
       "<link>"
     ],
     correct_options: ["<iframe>"],
     difficulty: "hard",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which HTML attribute is used to specify that an input field must be filled out before submitting the form?",
     type: "single",
     options: [
       "required",
       "validate",
       "formvalidate",
       "mandatory"
     ],
     correct_options: ["required"],
     difficulty: "hard",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "How can you make a list that lists its items with squares?",
     type: "single",
     options: [
       "list-style-type: square;",
       "list-type: square;",
       "list-square: true;",
       "list-style: box;"
     ],
     correct_options: ["list-style-type: square;"],
     difficulty: "hard",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which of the following is used to specify a media type in an HTML link element?",
     type: "multiple",
     options: [
       "media",
       "type",
       "rel",
       "href"
     ],
     correct_options: ["media", "type"],
     difficulty: "hard",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which attribute specifies that an input field is read-only?",
     type: "single",
     options: [
       "readonly",
       "disabled",
       "novalidate",
       "fixed"
     ],
     correct_options: ["readonly"],
     difficulty: "hard",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "True or False: The <section> element represents a standalone section of content in a document.",
     type: "true_false",
     options: [
       "True",
       "False"
     ],
     correct_options: ["True"],
     difficulty: "hard",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "What is the correct HTML element for playing audio files?",
     type: "single",
     options: [
       "<sound>",
       "<audio>",
       "<mp3>",
       "<music>"
     ],
     correct_options: ["<audio>"],
     difficulty: "hard",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which HTML element is used to define a client-side image map?",
     type: "single",
     options: [
       "<map>",
       "<imgmap>",
       "<imagemap>",
       "<mapclient>"
     ],
     correct_options: ["<map>"],
     difficulty: "hard",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
   },
   {
     question_description: "Which attribute is used to specify a placeholder text in an input field?",
     type: "single",
     options: [
       "placeholder",
       "text",
       "label",
       "value"
     ],
     correct_options: ["placeholder"],
     difficulty: "hard",
     quiz_id: new mongoose.Types.ObjectId('66c94a55f4aec1b960245407')
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
 