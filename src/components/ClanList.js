import React from 'react';
import Clan from './Clan';

const ClanList = ({ clans }) => {
  console.log(clans);

  return (
    <div>
      {
        clans.map((user, i) => {
          return (
            <Clan
              key={i}
              id={clans[i].id}
              name={clans[i].name}
              email={clans[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default ClanList;
