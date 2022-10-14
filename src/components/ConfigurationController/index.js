// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }

      return (
        <div className="configuration-container">
          <h1 className="head">Layout</h1>

          <ul className="un-order-list">
            <li className="list-item">
              <input
                type="checkbox"
                id="content"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="content" className="label-style">
                Content
              </label>
            </li>
            <li className="list-item">
              <input
                type="checkbox"
                id="leftNavbar"
                checked={showLeftNavbar}
                onChange={onToggleShowLeftNavbar}
              />
              <label htmlFor="leftNavbar" className="label-style">
                Left Navbar
              </label>
            </li>
            <li className="list-item">
              <input
                type="checkbox"
                id="rightNavbar"
                checked={showRightNavbar}
                onChange={onToggleShowRightNavbar}
              />
              <label htmlFor="rightNavbar" className="label-style">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
