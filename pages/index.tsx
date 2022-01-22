import { Image, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import style from '../styles/Home.module.css';
import { getLayout } from '../util/getLayout';

const avatarSize = 64;

const Home = () => {
  return (
    <Typography>
      <Title level={3}>
        <Avatar
          size={avatarSize}
          src={
            <Image
              src="./me_avatar.png"
              style={{ width: avatarSize }}
              alt={'pic of me'}
            />
          }
        />
        <span className={style.intro}>Hi, I'm Chase!</span>
      </Title>
      <Paragraph>
        Welcome to my About Me site. Here you can find out about my professional
        interests, skills, and even take a look at some of my GitHub projects
        (even though there aren't many).
      </Paragraph>
    </Typography>
  );
};

Home.getLayout = getLayout;

export default Home;
