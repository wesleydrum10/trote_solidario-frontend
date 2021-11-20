import React, { useState, useCallback } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';

export const Loading = () => {
  const [isActive, setActive] = useState(true)
  const handleButtonClicked = useCallback(() => {
    setActive(value => !value)
  }, [])

  return (
    <LoadingOverlay
      active={isActive}
      spinner
      text='Loading your content...'
    >
      <div style={{ height: 200 }}>
        <p>Some content or children or something.</p>
        <button onClick={handleButtonClicked}>Toggle active</button>
      </div>
    </LoadingOverlay>
  )
}