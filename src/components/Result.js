import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const shareUrl = 'https://ladymarry.com';
const title = 'LadyMarry';

function Result(props) {
  return (
    <ReactCSSTransitionGroup
      className="container result"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
    >
      <div>
        <p>
          You prefer <strong>{props.quizResult}</strong>!
        </p>
        <p>
          Sharing your quiz result with friends!
        </p>
        <div className="fb-share-button" data-href={shareUrl}
             data-layout="box_count" data-size="small" data-mobile-iframe="true">
          <a className="fb-xfbml-parse-ignore" target="_blank"
             href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fladymarry.com%2F&amp;src=sdkpreparse">Share
          </a>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
