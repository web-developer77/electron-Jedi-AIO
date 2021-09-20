import React, { useCallback } from "react"

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])
  return (
    <li className={{setSelectedTab(){index}}?'p-2 active':'p-2 inactive'}>
      <div onClick={onClick} className={title}>{title}</div>
    </li>
  )
}

export default TabTitle