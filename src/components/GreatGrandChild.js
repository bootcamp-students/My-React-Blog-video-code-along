import React from 'react'
import {useAuth} from '../utilities/AuthContext'

export default function GreatGrandChild() {

  const { token } = useAuth();

  return (
    <div>
      I am a very deep component,
      the prop sent from my
      Great Grand Parent is: "{token}"
    </div>
  )
}
