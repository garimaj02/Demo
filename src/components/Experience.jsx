import React from 'react'
import experience from './data/experience.json'

const Experience = () => {
  return (
    <>
    <div className="container ex">
      <h1>Experience</h1>
      {
        experience.map((data)=>{
          return(
            <>
            <div key={data.id} className="ex-items text-center my-5"
            data-aos="zoom-in"
            data-aos-duration="1000">
              <div className="left">
               <img src={`/assets/${data.imageSrc}`} alt="" />
               <h5>{data.role}</h5>
                               {/* <h2>{data.role}</h2> */}
                               <h6><span style={{color: "yellowgreen"}}>{data.startDate}</span>{" "} <span style={{color: "yellowgreen"}}>{data.endDate}</span> {" "}
                               <span style={{color: "yellow"}}>{data.location}</span></h6>
              </div>
              <div className="right">
                <p>{data.experiences[0]}</p>
                <p>{data.experiences[1]}</p>
                <p>{data.experiences[2]}</p>
              </div>
            </div>
            </>
          );    
})
}
    </div>
    </>
  );
}


export default Experience