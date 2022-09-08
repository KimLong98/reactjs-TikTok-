import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '~/pages/Home'
import Folow from '~/pages/Following'

function App() {
    return (

        <Router>
            <div className="App">
                <Routes>
                    <Router path="/" element={<Home />} />
                    <Router path="/" element={<Folow />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
