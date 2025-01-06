import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const App: FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default App;