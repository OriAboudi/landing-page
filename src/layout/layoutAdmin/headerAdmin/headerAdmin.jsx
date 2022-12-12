import React from 'react'
import { Link } from 'react-router-dom'
function HeaderAdmin() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link></Link>
          <Link className="navbar-brand" to={'/admin'}>Admin</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to={'/page1'}>Page1</Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={'/page2'}>Page2</Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={'/page3'}>Page3</Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={'/'}>Back Home</Link>

              </li>
       
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeaderAdmin