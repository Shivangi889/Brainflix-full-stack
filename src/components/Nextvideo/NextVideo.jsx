import React from "react";
import "./NextVideo.scss";
import Upload from "../../assets/Images/Upload-video-preview.jpg"

const NextVideo = ({ id, handleChangeData, filteredData }) => {
  return (
    <section className="nextvideo">
      <h5>NEXT VIDEOS</h5>
      {filteredData
      .filter((e)=>e.id !== id)
      ?.map((Next, index) => {
        return (
          <div className="nextvideo__card" key={index + 1}>
            <div
              className="nextvideo__card--image"
              onClick={() => {
                handleChangeData(Next.id);
              }}
            >
              <img src={Next?.image} alt="next_video" />
           
            </div>
            <div className="nextvideo__card--details">
              <h4 className="nextvideo__card--details--title">{Next?.title}</h4>
              <p className="nextvideo__card--details--author">
                {Next?.channel}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default NextVideo;
