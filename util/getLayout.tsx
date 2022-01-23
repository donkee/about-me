import { GithubOutlined, HomeTwoTone, MehTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import Text from 'antd/lib/typography/Text';
import Link from 'next/link';
import React, { ReactElement, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import style from '../styles/getLayout.module.css';

export const getLayout = (page: ReactElement) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const [isCollapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (isTabletOrMobile) {
      setCollapsed(true);
    }
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Avatar
          icon={<MehTwoTone twoToneColor="#52c41a" />}
          className={style.logo}
        />
        <Text className={style.headername}>Chase Steenbock</Text>
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={isCollapsed}
          onCollapse={() => setCollapsed(!isCollapsed)}
        >
          <Menu mode="inline" defaultSelectedKeys={['home']}>
            <Menu.Item
              key={'home'}
              icon={
                <HomeTwoTone
                  style={{
                    marginRight: isCollapsed ? 8 : undefined
                  }}
                />
              }
              style={{ paddingLeft: isCollapsed ? 32 : undefined }}
            >
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item
              key={'about'}
              icon={
                <MehTwoTone
                  twoToneColor="#52c41a"
                  style={{
                    marginRight: isCollapsed ? 8 : undefined
                  }}
                />
              }
              style={{ paddingLeft: isCollapsed ? 32 : undefined }}
            >
              <Link href="/about">About Me</Link>
            </Menu.Item>
            <Menu.Item
              key={'github'}
              icon={
                <GithubOutlined
                  style={{
                    marginRight: isCollapsed ? 8 : undefined
                  }}
                />
              }
              style={{ paddingLeft: isCollapsed ? 32 : undefined }}
            >
              <a href="https://github.com/donkeedong" target={'_blank'}>
                My GitHub
              </a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={style.internalcontent}>
          <Content>{page}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
