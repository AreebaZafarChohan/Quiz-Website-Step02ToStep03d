// Step 1: Questions
export const questions = [
    {
        question: "Which keyword was introduced in ECMAScript 2015 (ES6)?",
        options: [
            "var",
            "let",
            "const",
            "Both b and c"
        ],
        correctAnswer: 3
    },
    {
        question: `What will be the output of the following code?
        code: let x = 1;\nif (true) {\n    let x = 2;\n    console.log(x);\n}\nconsole.log(x);`,
        options: [
            "1 1",
            "2 1",
            "1 2",
            "2 2"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the scope of a variable declared with var?",
        options: [
            "Block scope",
            "Function scope",
            "Module scope",
            "Global scope"
        ],
        correctAnswer: 1
    },
    {
        question: "Which keyword should be used to declare a variable that cannot be reassigned?",
        options: [
            "var",
            "let",
            "const",
            "None of the above"
        ],
        correctAnswer: 2
    },
    {
        question: `What will be the output of the following code?
        code: var y = 10;\n{\n    var y = 20;\n    console.log(y);\n}\nconsole.log(y);`,
        options: [
            "10 10",
            "20 10",
            "20 20",
            "10 20"
        ],
        correctAnswer: 2
    },
    {
        question: "What happens if you try to reassign a value to a const variable?",
        options: [
            "The variable gets reassigned",
            "Throws a syntax error",
            "Throws a runtime error",
            "Nothing happens"
        ],
        correctAnswer: 2
    },
    {
        question: `Which of the following will cause a ReferenceError?
        code: {\n    let z = 5;\n}\nconsole.log(z);`,
        options: [
            "console.log(z); inside the block",
            "console.log(z); outside the block",
            "Both a and b",
            "None of the above"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following is true about let and const?",
        options: [
            "Both are block-scoped",
            "Both are function-scoped",
            "let is block-scoped and const is function-scoped",
            "let is function-scoped and const is block-scoped"
        ],
        correctAnswer: 0
    },
    {
        question: `What will be the output of the following code?
        code: const a = 1;\ntry {\n    a = 2;\n} catch (e) {\n    console.log(e);\n}\nconsole.log(a);`,
        options: [
            "2 1",
            "1 1",
            "Error message 1",
            "Error message 2"
        ],
        correctAnswer: 3
    },
    {
        question: "Which keyword is function-scoped and allows variable hoisting?",
        options: [
            "var",
            "let",
            "const",
            "Both b and c"
        ],
        correctAnswer: 0
    },
    {
        question: "Which statement correctly describes ECMAScript modules?",
        options: [
            "They are primarily used for server-side scripting.",
            "They support both synchronous and asynchronous loading of modules.",
            "They are not supported by modern browsers.",
            "They can only export functions, not variables."
        ],
        correctAnswer: 1
    },
    {
        question: "Which keyword is used to export a module function or variable as the default export?",
        options: [
            "export",
            "export default",
            "default",
            "export as"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a benefit of using ECMAScript modules over traditional script tags?",
        options: [
            "They automatically load dependencies asynchronously.",
            "They support dynamic module loading at runtime.",
            "They are compatible with all older browsers.",
            "They do not support tree-shaking for optimized builds."
        ],
        correctAnswer: 0
    },
    {
        question: "Which function is used to asynchronously load a module in ECMAScript?",
        options: [
            "require()",
            "import()",
            "loadModule()",
            "asyncModule()"
        ],
        correctAnswer: 1
    },
    {
        question: "Which type of export is used to export multiple functions or variables from a module?",
        options: [
            "Named export",
            "Default export",
            "Nested export",
            "Aggregate export"
        ],
        correctAnswer: 0
    },
    {
        question: "Which statement correctly defines a named export from an ECMAScript module?",
        options: [
            "export { function1, function2 };",
            "export default { function1, function2 };",
            "export { function1 as default, function2 };",
            "export default { function1 as default, function2 };"
        ],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used in JavaScript to declare variables with block scope?",
        options: [
            "var",
            "let",
            "const",
            "block"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'type' attribute in the script tag when using ECMAScript modules?",
        options: [
            "To specify the module's MIME type",
            "To declare the script as an ECMAScript module",
            "To enable async loading of the module",
            "To indicate the script should be executed in strict mode"
        ],
        correctAnswer: 1
    },
    {
        question: "How can you conditionally import a module in ECMAScript modules?",
        options: [
            "Using the require function",
            "Using the import function inside an if statement",
            "Using the import() function",
            "Using the import.meta function"
        ],
        correctAnswer: 2
    },
    {
        question: "What does tree-shaking refer to in the context of ECMAScript modules?",
        options: [
            "It refers to optimizing the size of the module by removing unused exports.",
            "It refers to nesting modules inside one another for better organization.",
            "It refers to loading modules in parallel for faster performance.",
            "It refers to exporting and importing modules as a tree structure."
        ],
        correctAnswer: 0
    },
    {
        question: "What is the correct syntax to import a named export from an ECMAScript module?",
        options: [
            "import namedExport from './module';",
            "import { namedExport } from './module';",
            "import * as namedExport from './module';",
            "import { named as namedExport } from './module';"
        ],
        correctAnswer: 1
    },
    {
        question: "How can you export a function from an ECMAScript module as a default export?",
        options: [
            "export default function myFunction() {}",
            "export function myFunction() {}",
            "module.exports = myFunction;",
            "exports.myFunction = myFunction;"
        ],
        correctAnswer: 0
    },    
    {
        question: "Which file extension is commonly used for ECMAScript modules in Node.js?",
        options: [
            ".js",
            ".mjs",
            ".es",
            ".ts"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you enable ECMAScript modules in Node.js when using TypeScript?",
        options: [
            'Set "module": "commonjs" in tsconfig.json.',
            'Set "module": "esnext" in tsconfig.json.',
            'Add "type": "module" to package.json.',
            'Use .esm file extensions for module files.'
        ],
        correctAnswer: 2
    },
    {
        question: "What is required to import an ECMAScript module in Node.js without specifying the file extension?",
        options: [
            "The module must have a .mjs extension.",
            "The module must be explicitly named in the import statement.",
            "Node.js automatically recognizes and imports ECMAScript modules.",
            "ECMAScript modules cannot be imported in Node.js."
        ],
        correctAnswer: 2
    },
    {
        question: "What is a key difference between ECMAScript modules (import/export) and CommonJS (require/module.exports) in Node.js?",
        options: [
            "ECMAScript modules support dynamic imports.",
            "CommonJS modules are more efficient for large applications.",
            "ECMAScript modules cannot use third-party libraries.",
            "CommonJS modules are required for TypeScript compatibility."
        ],
        correctAnswer: 0
    },
    {
        question: "Which TypeScript compiler option should be used to target the latest version of JavaScript (ESNext)?",
        options: [
            '"target": "es5"',
            '"target": "es6"',
            '"target": "esnext"',
            '"target": "latest"'
        ],
        correctAnswer: 2
    },
    {
        question: "What is the default value of the 'module' option in tsconfig.json for targeting ES6 or later versions?",
        options: [
            '"module": "commonjs"',
            '"module": "esnext"',
            '"module": "umd"',
            '"module": "system"'
        ],
        correctAnswer: 1
    },
    {
        question: "Which TypeScript compiler option allows specifying the ECMAScript version for output files?",
        options: [
            '"ecmaVersion"',
            '"esVersion"',
            '"target"',
            '"lib"'
        ],
        correctAnswer: 2
    },
    {
        question: "What does the 'esModuleInterop' option in tsconfig.json enable?",
        options: [
            "It allows using 'export =' syntax for modules.",
            "It enables compatibility with modules that use 'export * as ns' syntax.",
            "It enables default import syntax ('import x from module;') for CommonJS modules.",
            "It sets the ECMAScript version for the output files."
        ],
        correctAnswer: 2
    },
    {
        question: "Which TypeScript compiler option should be set to true to allow using 'import()' for dynamic imports?",
        options: [
            '"esModuleInterop"',
            '"moduleResolution"',
            '"strict"',
            '"esModuleInterop"'
        ],
        correctAnswer: 0
    },
    {
        question: "Which command is used to install the inquirer library in a TypeScript project?",
        options: [
            "npm install inquirer",
            "npm install @types/inquirer",
            "npm install inquirer --save-dev",
            "npm install inquirer --global"
        ],
        correctAnswer: 0
    },
    {
        question: "Which additional package is required for TypeScript to recognize types from the inquirer library?",
        options: [
            "@types/inquirer",
            "@types/node",
            "inquirer-types",
            "inquirer-ts"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you install the chalk library in a TypeScript project using npm?",
        options: [
            "npm install chalk",
            "npm install @types/chalk",
            "npm install chalk --save-dev",
            "npm install chalk --global"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the inquirer library in TypeScript?",
        options: [
            "To format and style console output",
            "To handle file system operations",
            "To create interactive command-line prompts",
            "To manage HTTP requests"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you import the inquirer library in a TypeScript file?",
        code: "import ____ from 'inquirer';",
        options: [
            "inquire",
            "inquiry",
            "inquirer",
            "prompt"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the primary use of the chalk library in TypeScript?",
        options: [
            "Creating interactive prompts",
            "Handling network requests",
            "Styling terminal string output",
            "Parsing command-line arguments"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you use the chalk library to style text in green in a TypeScript file?",
        code: "import chalk from 'chalk'; console.log(chalk.('Hello, world!'));",
        options: [
            "green",
            "style.green",
            "color.green",
            "textGreen"
        ],
        correctAnswer: 0
    },
    {
        question: "Which method from the inquirer library is commonly used to prompt the user with questions?",
        code: "inquirer.(questions).then(answers => { console.log(answers); });",
        options: [
            "ask",
            "prompt",
            "inquire",
            "question"
        ],
        correctAnswer: 1
    },
    {
        question: "Which import statement correctly imports both inquirer and chalk in a TypeScript file?",
        code: "import ____ from 'inquirer'; import ____ from 'chalk';",
        options: [
            "prompt, style",
            "inquire, chalk",
            "inquirer, color",
            "inquirer, chalk"
        ],
        correctAnswer: 3
    },
];

// Step 2: JavaScript Initialization
const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = 
document.querySelectorAll("#question, option_1, option_2, option_3, option_4 ");

const submitBtn = document.querySelector("#submit");
const viewAnswersBtn = document.querySelector("#view-answers");

let currentQuiz = 0;
let score = 0;
let userAnswers = [];

// Step 3: Load Quiz function
const loadQuiz = () => {
    const {question, options} = questions[currentQuiz];

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption));
};

loadQuiz();

// Step 4: Get selected answer function on button click
const getSelectedOption = () => {
    let answerElement = Array.from(answerElm)
    return answerElement.findIndex((curElement) => curElement.checked );
};

const deselectedAnswer = () => {
    answerElm.forEach((curElm) => (curElm.checked = false));
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    userAnswers.push(selectedOptionIndex);

    if (selectedOptionIndex === questions[currentQuiz].correctAnswer) {
        score++;
    }
    currentQuiz++; 
    deselectedAnswer();
    if (currentQuiz < questions.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<div class="result">
        <h2>🏆🥇 Your Score: ${score}/${questions.length} Correct Answers</h2>
        <P>🎊✨ Congratulations on completing the quiz!</p>
        <p>Don't lose hope and never give up! You can do it 💪🏻</p>
        <button class = "reload-button" onclick = "window.location.reload()">Restart</button>
        <button id="view-answers-btn">View Answers</button>
        </div>`;
        document.querySelector("#view-answers-btn").addEventListener("click", () => {
            displayAnswers();
        });
    }
});

const displayAnswers = () => {
    let answerHTML = `<div class="result view-answers"><h2>Correct Answers</h2>`;
    questions.forEach((question, index) => {
        answerHTML += `<p>Q${index + 1}: ${question.question}</p>`;
        answerHTML += `<p>Your answer: ${question.options[userAnswers[index]]}</p>`;
        answerHTML += `<p>Correct answer: ${question.options[question.correctAnswer]}</p><hr>`;
    });
    answerHTML += `<button class="reload-button" onclick="window.location.reload()">Restart</button></div>`;
    quiz.innerHTML = answerHTML;
};