import { useState, useEffect } from 'react'
import { initialState, toggleCheckedItem, setFormatChoice, togglePackedItem } from './gameState'
import Screen01Mission from './screens/Screen01Mission'
import Screen02Identity from './screens/Screen02Identity'
import Screen03Progress from './screens/Screen03Progress'
import Screen04Natal from './screens/Screen04Natal'
import Screen05Diagnosis from './screens/Screen05Diagnosis'
import Screen06Format from './screens/Screen06Format'
import Screen07Maksim from './screens/Screen07Maksim'
import Screen08Pack from './screens/Screen08Pack'
import Screen09Game from './screens/Screen09Game'
import Screen10Invite from './screens/Screen10Invite'
import Screen11Certificate from './screens/Screen11Certificate'

const SCREENS = [
  Screen01Mission, Screen02Identity, Screen03Progress,
  Screen04Natal, Screen05Diagnosis, Screen06Format,
  Screen07Maksim, Screen08Pack, Screen09Game,
  Screen10Invite, Screen11Certificate,
]

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [gameState, setGameState] = useState(initialState)

  useEffect(() => {
    const tg = window.Telegram?.WebApp
    if (!tg) return
    tg.ready()
    tg.expand()
  }, [])

  useEffect(() => {
    const tg = window.Telegram?.WebApp
    if (!tg) return
    if (currentScreen > 0) {
      tg.BackButton.show()
      tg.BackButton.onClick(() => setCurrentScreen(s => Math.max(s - 1, 0)))
    } else {
      tg.BackButton.hide()
    }
    return () => tg.BackButton.offClick()
  }, [currentScreen])

  const goNext = () => setCurrentScreen(s => Math.min(s + 1, SCREENS.length - 1))

  const handlers = {
    onNext: goNext,
    onToggleChecked: (item) => setGameState(s => toggleCheckedItem(s, item)),
    onSetFormat: (choice) => setGameState(s => setFormatChoice(s, choice)),
    onTogglePacked: (item) => setGameState(s => togglePackedItem(s, item)),
  }

  const Screen = SCREENS[currentScreen]

  return (
    <div className="screen-app">
      <div key={currentScreen} className="screen">
        <Screen gameState={gameState} {...handlers} />
      </div>
    </div>
  )
}
