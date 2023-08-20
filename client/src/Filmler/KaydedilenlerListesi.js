import React from 'react';
import {useHistory} from 'react-router-dom';

export default function KaydedilenlerListesi(props) {

  const history = useHistory();

  const MainPage = () => {
    history.push("/");
  } 

  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {
        Array.isArray(props.list) ?
          props.list.map(movie => (
            <span className="saved-movie">{movie}</span>
          ))
          :
          (<span className="saved-movie">{props.list[0]}</span>)
        }
      <div className="home-button" onClick={() => MainPage()}>Anasayfa</div>
    </div>
  );
}
