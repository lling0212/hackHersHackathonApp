import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton'; // Ensure these imports match your file structure
import PauseButton from './PauseButton';
import React, { useState, useContext, useRef, useEffect } from 'react'
import Context from '../Context'
import './Timer.css'
import GenericButton from './GenericButton';

const grey = '#2C3E50';
const green = '#26c25f';
const blue = '#1d4ed8';

const Timer = () => {
  const { selectedTile, setShowMainScr, setShowTimer } = useContext(Context);
  const { tasks, setTasks, completeTask, deleteTask, addTimeToTask } = useContext(Context);
  const task = tasks[selectedTile];
  const taskid = tasks[selectedTile].id;

  const [quotes, setQuotes] = useState([
    {id: 1, text: "\"You don't have to be great to start, but you have to start to be great.\""},
    {id: 2, text: "\"Your dreams are valid, and so is your effort. Keep going!\""},
    {id: 3, text: "\"Stay focused, and keep moving forward. You're unstoppable!\""},
    {id: 4, text: "\"Keep that concentration up, and greatness awaits!\""},
    {id: 5, text: "\"Hey, don't let distractions throw you off course.\""},
    {id: 6, text: "\"Dive in - you've got what it takes!\""},
    {id: 7, text: "\"You've got this!\""},
    {id: 8, text: "\"You are never too old to set another goal or to dream a new dream.\""},
    {id: 9, text: "\"The secret of getting ahead is getting started.\""},
    {id: 10, text: "\"Focus on progress not perfection.\""},
    {id: 11, text: "\"Don't let what you cannot do interfere with what you can do.\""},
    {id: 12, text: "\"Believe you can, and you're halfway there.\""},
  ])
  const [breakActivities, setBreakActivities] = useState([
    {
      id: 1,
      text: "🧩 Conquer the NY Times Mini crossword puzzle",
      link: "https://www.nytimes.com/crosswords/game/mini"
    },
    {
      id: 2,
      text: "🎙️ Listen to a 5 minute TED talk",
      link: "https://www.ted.com/playlists/467/short_talks_to_watch_during_yo"
    },
    {
      id: 3,
      text: "🍘 Make youself a 5 minute study snack",
      link: "https://spoonuniversity.com/lifestyle/15-5-minute-study-snacks-that-will-save-your-gpa",
    },
    {
      id: 4,
      text: "🧘‍♀️ Do 5 minutes of relaxing breathing exercises",
      link: "https://www.headspace.com/meditation/breathing-exercises",
    },
    {
      id: 5,
      text: "👟 Pep yourself up with a 5 minute workout",
      link: "https://www.lyfta.app/workout-generator/5-minute-warm-up-4iq",
    },
    {
      id: 6,
      text: "🐶 Enjoy these pictures of cute puppies",
      link: "https://www.pinterest.com/pin/30-impossibly-cute-puppies--362750944965891387/",
    },
    {
      id: 7,
      text: "🎧 Listen to this tune",
      link: "https://www.youtube.com/watch?v=aAQZPBwz2CI",
    },

  ]);
  const [activityIndex, setActivityIndex] = useState(Math.floor(Math.random() * breakActivities.length));
  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * quotes.length));

    const workMinutes = 1;
    const breakMinutes = 1;

    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work');
    const [secondsLeft, setSecondsLeft] = useState(workMinutes * 60);
    const [completedBlocks, setCompletedBlocks] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    useEffect(() => {
      function switchMode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? workMinutes : breakMinutes) * 60;

        setMode(nextMode);
        modeRef.current = nextMode;

        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;

        if (nextMode === 'break') {
          addTimeToTask(taskid);
        }

        setIsPaused(true);
        isPausedRef.current = true;
      }

      function tick() {
        if (isPausedRef.current) {
          return;
        }
        if (secondsLeftRef.current === 0) {
          switchMode();
        } else {
          secondsLeftRef.current--;
          setSecondsLeft(secondsLeftRef.current);
        }
      }

      const interval = setInterval(tick, 1000);
      return () => clearInterval(interval);
    }, []);

    const handlePlayPause = () => {
      setIsPaused(!isPaused);
      isPausedRef.current = !isPaused;
    };

    const handleHomeClick = () => {
      setShowMainScr(true);
      setShowTimer(false);
    };

    const handleDeleteTask = () => {
      deleteTask(taskid)
      setShowMainScr(true);
      setShowTimer(false);
    };

    const handleImDone = () => {
      completeTask(taskid);
      setShowMainScr(true);
      setShowTimer(false);
    }

    const totalSeconds = mode === 'work' ? workMinutes * 60 : breakMinutes * 60;
    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = `0${seconds}`;

    return (
        <div className="timer-container">
          <button className="home-button" onClick={handleHomeClick}>
            Home
          </button>

          <div className="progress-bar-container">
            <CircularProgressbar
              value={percentage}
              text={`${minutes}:${seconds}`}
              styles={buildStyles({
                textColor: '#fff',
                // pathColor: mode === 'work' ? grey : mode === 'break' ? pink : green,
                pathColor: mode === 'work' ? grey : grey,
                trailColor: '#121212',
                backgroundColor: '#121212',
                textSize: '18px',
                pathTransitionDuration: 0.5,
                strokeLinecap: 'butt',
                strokeWidth: 1,
              })}
              background
              backgroundPadding={6}
            />
          </div>

          <div className="buttons-container">
            {mode === 'work' ? (
              isPaused ? (
                <PlayButton onClick={handlePlayPause} />
              ) : (
                <PauseButton onClick={handlePlayPause} />
              )
            ) : (
              <GenericButton color="#1d4ed8" text="Start Break" textColor="white" onClick={handlePlayPause} />
            )}

            <button
              className="im-done-button"
              onClick={handleImDone}
            >
              I'm done
            </button>
          </div>

          <div className="horizontal-bar"></div>

          <div className="completed-blocks-container">
            Completed Blocks: {task.doneblocks}
          </div>
          
          <div className="motivational-text">
            {mode === 'work' 
            ? <a href={quotes[quoteIndex].link}>{quotes[quoteIndex].text}</a> 
            : <p>{ breakActivities[activityIndex].text }</p>
            }
          </div>
          

          <button className="delete-task-button" onClick={handleDeleteTask}>
            Delete Task
          </button>
        </div>
      );
}

export default Timer
