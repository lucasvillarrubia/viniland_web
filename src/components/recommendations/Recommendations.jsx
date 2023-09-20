import React from 'react'
import { RecoCardsContainer } from './RecoStyles'
import RecoCard from './RecoCard'
import { HomeTitle, HomeSection } from '../../pages/home/HomeStyles'
import { useSelector } from 'react-redux';


const Recommendations = () => {
  const recommendations = useSelector(state => state.recommendations.recommendations);
  return (
    <HomeSection>
        <HomeTitle>PROMOS</HomeTitle>
        <RecoCardsContainer>
                {
                  recommendations.map((reco) => <RecoCard key={reco.id} {...reco} />)
                }
        </RecoCardsContainer>
    </HomeSection>
  )
}

export default Recommendations