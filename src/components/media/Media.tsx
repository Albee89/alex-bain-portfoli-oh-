import React from 'react';
import './media.css'; 

interface MediaProps {
}

const Media: React.FC<MediaProps> = ({}) => {
  return (
    <div id="#media">
      <div className="Media"></div>
      
      <div className="grow"></div>

      <button className="media-button">
        <a href="https://www.mediaweek.com.au/prime-video-australia-launches-nationwide-search-for-content-buff">Prime Video Buff Search</a></button>
      <br />
      <button className="media-button">
        <a href="https://www.news.com.au/entertainment/tv/amazon-prime-buff-announced-paid-40k-to-review-content/news-story/8b20cc2eff227c801f7d71d10d04b9d8">Amazon Prime Video Buff Announced</a>
      </button>
      <button className="media-button">
        <a href="https://www.mediaweek.com.au/alex-bain-settles-on-to-the-couch-as-the-first-prime-video-buff">Alex Bain Settles on the Couch</a>
      </button>
      <button className='media-button'>
      <a href="https://www.couriermail.com.au/news/queensland/sunshine-coast/community/alex-bain-wins-prime-video-buff-dream-job-to-help-osher-gunsberg-review-movies-over-summer/news-story/0d31cf96cfcee9f938f85e9b7e0a6739 ">Courier Mail - Alex Bain Wins Prme Video Buff</a>
      </button>
      <button className="media-button"><a href="https://nybreaking.com/amazon-prime-to-pay-woman-40k-to-watch-three-months-of-tv">Amazon Prime pays woman $40k to watch three months of tv</a></button>
      <br />
      <button className="media-button"><a href="https://www.theaureview.com/watch/interview-alex-bain">The AU Review Interview - Alex Bain</a></button>
      <br />
      <button className="media-button"><a href="https://nypost.com/2022/12/10/amazon-prime-buff-announced-paid-40k-to-review-content">NY Post- Amazon Prime Video Buff Announced</a></button>
      <br />
    </div>


  );
}

export default Media;
