import { Card, Col, Divider, Image, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import { getLayout } from '../util/getLayout';

const About = () => {
  return (
    <>
      <Title level={2}>Below you will find my skills and interests.</Title>
      <Divider orientation="left">Languages and Frameworks</Divider>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col>
          <Card
            title={'Typescript'}
            extra={
              <a
                href={'https://www.typescriptlang.org/'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <Image
                  src={'./ts-logo-128.svg'}
                  height={32}
                  preview={false}
                  alt={'Typescript'}
                />
              </a>
            }
            style={{ width: 300, height: 250 }}
          >
            I love Typescript for its Javascript-but-with-types personality. It
            has better error checking and lots of helper functions built-in.
            It's my go-to for project development (including this site!).
          </Card>
        </Col>
        <Col>
          <Card
            title={'React'}
            extra={
              <a
                href={'https://reactjs.org/'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <Image
                  src={'./react-logo.svg'}
                  height={32}
                  preview={false}
                  alt={'React JS'}
                />
              </a>
            }
            style={{ width: 300, height: 250 }}
          >
            React is super fun and intuitive once you "get it". The virtual DOM
            is performant and seamless to the end user. There are so many
            resources for it that it's a breeze to work with.
          </Card>
        </Col>
        <Col>
          <Card
            title={'Java'}
            extra={
              <a href={'https://dev.java'} target={'_blank'} rel={'noreferrer'}>
                <Image
                  src={
                    'https://dev.java/assets/images/java-affinity-logo-icode-lg.png'
                  }
                  height={32}
                  preview={false}
                  alt={'Java'}
                />
              </a>
            }
            style={{ width: 300, height: 250 }}
          >
            Since Java is so widely used, there are tons of resources available
            for it. Modern Java is great to work with and robust.
          </Card>
        </Col>
        <Col>
          <Card
            title={'Spring'}
            extra={
              <a
                href={'https://spring.io/'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <Image
                  src={
                    'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg'
                  }
                  height={32}
                  preview={false}
                  alt={'Spring Framework'}
                />
              </a>
            }
            style={{ width: 300, height: 250 }}
          >
            Spring makes Java more usable. It has great features included and is
            super simple to get up and running.
          </Card>
        </Col>
      </Row>
      <Divider orientation="left">Professional Skills</Divider>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col>
          <Card
            title={'Lean UX'}
            extra={
              <a
                href={
                  'https://www.oreilly.com/library/view/lean-ux/9781449366834/'
                }
                target={'_blank'}
                rel={'noreferrer'}
              >
                <Image
                  src={'./UX.svg'}
                  height={32}
                  preview={false}
                  alt={'Lean UX'}
                />
              </a>
            }
            style={{ width: 300, height: 250 }}
          >
            I love Typescript for its Javascript-but-with-types personality. It
            has better error checking and lots of helper functions built-in.
            It's my go-to for project development (including this site!).
          </Card>
        </Col>
        <Col>
          <Card
            title={'React'}
            extra={
              <a
                href={'https://reactjs.org/'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <Image
                  src={'./react-logo.svg'}
                  height={32}
                  preview={false}
                  alt={'React JS'}
                />
              </a>
            }
            style={{ width: 300, height: 250 }}
          >
            React is super fun and intuitive once you "get it". The virtual DOM
            is performant and seamless to the end user. There are so many
            resources for it that it's a breeze to work with.
          </Card>
        </Col>
        <Col>
          <Card
            title={'Java'}
            extra={
              <a href={'https://dev.java'} target={'_blank'} rel={'noreferrer'}>
                <Image
                  src={
                    'https://dev.java/assets/images/java-affinity-logo-icode-lg.png'
                  }
                  height={32}
                  preview={false}
                  alt={'Java'}
                />
              </a>
            }
            style={{ width: 300, height: 250 }}
          >
            Since Java is so widely used, there are tons of resources available
            for it. Modern Java is great to work with and robust.
          </Card>
        </Col>
        <Col>
          <Card
            title={'Spring'}
            extra={
              <a
                href={'https://spring.io/'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <Image
                  src={
                    'https://spring.io/images/projects/spring-edf462fec682b9d48cf628eaf9e19521.svg'
                  }
                  height={32}
                  preview={false}
                  alt={'Spring Framework'}
                />
              </a>
            }
            style={{ width: 300, height: 250 }}
          >
            Spring makes Java more usable. It has great features included and is
            super simple to get up and running.
          </Card>
        </Col>
      </Row>
    </>
  );
};

About.getLayout = getLayout;

export default About;
