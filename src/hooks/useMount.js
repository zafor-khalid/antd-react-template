import React from 'react'

const useMount = (func) =>
  React.useEffect(() => {
    const unSub = func()
    return unSub
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

export default useMount
