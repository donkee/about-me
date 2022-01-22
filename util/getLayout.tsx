import {
  GithubOutlined,
  HomeOutlined,
  MehOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import Text from 'antd/lib/typography/Text';
import Link from 'next/link';
import { ReactElement } from 'react';
import style from '../styles/getLayout.module.css';

export const getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <Header>
        <Avatar icon={<MehOutlined />} className={style.logo} />
        <Text className={style.headername}>Chase Steenbock</Text>
      </Header>
      <Layout>
        <Sider>
          <Menu mode="vertical">
            <Menu.Item key={'home'}>
              <Link href="/">
                <div>
                  <HomeOutlined className={style.menuicon} />
                  Home
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key={'about'}>
              <Link href="/about">
                <div>
                  <UserOutlined className={style.menuicon} />
                  About Me
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key={'github'}>
              <a href="https://github.com/donkeedong" target={'_blank'}>
                <GithubOutlined className={style.menuicon} />
                My GitHub
              </a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>{page}</Content>
      </Layout>
    </Layout>
  );
};
