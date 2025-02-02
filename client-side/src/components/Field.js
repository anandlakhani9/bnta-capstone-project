import { React, useState, useEffect } from 'react'
import field from '../assets/pitch.png'

function Field({ pitch }) {

    // const [players, setPlayers] = useState([]);

    // useEffect(()=>{

    //     const pitch = {
    //         FWD: [null,null], 
    //         MID: [null, null, null, null, null], 
    //         DEF: [null,null,null, null], 
    //         GK:  [null],
    //         Clubs: [],
    //         Leagues: [],
    //     }

    // },[])

    //console.log(pitch)


    return (

        <div>
            <img src={field} />
            {Object.entries(pitch.position)
                .map(
                    ([pos, val], i) =>
                    <div key={i}
                        style={{ display: "flex", justifyContent: "space-between", height: "120px", marginTop: "7em", width: "25%", position: "relative", top: 0, alignItems: "center", margin: "0 auto" }}
                    >
                        {
                            pitch.position[pos]
                                .map(
                                    (player, i) =>
                                        <p key={i} style={{ width: "100%", textAlign: "center", position: "relative", bottom: "500px" }}>
                                            {pos}: {player ? player.name : "add"}
                                        </p>
                                )
                        }
                    </div>
                )}
        </div>

    )


}

export default Field
