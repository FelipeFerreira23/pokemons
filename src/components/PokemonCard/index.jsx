import axios from "axios";
import { useEffect, useState } from "react";

import { Card, SizeStat, Type } from './styles';

export const PokemonCard = ({ data }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(data.url);
        return setDetails(response.data);
      } catch(err) {
        return err;
      }
    }
    fetchData();
  }, []);

 

  return (
    <>
    {details && 
    <Card>
      <div className="image">
      <img
        src={details.sprites.front_default}
      />
      </div>
      <h2>{details.name}</h2>

      <div className="types-list">
        {details.types.map(item => {
          return <Type key={item.type.name} color={item.type.name}>{item.type.name}</Type>
        })}
      </div>

      <div><h3>Habilidades:</h3>
        <div className="content-abilities">
          {details.abilities.map(item => {
            return (
              <span key={item.ability.name}>{item.ability.name}</span>
            )
          })}
        </div>
      </div>

      <div><h3>Estatísticas:</h3>
        {details.stats.map(item => {
          return (
            <div key={item.stat.name}>
              <div className="content-stats">
                <span>{item.stat.name}</span>
                <span>{item.base_stat}%</span>
              </div>

              <SizeStat size={item.base_stat}>
                <span></span>
              </SizeStat>
            </div>
          )
        })}
      </div>
    </Card>
    }
    </>
  );
};