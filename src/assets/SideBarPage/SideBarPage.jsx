import "./SideBarPage.css"

function SideBarPage({weeks}) {
  const weeksList = weeks.map(week=> <a href={"/"+week} key={week}>{week}</a>)
  return <nav className="nav">
    <a href="/" className="site-title" key='title'>Polish Pickem</a>
    {weeksList}
  </nav>
}

export default SideBarPage