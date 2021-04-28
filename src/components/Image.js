import React, { useState, useEffect, useContext } from 'react'
import { useAuth } from '../utilities/AuthContext'
import AppContext from '../utilities/AppContext'
import { axiosHelper } from '../utilities/axiosHelper'

function Image() {
    const { age, fRun } = useContext(AppContext)
    const [imageData, setImageData] = useState({})

    const { token } = useAuth()

    axiosHelper({token, url:'/api/image/5'})


    // const axiosGet = () => {
    //     let apiURL = 'https://api.unsplash.com'
    //     axios.get(apiURL + '/photos/random' + '?client_id=s-ihGkE3Wtg_30pAYsn_k1RCksNGgTSm1BCQrael6C8')
    //         .then(function (response) {
    //             // handle success
    //             setImageData(response.data)
    //             fRun()
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    // }

    // useEffect(axiosGet, [])

    return (
        <div className='row'>
            <div className='col'>
                {(Object.keys(imageData).length > 0)
                    ? <img className='image-fluid' src={imageData.urls.small} />
                    : <div>image loading</div>
                }
            </div>
            Ians Age is: {age}
        </div>
    )
}

export default Image
