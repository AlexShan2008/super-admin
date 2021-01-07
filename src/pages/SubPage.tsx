import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <h3>Sub Page</h3>
        <article>This is a sub page of Welcome page.</article>
      </Card>
    </PageContainer>
  );
};
