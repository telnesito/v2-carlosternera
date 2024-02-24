'use client'
import React, { useState } from 'react';
import TitleSection from '../components/TitleSection';
import CardExperience from '../components/CardExperience';
import { EXPERIENCES } from '../const/constantes';
import Tabs from '../components/Tabs';
import ButtonTabs from '../components/ButtonTabs';

const Experiencies = () => {
  const [indexExperience, setIndexExperience] = useState(0);

  const saymyname = (newIndex) => {
    setIndexExperience(newIndex);
  };

  return (
    <section className='w-full flex flex-col items-center justify-center'>
      <div className='w-[700px]'>
        <TitleSection number={'01'} title={'Donde he trabajado'}></TitleSection>

        <div className='flex mt-5 gap-10 flex-row'>
          <div>
            <Tabs>
              {EXPERIENCES.map(({ company }, index) => (
                <ButtonTabs
                  key={index}
                  text={company}
                  onClick={() => saymyname(index)}
                  isActive={index === indexExperience}
                />
              ))}
            </Tabs>
          </div>
          <div>
            <CardExperience experience={EXPERIENCES[indexExperience]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencies;
