import React, { useState, useContext } from 'react'
import Context from '../Context'

const Timer = () => {
  const {selectedTile} = useContext(Context);
  const {workMode} = useState(true);
  const [quotes, setQuotes] = useState([
    {id: 1, text: "You don't have to be great to start, but you have to start to be great"},
    {id: 2, text: "Your dreams are valid, and so is your effort. Keep going"},
    {id: 3, text: "Stay focused, and keep moving forward. You're unstoppable!"},
    {id: 4, text: "Keep that concentration up, and greatness awaits!"},
    {id: 5, text: "Hey, don't let distractions throw you off course."},
    {id: 6, text: "Dive in - you've got what it takes!"},
    {id: 7, text: "You've got this! "},
    {id: 8, text: "You are never too old to set another goal or to dream a new dream"},
    {id: 9, text: "The secret of getting ahead is getting started"},
    {id: 10, text: "Focus on progress not perfection"},
    {id: 11, text: "Don't let what you cannot do interfere with what you can do"},
    {id: 12, text: "Believe you can, and you're halfway there"},
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

  return (
    <div>
      Timer
      {selectedTile}
    </div>
  )
}

export default Timer
