import React from 'react';
import user from './../user.png';
const FeedBox = (props) => {

  return (
    <div className="feedBox">
      <div className='feedBox__status'>
        <img className='user__img' src={user} alt="user" />
        <p>Joan Albert Segura</p>
        <p className='feed__box-grey-14'>@jalbertsr</p>
        <p className='feed__box-grey-14'>3 hours ago</p>
      </div>
      <div className='feedBox__Content'>
        {props.content}
      </div>
      <div className='feedBox__options'>
        <span className='feedBox__ctas'>⬅️</span>
        <span className='feedBox__ctas'>🔁</span>
        <span className='feedBox__ctas'>⭐</span>
      </div>
    </div>
  );
}

export default FeedBox