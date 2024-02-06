# PomoPuzzle

PomoPuzzle is a web app that combines a **gamified daily task tracker** with a **pomodoro focus timer** as well as a **simple puzzle game**. 

Each of the inputted tasks corresponds to a puzzle piece. As the user completes the to-dos on their list, they also gradually completes the puzzle. 

It is a project developed in 48 hours for the 2024 MCIT hackathon at the University of Pennsylvania, and won **"Most Creative Solution"** among 10+ teams. 

### Key Features

![Main Screen](/demoImages/mainScreen.png "Main Screen")
* **3-by-3 grid displaying user's tasks**, color coded based on task progress and tracking time blocks (30-min pomodoro blocks consisting of 25-min work time and 5-min break time) assigned and completed
* **Puzzle image selector** allows users to change puzzle backgrounds

![Add Form](/demoImages/addForm.png "Add Form")
* **Add task form** allows user to add a task to the grid

![Main Screen Puzzle Mode](/demoImages/mainScreenPuzzle.png "Main Screen Puzzle")
* **Puzzle mode toggle** allows user to switch between puzzle mode (showing puzzle image for completed tasks) and non-puzzle mode

![Completed Puzzle](/demoImages/completedPuzzle.png "Completed Puzzle")
* **Entire puzzle presented** when all tasks are completed

![Work Timer](/demoImages/workTimer.png "Work Timer")
* Clicking on a task tile in the grid starts a **work session timer** for that task
* Completion of the 25-min session **automatically increments time blocks completed**
* **Randonly generated motivational quote** from a bank of quotes to encourage users

![Break Timer](/demoImages/breakTimer.png "Break Timer")
* **Break timer** automatically starts once current work session is completed
* **Randonly generated break activity suggestion** to help users recharge


### Tech Stack

* **Languages**: JavaScript, HTML, CSS
* **Framework**: React

### Aspired Future Enhancements

* Integrate with backend database to allow multiple users, user authentication and save user data
* Enable Time tracking across different categories of tasks (e.g., track time spent on different courses and allow course instructors to gauge real time spent on their courses)
* Upload user's own puzzle images
* Pair users as study buddies for synchronous study sesssions



### Link to our project demo presentation :)
https://youtu.be/agl5VIzQup0

