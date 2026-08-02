import Headerpart from '../Components/Headerpart'
import Review from '../Components/Review'
import Brandcollab from '../Components/Brandcollab'
import Popular from '../Components/Popular'

function Home() {
  return (
    <div>
      <Headerpart />
      <Brandcollab />
      <Popular />
      <Review />
    </div>
  )
}
export default Home