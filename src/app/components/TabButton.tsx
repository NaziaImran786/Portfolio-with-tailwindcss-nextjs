import React from 'react'

const TabButton = ({active, selectTab, children}:any) => {
  const buttonClasses =  active ? 'text-purple-500 border-b border-purple-500' : 'text-[#ADB7BE]'

  return (
   <button onClick={selectTab}>
    <p className={`mr-3 font-semibold hover:text-white ${buttonClasses} `}>
     {children}
     </p>
    </button>
  )
}

export default TabButton
