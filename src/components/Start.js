import React from 'react';
import FacebookLogin from 'react-facebook-login';

function Start(props) {
  return (
    <div className="container-lrg flex">
      <div className="col-6 centervertical">
        <h1 className="heading">Play quiz to learn more about your other half!</h1>                      <h2 className="paragraph ">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
          dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
          imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
          augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        </h2>
        <div className="ctas">
          <FacebookLogin
              appId="1480241568671838"
              autoLoad={true}
              fields="name,picture"
              callback={props.loginCallback}
          />
        </div>
      </div>
      <div className="col-6 sidedevices">
        <div className="iphoneandroid">
          <div className="iphone">
            <div className="mask">
              <img className="mask-img" role="presentation" src="img/mobileapp.svg" />
            </div>
          </div>
          <div className="android">
            <div className="mask">
              <img className="mask-img" role="presentation" src="img/mobileapp.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Start.propTypes = {
  loginCallback: React.PropTypes.func.isRequired,
};

export default Start;
