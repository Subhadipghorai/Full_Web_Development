import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      
     <Script>
      {`alert("wellCome to contact page")`}
      </Script>
      this is contact
    </div>
  )
}

export default contact

export const metadata = {
  title: " Contact Facebook - connect with the world",
  description: "This is a page where you can contact Facebook and we can connect with the world using facebook",
};
