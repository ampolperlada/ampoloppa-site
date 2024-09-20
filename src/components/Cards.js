import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Skills</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/css-3 (1).png'
              text='Esadasdas asgdhsag hdgas w7w sjdasjhd jksahd ahjdhasjkda'
              label='CSS'
              path='/'
            />
            <CardItem
              src='images/html-5.png'
              text='Traveldssada through the Islands of Bali in a Private Cruise'
              label='Javascript'
              path='/'
            />
                <CardItem
              src='images/js.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
         
            <CardItem
              src='images/physics.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/c-sharp.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
             <CardItem
              src='images/sql.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
              <CardItem
              src='images/bootstrap.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;