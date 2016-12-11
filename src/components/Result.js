import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
} = ShareCounts;

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

        <div className="share-container">
          <div className="share">
            <FacebookShareButton
                url={shareUrl}
                title={title}
                className="share-button">
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <FacebookShareCount
                url={shareUrl}
                className="share-count">
              {count => count}
            </FacebookShareCount>
          </div>

          <div className="share">
            <div>
              <TwitterShareButton
                  url={shareUrl}
                  title={title}
                  className="share-button">
                <TwitterIcon
                    size={32}
                    round />
              </TwitterShareButton>
              <div className="share-count">
                &nbsp;
              </div>
            </div>
          </div>

          <div className="share">
            <div>
              <GooglePlusShareButton
                  url={shareUrl}
                  title={title}
                  className="share-button">
                <GooglePlusIcon
                    size={32}
                    round />
              </GooglePlusShareButton>
              <GooglePlusShareCount
                  url={shareUrl}
                  className="share-count">
                {count => count}
              </GooglePlusShareCount>
            </div>
          </div>

          <div className="share">
            <div>
              <LinkedinShareButton
                  url={shareUrl}
                  title={title}
                  className="share-button">
                <LinkedinIcon
                    size={32}
                    round />
              </LinkedinShareButton>
              <LinkedinShareCount
                  url={shareUrl}
                  className="share-count">
                {count => count}
              </LinkedinShareCount>
            </div>
          </div>

          <div className="share">
            <div>
              <PinterestShareButton
                  url={shareUrl}
                  title={title}
                  className="share-button">
                <PinterestIcon
                    size={32}
                    round />
              </PinterestShareButton>
              <PinterestShareCount
                  url={shareUrl}
                  className="share-count">
                {count => count}
              </PinterestShareCount>
            </div>

          </div>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
