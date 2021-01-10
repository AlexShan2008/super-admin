import LineCharts from '@/components/line-chart';
import PieChart from '@/components/pie-chart';
import React from 'react';
import style from './index.less';

const Dashboard: React.FC = () => {
  return (
    <div className={style.main}>
      <LineCharts />
      <PieChart />
    </div>
  );
};
export default Dashboard;
