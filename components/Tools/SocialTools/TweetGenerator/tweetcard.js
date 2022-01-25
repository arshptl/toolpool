import styled from "styled-components";
import DP from "../../../../public/assets/dp.jpeg";
import Image from "next/image";
import TestImg1 from "../../../../public/assets/posters/posterToolpool.jpg";
import TestImg2 from "../../../../public/assets/posters/posterWhitespace.jpg";
import TestImg3 from "../../../../public/assets/posters/posterLoremipsum.jpg";
import TestImg4 from "../../../../public/assets/posters/posterLettercounter.jpg";

const MainCard = styled.div`
  display: flex;
  width: 600px;
  height: max-content;
  margin: auto;
  background-color: ${({ theme }) => theme.background};

  border: 1px solid var(--fontdesc-dark);
  border-radius: 5px;
  padding: 1rem;
`;

const DPDiv = styled.div`
  border-radius: 50%;
  height: 100%;
`;

const ProfileImage = styled.div`
  height: 48px;
  width: 48px;

  .avatar {
    border-radius: 50%;
  }
`;

const TweetSection = styled.div`
  width: 518px;
  height: max-content;
  ${({ theme }) => theme.mixins.flexColumnStart};
  justify-content: flex-start;
  font-size: 15px;
  margin-left: 1rem;
`;

const UserDetails = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexBetween};
  font-size: 15px;
  line-height: 20px;

  .details {
    ${({ theme }) => theme.mixins.flexStart};
    height: 20px;
  }

  .name {
    font-weight: 700;
  }

  .username {
    color: grey;
    margin-left: 5px;
  }

  .verified {
    margin-left: 5px;
    margin-top: 5px;
  }

  .date {
    color: grey;
    margin-left: 5px;
  }
  .options {
    color: grey;
  }
`;
const TweetText = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexStart};

  .highlight {
    color: #46adf4;
  }

  .hash {
    color: #46adf4;
  }

  .url {
    color: #46adf4;
  }
`;
const TweetImages = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 1px solid grey;
  height: 290px;
  display: block;
  /*grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-auto-flow: dense;*/
`;

const Reach = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexEven};
  margin-top: 15px;

  .action {
    display: flex;
    width: 100%;
  }
  .count {
    margin-left: 10px;
    color: grey;
  }
`;

const ReachComponent = ({ svg, count }) => {
  return (
    <div className="action">
      <div>{svg}</div>
      <span className="count">{count}</span>
    </div>
  );
};

const FormattedTweetText = ({ text }) => {
  return (
    <div style={{ width: "100%" }}>
      {text.split(" ").map((item, index) => {
        if (item.includes("@") || item.includes("#") || item.includes("http")) {
          return (
            <span className="highlight" key={index}>
              {item + " "}
            </span>
          );
        } else {
          return item + " ";
        }
      })}
    </div>
  );
};

function ImageGridItem({ path, alt, hfr, wfr }) {
  const style = {
    // gridColumnStart: `${alt + 1}`,
    // gridColumnEnd: `span ${wfr}`,
    // gridRowStart: `${alt + 1}`,
    // gridRowEnd: `span ${hfr}`,
  };

  return (
    <div style={style}>
      <Image src={path} alt={alt} />
    </div>
  );
}

const TweetCard = () => {
  const imgList = [TestImg1, TestImg2, TestImg3, TestImg4];

  const VerifiedSVG = (
    <svg
      width="18.75"
      height="18.75"
      viewBox="0 0 24 24"
      aria-label="Verified account"
      fill="#46adf4"
    >
      <g>
        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
      </g>
    </svg>
  );
  const OptionsSVG = (
    <svg width="18.75" height="18.75" viewBox="0 0 24 24" fill="grey">
      <g>
        <circle cx="5" cy="12" r="2"></circle>
        <circle cx="12" cy="12" r="2"></circle>
        <circle cx="19" cy="12" r="2"></circle>
      </g>
    </svg>
  );

  const ReplySVG = (
    <svg width="18.75" height="18.75" viewBox="0 0 24 24" fill="grey">
      <g>
        <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
      </g>
    </svg>
  );

  const RetweetSVG = (
    <svg width="18.75" height="18.75" viewBox="0 0 24 24" fill="grey">
      <g>
        <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
      </g>
    </svg>
  );

  const LikeSVG = (
    <svg width="18.75" height="18.75" viewBox="0 0 24 24" fill="grey">
      <g>
        <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
      </g>
    </svg>
  );

  const UploadSVG = (
    <svg width="18.75" height="18.75" viewBox="0 0 24 24" fill="grey">
      <g>
        <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
        <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
      </g>
    </svg>
  );

  return (
    <MainCard>
      <DPDiv>
        <ProfileImage>
          <Image src={DP} alt="Profile Picture" className="avatar" />
        </ProfileImage>
      </DPDiv>
      <TweetSection>
        <UserDetails>
          <div className="details">
            <div className="name">John Doe</div>
            <div className="verified">{VerifiedSVG}</div>
            <div className="username">@johndoe · </div>
            <div className="date">10m</div>
          </div>
          <div className="options">{OptionsSVG}</div>
        </UserDetails>
        <TweetText>
          <FormattedTweetText
            text={
              " This is a sample tweet. @mentions, #hashtags, https://links.com are all automatically converted."
            }
          />
        </TweetText>
        {imgList.length !== 0 && (
          <TweetImages>
            {imgList.map((i, index) => {
              if ([1, 2, 4].includes(imgList.length)) {
                if (imgList.length === 1) {
                  return <ImageGridItem path={i} alt={index} hfr={2} wfr={2} />;
                } else if (imgList.length === 2) {
                  return <ImageGridItem path={i} alt={index} hfr={2} wfr={1} />;
                } else {
                  return <ImageGridItem path={i} alt={index} hfr={1} wfr={1} />;
                }
              }
            })}
          </TweetImages>
        )}
        <Reach>
          <ReachComponent svg={ReplySVG} count="50" />
          <ReachComponent svg={RetweetSVG} count="50" />
          <ReachComponent svg={LikeSVG} count="50" />
          <ReachComponent svg={UploadSVG} />
        </Reach>
      </TweetSection>
    </MainCard>
  );
};

export default TweetCard;

{
  /* <ImageGridItem path={TestImg2} alt={"i"} index={2} length={3} />
          <ImageGridItem path={TestImg2} alt={"i"} index={2} length={3} /> */
}
{
  /* <ImageGridItem path={TestImg2} alt={"i"} index={1} length={2} /> */
}
{
  /* <div className="col">
            <Image src={TestImg1} className="img" />
            {/* <Image src={TestImg1} className="img" /> 
          </div> */
}
{
  /* <div className="col">
            <Image src={TestImg3} className="img" />
            {/* <Image src={TestImg1} className="img" /> 
          </div> */
}
{
  /* <div className="wrapper">
            <Image src={TestImg1} className="img" />
          </div>
          <div className="wrapper">
            <Image src={TestImg1} className="img" />
          </div>
          <div className="wrapper">
            <Image src={TestImg1} className="img" />
          </div>
          <div className="wrapper">
            <Image src={TestImg1} className="img" />
          </div> */
}

{
  /* <Image src={TestImg2} />
          <Image src={TestImg3} />
          <Image src={TestImg4} /> */
}