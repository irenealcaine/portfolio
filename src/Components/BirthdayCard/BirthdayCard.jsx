import { useTranslation } from "react-i18next";
import { LiaBirthdayCakeSolid } from "react-icons/lia"
import "./BirthdayCard.scss"
import {useState} from "react"
import { calculateDaysUntilBirthday } from "../../Utils/Functions";

const BirthdayCard = () => {

  const { t } = useTranslation("global");
  const [days] = useState(calculateDaysUntilBirthday())

  return (
    <a
      href="https://sendwishonline.com/en/group-cards/congratulation"
      target="_blank" 
      rel="noreferrer"
      className="birthdayCard"
    >
      <p className="title">
        {t("aboutPage.birthday")}
        <span><LiaBirthdayCakeSolid /> </span></p>
      <h3 className="">
        {days}
      </h3>
      <div>
      </div>
    </a>
  )
}

export default BirthdayCard