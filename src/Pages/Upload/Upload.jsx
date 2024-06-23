import "./upload.scss";
import UploadImg from "../../assets/Images/Upload-video-preview.jpg";
import Publish from "../../assets/Icons/publish.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Upload() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [addDescription, setAddDescription] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!title.trim() || !addDescription.trim()) {
      alert("Please fill in both the title and description fields.");
      return;
    }

    const uploadVideo = {
      title: title,
      channel: addDescription
    };

    try {
      await axios.post("https://brainflix-backend-bvod.onrender.com/videos", uploadVideo);
      alert("Video uploaded successfully");
      navigate("/");
    } catch (error) {
      console.log("Error uploading video:", error);
    }
  };

  return (
    <main className="upload">
      <h1 className="upload__header">Upload Video</h1>
      <section className="inner-load">
        <form className="form" onSubmit={handleUpload}>
          <div className="form-one">
            <div className="form-left">
              <p className="form-left__description">VIDEO THUMBNAIL</p>
              <div className="form-left-img-wrapper">
                <img
                  className="form-left__img"
                  src={UploadImg}
                  alt="upload-view"
                />
              </div>
            </div>
            <div className="form-right">
              <label htmlFor="title" className="form__label">
                TITLE YOUR VIDEO
              </label>
              <input
                className="form__input"
                name="title"
                placeholder="Add a title to your video"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <label htmlFor="description" className="form__label">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="form__text-area"
                name="description"
                placeholder="Add a description of your video"
                value={addDescription}
                onChange={(e) => setAddDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="btns">
            <button
              className="btns__publish"
              type="submit"
            
            >
              <img src={Publish} alt="publish_icon" />
              PUBLISH
            </button>
            <Link to="/">
              <button className="btns__cancel">CANCEL</button>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Upload;



