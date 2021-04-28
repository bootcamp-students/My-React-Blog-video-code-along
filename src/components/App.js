import React, { useState, useEffect, useReducer } from 'react';
import Header from './Header'
import Image from './Image'
import BlogPage from './BlogPage';
import Child from './Child';
import Signup from './SignupPage';
import BD from './blogData.json'

import { AuthProvider } from '../utilities/AuthContext'

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'


import { reducer, initialState } from '../utilities/reducer'
import { actionReset, actionUp } from '../utilities/actions'



function App() {

  let pages = [
    { readableName: 'Home', url: 'home' },
    { readableName: 'About Me', url: 'about-me' },
    { readableName: 'Blog', url: 'blog' },
    { readableName: 'Images', url: 'images' },
    { readableName: 'Links', url: 'links' }
  ];

  const [currentPage, setCurrentPage] = useState(0)

  // component did update
  const setPage = (newPageNum) => {
    setCurrentPage(newPageNum)
    window.localStorage.setItem('currentPage', JSON.stringify(newPageNum))
  }

  useEffect(() => {
    let lSpage = window.localStorage.getItem('currentPage')
    if (lSpage !== currentPage) {
      setCurrentPage(JSON.parse(lSpage))
    }
  }, [currentPage])

  return (
    <div className="App container" >
      <AuthProvider>
        <Router>
          <Header
            pages={pages}
            currentPage={currentPage}
            setPage={setPage}
          />
          {
            BD ? BD.map(
              (b, i) => {
                return (
                  <>
                    <Link to={`/week/${i}`}>
                      Week {i + 1}
                    </Link>
                    {i < BD.length - 1 && ' - '}
                  </>)
              })
              : "loading"
          }

          <Switch>

            <Route exact path="/">
              <SimpleComponent />
            </Route>
            <Route path="/image">
              <Image />
            </Route>
            <Route path={`/week/:pageNum`}>
              <BlogPage />
            </Route>
            <Route path='/deepComponent'>
              <Child />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )

}

const SimpleComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <h1 onClick={() => dispatch(actionUp)}>Simple Home Page</h1>


  )
}

export default App;
