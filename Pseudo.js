// Pseudo Code

/*

THEME: Atlanta, cars, cities, movies.


- Create a trivia game. 
- Each question has it's own page and timer
- When user clicks start, trivia starts with first question
- For each trivia question, there are 3 wrong answers and 1 right answer.
- As user hovers over an answer, then answer is highlighted.
- If user clicks correct answer: correctAnswer++, GIF appears and text appears saying "You're correct!". Transition page appears for 4 seconds, and then new question appears (along with reset timer).
-  If user clicks wrong answer: wrongAnswer++, GIF appears and text appears saying which answer was correct. Transition page appears for 4 seconds
- Cycle questions till end of questions. Then present final page with total score (Correct, Wrong, and Unanswered).
- Start over goes back to first question and not the initial loading screen.


-What do I need?
- Create object with question/answer pairs. Or objects within objects?
- List of GIFs associated with questions. Maybe build these into object?
- Variables to store correct, incorrect, and unanswered questions.
- Timer that resets.
- If user guess correct, add score, load appropriate GIF with text, and setTimeout? Then clear div and load next question into div
- If user guess wrong, add score, load appropriate GIF text, and setTimeout? Then clear div and load next question into div
- Clear div to jump to next question?
- If user clicks restart, jump to first question.
- 

*/