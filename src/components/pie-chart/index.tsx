import style from './index.less';

import { OPTION } from './option';
import React, { useEffect, useRef } from 'react';

const echarts = require('echarts');

const PieCharts: React.FC = () => {
  const myChart = useRef(null);

  useEffect(() => {
    const chart = echarts.init(myChart.current);
    chart.setOption(OPTION);
  }, [OPTION]);

  return (
    <div className={style.root}>
      <div
        ref={myChart}
        style={{
          width: '100%',
          height: '100%',
        }}
      ></div>
    </div>
  );
};

export default PieCharts;
