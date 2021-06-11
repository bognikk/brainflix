import React from "react";

import "../NextVideo/NextVideo.scss";

class NextVideo extends React.Component {
  render() {
    console.log();
    return (
      // {this.props.selectedVideo.comments.map((comment) => {
      //       return (
      //         <div key={comment.id} className="post">
      //           <div className="post__img"></div>
      //           <div className="post__container">
      //             <div className="post__container__upper">
      //               <div className="post__name">{comment.name}</div>
      //               <div className="post__date">
      //                 {new Date(comment.timestamp).toLocaleDateString(
      //                   "en-US"
      //                 )}
      //               </div>
      //             </div>
      //             <div className="post__text">{comment.comment}</div>
      //           </div>
      //         </div>
      //       );
      //     })}

      <section className="next-video">
        <h2 className="next-video__heading">NEXT VIDEO</h2>
        <div className="next-video__container">
          {this.props.videos.map((video) => {
            return (
              <div className="next-video__video">
                <img
                  className="next-video__video__img"
                  next-video__video
                  src={video.image}
                  alt="next video img"
                />
                <div className="next-video__video__description">
                  <div className="next-video__video__title">{video.title}</div>
                  <div className="next-video__video__credits">
                    {video.channel}
                  </div>
                </div>
              </div>

              // <div key={comment.id} className="post">
              //   <div className="post__img"></div>
              //   <div className="post__container">
              //     <div className="post__container__upper">
              //       <div className="post__name">{comment.name}</div>
              //       <div className="post__date">
              //         {new Date(comment.timestamp).toLocaleDateString(
              //           "en-US"
              //         )}
              //       </div>
              //     </div>
              //     <div className="post__text">{comment.comment}</div>
              //   </div>
              // </div>
            );
          })}
        </div>
      </section>
    );
  }
}
export default NextVideo;
