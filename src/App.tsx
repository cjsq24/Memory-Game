import { SelectChangeEvent } from '@mui/material'
import { useState } from 'react'
import './App.css'
import CustomModal from './components/Modal'
import Select from './components/Select'
import CardList from './Views/CardList'
import './utils/i18n'
import { useTranslation } from 'react-i18next'

const quantityValues = ['10', '20', '30', '40', '50', '60']
const maxFailures = ['none', '10', '20', '30', '40', '50', '60']
const timeoutList = ['none']

for (let i = 0; i < 20; i++) {
  timeoutList.push((i + 1).toString())
}

function App() {
  const { t } = useTranslation()
  const [quantityCards, setQuantityCards] = useState(quantityValues[1])
  const [limitFailures, setLimitFailures] = useState(maxFailures[0])
  const [timeoutGame, setTimeoutGame] = useState(timeoutList[0])
  const [startGame, setStartGame] = useState(false)

  const handleQuantityChange = (event: SelectChangeEvent) => {
    setQuantityCards(event.target.value as string)
  }

  const handleFailuresChange = (event: SelectChangeEvent) => {
    setLimitFailures(event.target.value as string)
  }

  const handleTimeoutChange = (event: SelectChangeEvent) => {
    setTimeoutGame(event.target.value as string)
  }

  return (
    <div className='container'>
      {startGame && (
        <CardList
          quantityCards={quantityCards}
          limitFailures={limitFailures}
          timeoutGame={timeoutGame}
          setStartGame={setStartGame}
        />
      )}
      <CustomModal
        isOpen={!startGame}
        hideClose
        onSuccess={() => setStartGame(true)}
        title={t('welcome')}
        buttonText={t('start')}
        body={
          <>
            <Select
              id='quantity-cards'
              label={t('quantityCards')}
              value={quantityCards}
              onChange={handleQuantityChange}
              valueList={quantityValues}
            />
            <Select
              id='limit-failures'
              label={t('limitFailures')}
              value={limitFailures}
              onChange={handleFailuresChange}
              valueList={maxFailures}
            />
            <Select
              id='timeout-game'
              label={t('setTimeout')}
              value={timeoutGame}
              onChange={handleTimeoutChange}
              valueList={timeoutList}
            />
          </>
        }
      />
    </div>
  )
}

export default App
