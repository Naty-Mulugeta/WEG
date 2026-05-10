import React from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

const App = () => {
  return (
    <div>
      <h1>Hello,there</h1>
       <Show when="signed-out">
          <SignInButton mode="modal" />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
    </div>
  )
}

export default App
