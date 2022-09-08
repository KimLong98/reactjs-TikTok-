import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '~/pages/Home'
import Following from '~/pages/Following'

function App() {
    return (

        <Router>
            <div className="App">
                <Routes>
                    <Router path="/Home" element={<Home />} />
                    <Router path="/Following" element={<Following />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
