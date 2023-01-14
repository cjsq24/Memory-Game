import React from 'react'

type TProps = {
  label: string
  value: string | number
  marginLeft?: boolean
}

const TitleData = ({ label, value, marginLeft }: TProps) => {
  return (
    <h5 className={`title-data ${marginLeft && 'margin-left-text'}`}>
      {label}: <span className='quantity'>{value}</span>
    </h5>
  )
}

export default TitleData
