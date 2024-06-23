import { useState, useEffect } from 'react';
import './Hero.scss';
import CommentAdd from '../../components/Comments/comments.jsx';
import NextVideo from '../../components/Nextvideo/NextVideo.jsx';
import VideoDetails from '../../components/VideoDetails/Videos.jsx';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const API_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com/videos';
const API_KEY = '4725f997-cd34-4f22-b477-8dd4804d79dd';

const Hero = ({ nextvideoDetails, setNextVideoDetails, videoData, setVideoData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);

  const convertDateformat = (Eledate) => {
    const timeStamp = new Date(Eledate);
    return timeStamp.toLocaleDateString("en-Us", {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const getVideoDetails = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/videos/${id}`);
      return res.data;
    } catch (error) {
      console.log('Error fetching video details:', error);
      return null;
    }
  };

  const getNextVideo = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/videos`);
      return res.data;
    } catch (error) {
      console.log('Error fetching next videos:', error);
      return [];
    }
  };

  

  const fetchVideoDetail = async (id) => {
    setLoading(true);
    try {
      const videoDetailData = await getVideoDetails(id);
      const videolist = videoData.filter(video => video.id !== id);
      videolist.push(videoDetailData);

      setNextVideoDetails(videoDetailData);
      setVideoData(videolist);
      
      
    } catch (error) {
      console.log('Error fetching video details:', error);
    } finally {
      setLoading(false);
    }
  };

  
  const initialFetch = async () => {
    setLoading(true);
    try {
      const nextVideo = await getNextVideo();
      console.log(nextVideo,"nextVideo")
      if (nextVideo.length) {
        const videoDetailsData = await getVideoDetails(nextVideo[0].id);
        const datafilter=nextVideo.filter(video => video.id !== nextVideo[0].id);
        datafilter.push(  videoDetailsData )
        
        setNextVideoDetails(videoDetailsData);
      setVideoData(datafilter);
        //setVideoData(nextVideo);
        console.log(nextVideo.filter(video => video.id !== nextVideo[0].id),"nexttt")
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (!videoData.length) {
      initialFetch();
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchVideoDetail(id);
    }
  }, [id]);

  const handleChangeData = async (idData) => {
    navigate(`/home/${idData}`);
  };

  const handleCommentPost = async () => {
    try {
      const postCommentData = {
        name: "Trudy Jankowski",
        comment: newComment,
      };

      const res = await axios.post(`${API_URL}/${nextvideoDetails.id}/comments?api_key=${API_KEY}`, postCommentData);
      if (res.status === 200) {
        const updatedVideoDetails = await getVideoDetails(nextvideoDetails.id);
        setNewComment('');
        if (updatedVideoDetails) {
          setNextVideoDetails(updatedVideoDetails);
        }
      }
    } catch (error) {
      console.log('Your comment failed to post:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="hero">
      <figure className="hero__img">
        <video controls poster={nextvideoDetails?.image}>
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </figure>
      <section className="hero__container">
        <article className="hero__container--left">
          <h1>{nextvideoDetails?.title}</h1>
          <VideoDetails
            channel={nextvideoDetails?.channel}
            timeStamp={nextvideoDetails?.timestamp}
            views={nextvideoDetails?.views}
            likes={nextvideoDetails?.likes}
            description={nextvideoDetails?.description}
            convertDateformat={convertDateformat}
          />
          <CommentAdd
            comments={nextvideoDetails?.comments}
            convertDateformat={convertDateformat}
            onSubmit={handleCommentPost}
            newcomments={newComment}
            setNewComments={setNewComment}
          />
        </article>

        <aside className="hero__container--right">
          <NextVideo
            id={nextvideoDetails?.id}
            filteredData={videoData}
            handleChangeData={handleChangeData}
          />
        </aside>
      </section>
    </main>
  );
};

export default Hero;
