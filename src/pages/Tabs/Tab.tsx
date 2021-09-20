import React from 'react'

type Props = {
  title: string
}

const Tab: React.FC<Props> = ({ children }) => {
  return <div className="mt-2 title">{children}</div>
}

export default Tab