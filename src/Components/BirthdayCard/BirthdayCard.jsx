import { useTranslation } from "react-i18next";
import { LiaBirthdayCakeSolid } from "react-icons/lia"
import "./BirthdayCard.scss"
import {useEffect, useState} from "react"

const BirthdayCard = () => {

  const { t } = useTranslation("global");
  const [days, setDays] = useState(0)

  useEffect(()=>{
      let today = new Date()
      let year = today.getFullYear()
      let birthday = new Date(year+1, 6, 26)
      const difference =  Math.floor((birthday - today)/ (1000 * 60 * 60 * 24))
      setDays(difference)
  },[])

  return (
    <a
    href="https://sendwishonline.com/en/group-cards/congratulation"
    target="_blank" 
    rel="noreferrer"
   className="birthdayCard"
    >
      <p className="title">{t("aboutPage.birthday")}<span><LiaBirthdayCakeSolid /> </span></p>
      <h3 className="">
        {days}
      </h3>
      <div>
      </div>
    </a>
  )
}

export default BirthdayCard