import "../../Pages/Hero/Hero.scss";
import view from "../../assets/Icons/views.svg";
import like from "../../assets/Icons/likes.svg";
import "./VideoDetails.scss";

function VideoDetails({
  channel,
  timeStamp,
  views,
  likes,
  description,
  convertDateformat,
}) {
  console.log(timeStamp, "timestamp");
  return (
    <>
      <section className="hero__container--left--author">
        <div className="hero__container--left--author--name">
          <h5>By {channel}</h5>
          <p className="date">{convertDateformat(timeStamp)}</p>
        </div>
        <div className="hero__container--left--author--preview">
          <span>
            {" "}
            <img src={view} alt=" views_icons" />
            {views}
          </span>
          <span>
            {" "}
            <img src={like} alt=" views_icons" />
            {likes}
          </span>
        </div>
      </section>
      <section className="hero__container--left--para">
        <p>{description}</p>
      </section>
    </>
  );
}

export default VideoDetails;
