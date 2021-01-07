import PieChart from '@/components/PieChart';
import React from 'react';
import TrendingChart from '@/components/TrendingChart';
import style from './index.less';

const Dashboard: React.FC = () => {
  return (
    <div className={style.main}>
      <TrendingChart />
      <PieChart />
    </div>
  );
};
export default Dashboard;
