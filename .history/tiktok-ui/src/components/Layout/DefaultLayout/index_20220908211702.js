import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="conter"></div>
            </div>
        </div>
    );
}

export default DefaultLayout;
