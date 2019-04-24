import React from 'react'

const BadgeExperience = (props) => (
  <span className="badge badge-info mr-2">
    <span className="align-middle">{props.startYear}</span>
    <div className="box-icon sm white r180">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 11L8.414 11 12.707 6.707 11.293 5.293 4.586 12 11.293 18.707 12.707 17.293 8.414 13 18 13z"/></svg>
    </div>
    <span className="align-middle">{props.endYear}</span>
  </span>
)

export default BadgeExperience
