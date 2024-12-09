import React from 'react';
import '../styles/FeatureComponent.css';

const featuresData = [
  {
    id: 1,
    title: 'High Quality',
    description: 'crafted from top materials',
    imageId: '117:613',
  },
  {
    id: 2,
    title: 'Warranty Protection',
    description: 'Over 2 years',
    imageId: '117:621',
  },
  {
    id: 3,
    title: 'Free Shipping',
    description: 'Order over 150 $',
    imageId: '117:629',
  },
  {
    id: 4,
    title: '24 / 7 Support',
    description: 'Dedicated support',
    imageId: '117:635',
  },
];

const FeaturesComponent: React.FC = () => {
  return (
    <div className="features-container">
      {featuresData.map(feature => (
        <div key={feature.id} className="feature-item">
          <img src={`https://placeholder.pics/svg?${feature.imageId}`} alt={feature.title} width="60" height="60" />
          <div className="feature-text">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesComponent;

