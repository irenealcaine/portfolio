import React from "react";
import "./TimelineItem.scss";

const TimelineItem = ({ item, index, isSpanish, colors, neonOn }) => {
  const itemInfo = isSpanish ? item.es : item.en;

  return (
    <li
      key={index}
      className={`timeline-item timeline-block-${
        index % 2 !== 0 ? "right" : "left"
      } ${colors[Math.floor(Math.random() * colors.length)]} ${neonOn && "on"}`}
    >
      <div className="marker"></div>
      <div className="timeline-panel">
        <div className="timeline-header">
          <h3>{itemInfo.title}</h3>
          <p>
            <span>{itemInfo.company}</span> | {itemInfo.ubication}
          </p>
        </div>
        <div className="timeline-body">
          <ul>
            {itemInfo.description.map((desc, descIndex) => (
              <li key={descIndex}>
                <p>{desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="timeline-footer">
          <p>{itemInfo.date}</p>
        </div>
      </div>
    </li>
  );
};

export default TimelineItem;
