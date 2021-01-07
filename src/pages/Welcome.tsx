import { Alert, Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useIntl } from 'umi';
import React from 'react';

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
