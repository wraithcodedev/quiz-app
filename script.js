// Quiz Data
const quizData = {
 sql: [
    { question: "Which SQL command removes a table?", options: ["DELETE", "DROP", "REMOVE", "CLEAR"], answer: "DROP" },
    { question: "Which SQL keyword is used to sort results?", options: ["SORT", "ORDER BY", "GROUP BY", "RANK"], answer: "ORDER BY" },
    { question: "Which SQL clause filters rows?", options: ["WHERE", "HAVING", "FILTER", "GROUP"], answer: "WHERE"},
    { question: "Which is an aggregate function?", options: ["SELECT", "SUM", "UPDATE", "INSERT"], answer: "SUM" },
    { question: "Primary key ensures:", options: ["Uniqueness & Not Null", "Only uniqueness", "Only not null", "None"], answer: "Uniqueness & Not Null" },
    { question: "Which keyword is used to remove duplicates?", options: ["UNIQUE", "DISTINCT", "REMOVE", "ONLY"], answer: "DISTINCT" },
    { question: "Default sort order of ORDER BY?", options: ["Random", "Descending", "Ascending", "None"], answer: "Ascending" },
    { question: "Which SQL keyword is used to join tables?", options: ["MERGE", "JOIN", "COMBINE", "UNION"], answer: "JOIN" },
    { question: "Which statement changes data?", options: ["CREATE", "SELECT", "DROP", "UPDATE"], answer: "UPDATE" },
    { question: "Which constraint enforces foreign key relationship?", options: ["REFERENCES", "LINK", "RELATE", "CONNECT"], answer: "REFERENCES"},
    { question: "Which command adds new rows?", options: ["ADD", "APPEND", "UPDATE", "INSERT"], answer: "INSERT" },
    { question: "Which clause is used with GROUP BY?", options: ["LIMIT", "ORDER", "WHERE", "HAVING"], answer: "HAVING"},
    { question: "Which operator is used for pattern matching?", options: ["COMPARE", "MATCHES", "REGRET", "LIKE"], answer: "LIKE" },
    { question: "Which is a DDL command?", options: ["INSERT", "SELECT", "CREATE", "DELETE"], answer: "CREATE"},
    { question: "Which keyword removes duplicates?", options: ["DISTINCT", "UNIQUE", "DELETE", "FILTER"], answer: "DISTINCT"}
  ],
 os: [
    { question: "Which scheduling algorithm is non-preemptive?", options: ["Round Robin", "FCFS", "Priority", "SJF"], answer: "FCFS" },
    { question: "What is a critical section?", options: ["Shared code needing mutual exclusion", "Private memory", "Deadlock area", "Cache"], answer: "Shared code needing mutual exclusion" },
    { question: "Which is not a type of OS?", options: ["Batch", "Real-time", "Network", "Compiler"], answer: "Compiler" },
    { question: "Thrashing occurs when:", options: ["Too many processes", "Excessive paging", "CPU overload", "Disk crash"], answer: "Excessive paging" },
    { question: "What is a semaphore used for?", options: ["Process sync", "Memory allocation", "File mgmt", "Interrupts"], answer: "Process sync" },
    { question: "Which OS uses time-sharing?", options: ["DOS", "Windows 95", "Unix", "MS-DOS"], answer: "Unix" },
    { question: "Which is not a deadlock condition?", options: ["Mutual Exclusion", "Hold & Wait", "No Preemption", "Virtual Memory"], answer: "Virtual Memory" },
    { question: "What is context switching?", options: ["Switch between processes", "Switch between files", "Cache replacement", "None"], answer: "Switch between processes" },
    { question: "Which is fastest memory?", options: ["Cache", "RAM", "Hard Disk", "Register"], answer: "Register" },
    { question: "What does virtual memory provide?", options: ["More RAM", "Abstraction of memory", "Faster CPU", "More cache"], answer: "Abstraction of memory"},
    { question: "Page replacement algorithm example?", options: ["FIFO", "LIFO", "DFS", "BFS"], answer: "FIFO"},
    { question: "Which is an I/O scheduling algorithm?", options: ["SCAN", "Round Robin", "LRU", "FCFS"], answer: "SCAN" },
    { question: "Which is a preemptive scheduling algorithm?", options: ["FCFS", "SJF (non-preemptive)", "Round Robin", "Priority (non-preemptive)"], answer: "Round Robin" },
    { question: "Which OS is open-source?", options: ["Windows", "Linux", "MacOS", "DOS"], answer: "Linux" },
    { question: "Which OS concept allows multiple programs at once?", options: ["Multitasking", "Multiprogramming", "Multiuser", "All"], answer: "All"}
  ],
  c: [
    { question: "C language was developed by?", options: ["James Gosling", "Dennis Ritchie", "Guido Rossum", "Bjarne Stroustrup"], answer: "Dennis Ritchie" },
    { question: "Which header is needed for printf?", options: ["stdio.h", "conio.h", "stdlib.h", "string.h"], answer: "stdio.h" },
    { question: "Which is not a data type in C?", options: ["int", "float", "real", "char"], answer: "real" },
    { question: "Which symbol is used to start preprocessor?", options: ["#", "$", "%", "&"], answer: "#" },
    { question: "Size of int (typically)?", options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"], answer: "Depends on system" },
    { question: "Which loop executes at least once?", options: ["for", "while", "do-while", "if"], answer: "do-while" },
    { question: "Which function returns string length?", options: ["strlen", "strlength", "size", "len"], answer: "strlen"},
    { question: "Which keyword defines a constant?", options: ["fixed", "const", "define", "static"], answer: "const" },
    { question: "Which operator is used for address?", options: ["*", "&", "%", "@"], answer: "&" },
    { question: "Which is not a storage class?", options: ["auto", "static", "register", "volatile"], answer: "volatile"},
    { question: "Which loop is entry-controlled?", options: ["while", "do-while", "goto", "switch"], answer: "while" },
    { question: "Which is used for dynamic memory?", options: ["malloc", "printf", "scanf", "define"], answer: "malloc" },
    { question: "C programs are compiled by?", options: ["GCC", "Python", "JVM", "Assembler"], answer: "GCC" },
    { question: "Which keyword exits a loop?", options: ["stop", "exit", "break", "return"], answer: "break"},
    { question: "C supports?", options: ["OOP", "Procedural", "Functional", "AI"], answer: "Procedural"}
  ],
  networks: [
    { question: "IP stands for?", options: ["Internet Program", "Internet Protocol", "Internal Process", "Interlink Protocol"], answer: "Internet Protocol" },
    { question: "Default HTTP port?", options: ["20", "21", "80", "443"], answer: "80" },
    { question: "Which layer is TCP in OSI?", options: ["Transport", "Network", "Application", "Session"], answer: "Transport" },
    { question: "Ping uses which protocol?", options: ["ICMP", "TCP", "UDP", "HTTP"], answer: "ICMP" },
    { question: "Which is a private IP?", options: ["192.168.1.1", "8.8.8.8", "172.217.0.0", "1.1.1.1"], answer: "192.168.1.1"},
    { question: "Which is connectionless protocol?", options: ["TCP", "UDP", "FTP", "SMTP"], answer: "UDP" },
    { question: "Which device connects networks?", options: ["Router", "Switch", "Hub", "Repeater"], answer: "Router" },
    { question: "DNS translates?", options: ["IP to Domain", "Domain to IP", "MAC to IP", "IP to MAC"], answer: "Domain to IP"},
    { question: "Which layer ensures error detection?", options: ["Transport", "Data Link", "Physical", "Network"], answer: "Data Link" },
    { question: "SMTP is used for?", options: ["web-browsing", "Receiving emails", "File transfer", "Sending emails"], answer: "Sending emails" },
    { question: "ARP is used for?", options: ["Resolve IP to MAC", "Resolve MAC to IP", "Resolve DNS", "Routing"], answer: "Resolve IP to MAC" },
    { question: "Which topology has a central hub?", options: ["Ring", "Bus", "star", "Mesh"], answer: "star" },
    { question: "IPv6 address length?", options: ["32-bit", "64-bit", "128-bit", "256-bit"], answer: "128-bit" },
    { question: "Which is not an application layer protocol?", options: ["HTTP", "FTP", "SMTP", "IP"], answer: "IP"},
    { question: "Which is a reliable protocol?", options: ["TCP", "UDP", "ICMP", "ARP"], answer: "TCP" }
  ],
  python: [
    { question: "Who developed Python?", options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"], answer: "Guido van Rossum" },
    { question: "Which keyword defines a function?", options: ["func", "def", "function", "lambda"], answer: "def" },
    { question: "Which data type is immutable?", options: ["List", "Set", "Tuple", "Dictionary"], answer: "Tuple" },
    { question: "Which operator is used for exponentiation?", options: ["^", "**", "exp()", "pow"], answer: "**" },
    { question: "Which is not a Python framework?", options: ["Django", "Flask", "Spring", "FastAPI"], answer: "Spring" },
    { question: "Which method adds an item to a list?", options: ["add()", "append()", "insert()", "push()"], answer: "append()" },
    { question: "Which keyword is used for loop?", options: ["while", "loop", "iterate", "for"], answer: "for"},
    { question: "Which library is used for ML?", options: ["NumPy", "Pandas", "Scikit-learn", "Flask"], answer: "Pandas" },
    { question: "Which statement is used for exception handling?", options: ["try-except", "catch", "error", "rescue"], answer: "try-except" },
    { question: "Which keyword defines a class?", options: ["object", "struct", "class", "define"], answer: "class" },
    { question: "Which function shows length?", options: ["size()", "count()", "len()", "length()"], answer: "len()" },
    { question: "Which operator checks identity?", options: ["==", "is", "equals", "==="], answer: "is"},
    { question: "Which file extension for Python?", options: [".java", ".py", ".c", ".exe"], answer: ".py" },
    { question: "Which keyword is used to inherit a class?", options: ["extends", "inherits", "class", "super"], answer: "super"},
    { question: "Which is not a core datatype?", options: ["List", "Dictionary", "Set", "Array"], answer: "Array" }
  ],
   java: [
    { question: "Who developed Java?", options: ["James Gosling", "Dennis Ritchie", "Guido Rossum", "Linus Torvalds"], answer: "James Gosling" },
    { question: "Java runs on?", options: ["Compiler only", "Interpreter only", "Both Compiler & Interpreter", "None"], answer: "Both Compiler & Interpreter"},
    { question: "Which keyword is used to inherit a class?", options: ["extends", "implements", "super", "import"], answer: "extends" },
    { question: "Which is not an OOP concept?", options: ["Encapsulation", "Polymorphism", "Compilation", "Inheritance"], answer: "Compilation" },
    { question: "Which JVM memory stores objects?", options: ["Heap", "Stack", "Code", "Method"], answer: "Heap" },
    { question: "Which keyword prevents inheritance?", options: ["final", "static", "sealed", "constant"], answer: "final" },
    { question: "Which method is entry point?", options: ["start()", "main()", "init()", "run()"], answer: "main()"},
    { question: "Which operator compares references?", options: ["==", "equals()", "compare()", "is"], answer: "=="},
    { question: "Which package contains collection framework?", options: ["java.lang", "java.util", "java.io", "java.sql"], answer: "java.util" },
    { question: "Which exception is unchecked?", options: ["IOException", "SQLException", "NullPointerException", "ClassNotFoundException"], answer: "NullPointerException" },
    { question: "Which keyword is used for interface?", options: ["interface", "class", "implements", "extends"], answer: "interface" },
    { question: "Which is used for multithreading?", options: ["Thread", "Runnable", "Executor", "All"], answer: "All" },
    { question: "Default value of int in Java?", options: ["0", "null", "undefined", "garbage"], answer: "0"},
    { question: "Which loop is entry-controlled?", options: ["do-while", "while", "for", "Both while & for"], answer: "Both while & for" },
    { question: "Which keyword is used for exception handling?", options: ["try-catch", "catch", "throw", "rescue"], answer: "try-catch" }
  ],
};

// State
let currentTopic = "";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 20;

// DOM
const dashboard = document.getElementById("dashboard");
const quizScreen = document.getElementById("quiz");
const resultScreen = document.getElementById("result");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progress");
const finalScoreEl = document.getElementById("finalScore");

// Topic Selection
document.querySelectorAll(".topic-btn").forEach(btn => {
  btn.addEventListener("click", () => startQuiz(btn.dataset.topic));
});

// Start Quiz
function startQuiz(topic) {
  currentTopic = topic;
  currentQuestions = [...quizData[topic]];
  currentIndex = 0;
  score = 0;

  dashboard.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");

  loadQuestion();
}

// Load Question
function loadQuestion() {
  clearInterval(timer);
  timeLeft = 20;
  startTimer();

  const currentQ = currentQuestions[currentIndex];
  questionEl.textContent = currentQ.question;
  progressEl.textContent =` Question ${currentIndex + 1} / ${currentQuestions.length}`;

  optionsEl.innerHTML = "";
  currentQ.options.forEach(option => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, currentQ.answer, btn);
    optionsEl.appendChild(btn);
  });

  nextBtn.disabled = true;
}

// Check Answer
function checkAnswer(selected, correct, btn) {
  if (selected === correct) {
    score++;
    btn.classList.add("correct");
  } else {
    btn.classList.add("wrong");
  }

  document.querySelectorAll(".option-btn").forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add("correct");
  });

  clearInterval(timer);
  nextBtn.disabled = false;
}

// Next Question
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Timer
function startTimer() {
  timerEl.textContent = `⏳ ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `⏳ ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextBtn.disabled = false;
        nextBtn.click();
    }
  }, 1000);
}

// Show Result
function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  finalScoreEl.textContent = `You scored ${score} / ${currentQuestions.length}`;
}

// Restart Quiz
function restartQuiz() {
  resultScreen.classList.add("hidden");
  dashboard.classList.remove("hidden");
}