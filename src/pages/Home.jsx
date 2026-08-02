import Headerpart from '../Components/Headerpart'
import Review from '../Components/Review'
import Brandcollab from '../Components/Brandcollab'
import Popular from '../Components/Popular'
import Explore from '../Components/explore'
import Selling from '../Components/selling'

function Home() {
  return (
    <div>
      <Headerpart />
      <Brandcollab />
      <Popular />
      <Explore />
      <Selling />
      <Review />
    </div>
  )
}
export default Home