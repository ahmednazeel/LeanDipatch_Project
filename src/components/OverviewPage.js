import React from 'react'
import VideoSrc from "../videos/vid.mp4"
import HeroSection from '../comp-overviewPage/heroSection';
import Customizable from '../comp-overviewPage/customizable';
import FeatureSec from '../comp-overviewPage/features_Sec';
import CaseStudySec from '../comp-overviewPage/caseStudies_SEC';
import Price_Sec from '../comp-overviewPage/price_Sec';
import posterVideo from '../icons/playBtn.png'
const OverviewPage = () => {
  return (
    <div>
      <HeroSection>
        <video  controls  poster={posterVideo}>
          <source src={VideoSrc} type='video/mp4'/>
        </video>
      </HeroSection>
      {/* Sections of Page */}
      <Customizable />
      
      <FeatureSec />

      <CaseStudySec />
      <Price_Sec />
    </div>
  )
}

export default OverviewPage