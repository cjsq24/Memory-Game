import { IArrayIcon, icons } from './icons'

const selectAndShuffleIcons = (quantity: number, iconsToExtract: IArrayIcon[]): IArrayIcon[] => {
  const newIconList: IArrayIcon[] = []
  for (let i = 0; i < quantity; i++) {
    const idxToExtract = Math.floor(Math.random() * (iconsToExtract.length - 1)) + 1
    const index = idxToExtract === 0 ? 0 : idxToExtract - 1
    newIconList.push(iconsToExtract[index])
    iconsToExtract = iconsToExtract.filter((_icon, idx) => idx !== index)
  }
  return newIconList
}

const getIcons = (quantity: string): IArrayIcon[] => {
  const iconsSelected = selectAndShuffleIcons(parseInt(quantity), icons)
  iconsSelected.push(...iconsSelected)
  const iconsToPlay = selectAndShuffleIcons(iconsSelected.length, iconsSelected)
  return iconsToPlay
}

const formatTimer = (time: number): string => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

export { getIcons, formatTimer }
