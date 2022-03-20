import React from 'react'

const CharacterItem = ({item}) => {
       return (

        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.img} 
            style={{
                 borderRadius: 40
          }}alt='' />
          </div>
          <div className='card-back'>
            <h2>{item.name}</h2>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ul>
              <li>
                <strong>Actor Name:</strong> {item.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {item.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {item.birthday}
              </li>
              <li>
                <strong>Occupation:</strong> {item.occupation}
              </li>
              <li>
                <strong>Status:</strong> {item.status}
              </li>
              <li>
                <strong>Appearance:</strong> {item.appearance}
              </li>
              <li>
                <strong>Portrayed:</strong> {item.portrayed}
              </li>
             </ul>
          </div>
        </div>
      </div>



       )
}

export default CharacterItem