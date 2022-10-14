// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showContent ? (
            <div className="left-container">
              <h1 className="left-head">Left Navbar Menu</h1>
              <ul className="left-un-list">
                <li className="left-list">Item 1</li>
                <li className="left-list">Item 2</li>
                <li className="left-list">Item 3</li>
                <li className="left-list">Item 4</li>
              </ul>
            </div>
          ) : null}

          <div className="content-container">
            <h1 className="left-head">Content</h1>
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim and minim veniam.
            </p>
          </div>
          <div className="right-navbar">
            <h1 className="left-head">Right Navbar</h1>
            <ul className="left-un-list">
              <li className="list-right">Ad 1</li>
              <li className="list-right">Ad 2</li>
            </ul>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
