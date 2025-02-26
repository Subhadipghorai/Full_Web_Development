import { useEffect } from "react"

const Navbar = ({ color }) => {
  // Case 1: Run on Every Render
  useEffect(() => {
    alert("Hey I will run on every render")
  });

  //Case 2: Run only on first render
  useEffect(() => {
    alert("Hey WellCome to my page. This is the first render")

  }, []);

  // Case 3: Run only when certain values changes

  useEffect(() => {
    alert("Hey I am running because the color has changed")

  }, [color]);


  return (
    <div>
      i am a navbar of {color} hehe..
    </div>
  )
}

export default Navbar
