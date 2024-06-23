import "./comments.scss";
import Addcomments from "../../assets/Icons/add_comment.svg";

const CommentAdd = ({
  comments,
  convertDateformat,
  onSubmit,
  newcomments,
  setNewComments,
}) => {
  const handlechangeComment = (e) => {
    setNewComments(e.target.value);
  };

  return (
    <>
      <section className="comments">
        <h5>{comments?.length} Comments</h5>
        <article className="comments__from">
          <div className="comments__from--convo">
            <div className="comments__from--convo--join">
              <div className="comments__from--avatar"></div>
              <div className="comments__from--convo--join--pic">
                <p>JOIN THE CONVERSATION</p>
                <div className="comments__from--convo--join--pic--submit">
                  <div className="comments__from--convo--join--pic--submit--add">
                    <input
                      type="text"
                      placeholder="Add a new comment"
                      value={newcomments}
                      onChange={handlechangeComment}
                      className="comments__from--convo--join--pic--submit--inputs"
                    ></input>
                  </div>
                  <div
                    className="comments__from--convo--join--btn"
                    onClick={onSubmit}
                  >
                    <img src={Addcomments} alt="add_icons" />
                    comment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {comments?.map((comment, index) => {
        return (
          <section className="newcomments" key={index}>
            <div className="newcomments__pic"></div>
            <div className="newcomments__contents">
              <div className="newcomments__contents--namedate">
                <h5 className="newcomments__contents--namedate--author">
                  {comment.name}
                </h5>
                <p className="newcomments__contents--namedate--date">
                  {convertDateformat(comment.timestamp)}
                </p>
              </div>

              <p className="newcomments__contents--namedate--text">
                {comment.comment}
              </p>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default CommentAdd;
