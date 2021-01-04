import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert } from 'antd';
import { useIntl } from 'umi';

type WelcomeProps = {
  children?: React.ReactElement | undefined | null;
};

export default (props: WelcomeProps): React.ReactNode => {
  const intl = useIntl();
  const { children } = props;

  return (
    <PageContainer>
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Super Admin is coming soon。',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
      </Card>
      {children}
    </PageContainer>
  );
};
