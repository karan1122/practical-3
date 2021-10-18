const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var playername = "";
var score = 0;
var total = 0;

const questions = () => {
    
    // Question 1...

    console.log("1. India played its first one day in ? ");
    console.log("A. 1970");
    console.log("B. 1974");
    console.log("C. 2000");
    console.log("D. 1980");

    rl.question("Answer : " , (ans) => {
        if(ans == "B" || ans == "b")
        {
            console.log("Correct Answer");
            score = score + 5;
            console.log("Score = " , score);
        }
        else
        {
            console.log("Wrong Answer");
            if(score === 0)
            {
                score = 0;
            }
            else
            {
                score = score - 2;
            }
        }

        // Question 2...

        console.log("2.  World cup semi final of India-Srilanka in 1996 was played in?");
        console.log("A. Rajkot");
        console.log("B. Mumbai");
        console.log("C. Calcutta");
        console.log("D. Chennai");

        rl.question("Answer : " , (ans) => {
            if(ans == "c" || ans == "c")
            {
                console.log("Correct Answer");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 3...

        console.log("3. Sachin Tendulkar played his One-day debut against");
        console.log("A. India");
        console.log("B. Australia");
        console.log("C. Pakistan");
        console.log("D. England");

        rl.question("Answer : " , (ans) => {
            if(ans == "C" || ans == "c")
            {
                console.log("Correct Answer");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 4...

        console.log("4. India Played its first one-day international match at home in?");
        console.log("A. 1981 at Ahmedabad");
        console.log("B. 1981 at Calcutta");
        console.log("C. 1982 at Chennai");
        console.log("D.1981 at Chennai");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 5...

        console.log("5. Who was the first one day victim of Kapil Dev ?");
        console.log("A. Sunil Gavaskar");
        console.log("B. Imran Khan");
        console.log("C. Vishwanath");
        console.log("D. MSD");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 6...

        console.log("6. Who was first test captain of Indian cricket team ?");
        console.log("A. CK Nayudu");
        console.log("B. Ajit Wadekar");
        console.log("C. Bapu Nadkarni");
        console.log("D. Vijay Hazare");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 7...

        console.log("7. Indian played their First T20 Match against _____?");
        console.log("A. Australia");
        console.log("B. Pakistan");
        console.log("C. England");
        console.log("D. South Africa");

        rl.question("Answer : " , (ans) => {
            if(ans == "D" || ans == "d")
            {
                console.log("Correct Answer");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 8...

        console.log("8. Which of the following is first cricket club in India ?");
        console.log("A. Maharashtra Cricket Club");
        console.log("B. Oriental Cricket Club");
        console.log("C. Bombay Cricket Club");
        console.log("D. East Indian Cricket Club");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 9...

        console.log("9. Indian played first test match against ________ ?");
        console.log("A. Australia");
        console.log("B. South Africa");
        console.log("C. England");
        console.log("D. Pakistan");

        rl.question("Answer : " , (ans) => {
            if(ans == "C" || ans == "c")
            {
                console.log("Correct Answer");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 10...

        console.log("10. Which countries are the latest full time members of the ICC?");
        console.log("A.  Afghanistan and Ireland");
        console.log("B. Bangladesh and Nepal");
        console.log("C. Trinidad & Tobago ");
        console.log("D. None of the above");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer");
                score = score + 5;
                
                console.log("Player  = " , playername);
                console.log("Total Score  = " , score + "\n");
                rl.close();
            }
            else
            {
                console.log("Wrong Answer");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
                console.log("Player  = " , playername);
                console.log("Total Score  = " , score + "\n");
                rl.close();
            }
    


            });
            });
            });
            });
            });
            });
            });
            });
        });
    });

};

const startgame = () => {

    console.log("1. Start");
    console.log("2. Exit");

    rl.question("Enter Your Choice = " , (ans) => {
        if(ans == 1) 
        {
            rl.question("Enter Your name = " , (uname) => {
                playername = uname;
                if(playername.length > 0)
                {
                    console.log(playername);
                    questions();
                }
                else
                {
                    console.log("Enter Valid Name...");
                    startgame();
                }
            });
        }
        else if(ans == 2)
        {
            rl.close();
        }
        else
        {
            console.log("Enter Valid Name...");
            startgame();
        }
    });

   
};


startgame();

