import React from 'react'

import PrivateHeader from './PrivateHeader'

export default () => {
  return (
    <div>
      <PrivateHeader title="Your Dashboard" />
      <div className="wrapper">
        Dashboard page content.
      </div>
    </div>
  )
}