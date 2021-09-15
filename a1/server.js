const readline = require("readline");

const bookList = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const books = [
    {
        id: 1,
        name: "computer Networking",
    },
    {
        id: 2,
        name: "computer Fundamentals",
    },
    {
        id: 3,
        name: "OOPS",
    },
    {
        id: 4,
        name: "DBMS",
    },
    {
        id: 5,
        name: "Operating System",
    },
];


const userSelect = () => {
    bookList.question(
        "Press 1 : All books \n Press 2: Add a new book \n Press 3: Quit \n", (answer) => {
            if(answer == 1){
                console.log("you pressed 1");
                books.map((e, index) => {
                    console.log(`(${index + 1}).${e.name}`);
                });
                userSelect();
            }
            else if(answer == 2){
                console.log("you pressed 2");
                bookList.question("Enter the book name that you want to add in the list?\n", (answer) => {
                    const payload = {
                        id: books.length,
                        name: answer,
                    };
                    books.push(payload);
                    userSelect();
                });
                userSelect();
            }
            else if(answer == 3){
                bookList.question("Do you want to quit? Y/N \n", (answer) => {
                    if(answer.toUpperCase() === "Y"){
                        bookList.close();
                    }
                    else{
                        userSelect();
                    }
                });
            }
            else{
                console.log("You have selected an invalid entry so please press 1, 2 or 3");
                userSelect();
            }
        }
    );
};
bookList.on("close", () => {
    console.log("Great, See you soon");
});

userSelect();