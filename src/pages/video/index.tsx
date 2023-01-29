import React from 'react';

import { pageConfig } from '../../utils';

import { VideComponent } from './style';

//improve code

const VideoPage = (): JSX.Element => {
  return (
    <VideComponent loop autoPlay>
      <source src={pageConfig.bgVideoUrl} type="video/mp4" />
    </VideComponent>
  );
};

export default VideoPage;
