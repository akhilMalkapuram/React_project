import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">RA</p>
      <ul className="nav-menu">
        <li>
          <img
            className="social-network-img"
            src="https://png.pngtree.com/element_our/png/20180827/linkedin-social-media-icon-png_71812.jpg"
            alt="Linked In"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://res.cloudinary.com/dmwrugc6z/image/upload/v1621681890/Background_4x_1_bzyjew.png"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header