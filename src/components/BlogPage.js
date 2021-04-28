import React from 'react'
import blogData from './blogData.json'
import { useAuth } from '../utilities/AuthContext'
import { mapOverParagraphs } from '../utilities/maps'

import { useParams, useHistory, useLocation } from 'react-router-dom'

function BlogPage({ children }) {

  const { token } = useAuth()

  let { pageNum } = useParams();

  let history = useHistory();

  const onClick = () => {
    console.log({ history })
    history.push('/')
  }


  return (
    <>
      <div className='row'>
        <div className='col'>
          {
            pageNum < blogData.length ?
              <>
                <h1>{blogData[pageNum].title}</h1>
                <div>
                  <p>
                    {mapOverParagraphs(blogData[pageNum].body)}

                  </p>
                </div>
              </>
              :
              "that blog page was not found"}
          {children}
        </div>
      </div>
      <div className='row'>
        <div onClick={onClick}>return to home</div>
      </div>
    </>
  )
}

export default BlogPage
