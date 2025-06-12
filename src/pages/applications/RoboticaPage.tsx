
import React from 'react';
import RoboticsHero from '@/components/robotics/RoboticsHero';
import RoboticsChallenge from '@/components/robotics/RoboticsChallenge';
import RoboticsSolutions from '@/components/robotics/RoboticsSolutions';
import RoboticsArchitecture from '@/components/robotics/RoboticsArchitecture';
import RoboticsComponents from '@/components/robotics/RoboticsComponents';
import RoboticsUseCases from '@/components/robotics/RoboticsUseCases';
import RoboticsSpecs from '@/components/robotics/RoboticsSpecs';
import RoboticsFAQ from '@/components/robotics/RoboticsFAQ';
import RoboticsCTA from '@/components/robotics/RoboticsCTA';

const RoboticaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <RoboticsHero />
      <RoboticsChallenge />
      <RoboticsSolutions />
      <RoboticsArchitecture />
      <RoboticsComponents />
      <RoboticsUseCases />
      <RoboticsSpecs />
      <RoboticsFAQ />
      <RoboticsCTA />
    </div>
  );
};

export default RoboticaPage;
