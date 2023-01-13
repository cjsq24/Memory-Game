import { Fragment, useState, useMemo, useEffect, useRef } from 'react'
import { ChangeCircle } from '@mui/icons-material'
import { formatTimer, getIcons } from '../../utils'
import TitleData from './components/TitleData'
import CustomModal from '../../components/Modal'
import { useTranslation } from 'react-i18next'
import useWindowDimensions from '../../hooks/useWindowDimensions'

enum EResult {
  success = 'success',
  failed = 'failed',
}

type TProps = {
  quantityCards: string
  limitFailures: string
  timeoutGame: string
  setStartGame: (value: boolean) => void
}

const activeClass = 'flip-card-active'

const CardList = ({ quantityCards, limitFailures, timeoutGame, setStartGame }: TProps) => {
  const { t } = useTranslation()
  let rowCount = -1
  const iconList = useMemo(() => getIcons(quantityCards), [quantityCards])
  const [countFailures, setCountFailures] = useState(0)
  const [timeRunning, setTimeRunning] = useState('0:00')
  const [timeRemaining, setTimeRemaining] = useState(formatTimer(parseInt(timeoutGame) * 60))
  const [countSuccess, setCountSuccess] = useState(0)
  const [timeoutIntervalId, setTimeoutIntervalId] = useState<number>()
  const [resultGame, setResultGame] = useState<EResult>()

  const cardActive = useRef('')

  const { width } = useWindowDimensions()
  const rowBreak = useMemo(() => (width > 850 ? 8 : 10000), [width])
  const fontSizeIcon = useMemo(() => (width > 850 ? 50 : width > 616 ? 40 : 35), [width])

  useEffect(() => {
    if (countSuccess === parseInt(quantityCards) * 2) {
      clearInterval(timeoutIntervalId)
      setTimeout(() => {
        setResultGame(EResult.success)
      }, 1000)
    }
  }, [countSuccess])

  useEffect(() => {
    if (countFailures === parseInt(limitFailures)) {
      setTimeout(() => {
        setResultGame(EResult.failed)
      }, 1000)
    }
  }, [countFailures])

  // time running
  useEffect(() => {
    if (timeoutGame !== 'none') return
    let seconds = 0
    const intervalId = setInterval(() => {
      seconds++
      setTimeRunning(formatTimer(seconds))
    }, 1000)
    return () => clearInterval(intervalId)
  }, [timeoutGame])

  // timeout remaining
  useEffect(() => {
    if (timeoutGame === 'none') return
    let seconds = parseInt(timeoutGame) * 60
    const intervalId = setInterval(() => {
      seconds--
      setTimeRemaining(formatTimer(seconds))
      if (seconds === 0) {
        clearInterval(intervalId)
        setResultGame(EResult.failed)
      }
    }, 1000)
    setTimeoutIntervalId(intervalId)
    return () => clearInterval(intervalId)
  }, [timeoutGame])

  const onClickCard = (id: string, key: string) => {
    const element = document.querySelector(`#${id}`)
    const className = element?.className
    element?.classList.add(activeClass)
    if (className?.includes(activeClass)) return
    if (cardActive.current === '') {
      cardActive.current = key
    } else if (cardActive.current !== key) {
      const active = cardActive.current
      setTimeout(() => {
        document?.querySelectorAll(`.${active}`)?.forEach((ele) => {
          ele?.classList.remove(activeClass)
        })
        element?.classList.remove(activeClass)
      }, 700)
      setCountFailures((prev) => prev + 1)
      cardActive.current = ''
    } else if (cardActive.current === key) {
      cardActive.current = ''
      setCountSuccess((prev) => prev + 2)
    }
  }

  return (
    <div className='card-container'>
      <div className='info-row'>
        <TitleData label={t('cards')} value={quantityCards} />
        <TitleData
          label={t('failures')}
          value={`${countFailures}${limitFailures !== 'none' ? '/' + quantityCards : ''}`}
          marginLeft
        />
        {timeoutGame === 'none' && (
          <TitleData label={t('timeRunning')} value={timeRunning} marginLeft />
        )}
        {timeoutGame !== 'none' && (
          <TitleData label={t('timeRemaining')} value={timeRemaining} marginLeft />
        )}
      </div>
      <div className='icon-container'>
        {iconList.map(({ icon: Icon, key, color }, idx) => {
          const id = `${key}-${idx}`
          rowCount = rowCount === rowBreak ? 1 : rowCount + 1
          return (
            <Fragment key={idx}>
              {rowCount === rowBreak && <div className='break' />}
              <div className='flip-card'>
                <div
                  className={`flip-card-inner ${key}`}
                  id={id}
                  onClick={() => onClickCard(id, key)}
                >
                  <div className='flip-card-front' style={{ backgroundColor: color }}>
                    <div className='icon-background'>
                      <Icon sx={{ fontSize: fontSizeIcon, color: 'black' }} />
                    </div>
                  </div>
                  <div className='flip-card-back'>
                    <ChangeCircle sx={{ fontSize: fontSizeIcon, color: 'gray' }} />
                  </div>
                </div>
              </div>
            </Fragment>
          )
        })}
      </div>
      <CustomModal
        isOpen={!!resultGame}
        hideClose
        onSuccess={() => setStartGame(false)}
        buttonText={t('ofCourse')}
        title={resultGame === EResult.success ? t('congratulations') : t('youFailed')}
        body={<h3>{t('careTryAgain')}</h3>}
      />
    </div>
  )
}

export default CardList
