import React, { useState } from 'react'
interface Props {
  name:string;
  age:number;
  isMarried: boolean;
}
export default function Person(props: Readonly<Props>) {

  const [isShowInfo, setIsShowInfo] = useState<boolean | null>(false);
  const [personBio, setPersonBio] = useState<string | null>(null)
  const toggleInfo = () => {
    setIsShowInfo((prev) => !prev)
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(event.target.value)
  }
  return (
    <div>
      {
        isShowInfo && (
        <>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>This person {props.isMarried ? "is married": "is single"}</p>
        </>
        )}
        <p> {props.name} Bio: { !personBio ? "No Bio Available" : personBio}</p>
        <input type="text" onChange={handleChange}/>
       <button onClick={toggleInfo}>Toggle Info</button>
    </div>
  )
}
