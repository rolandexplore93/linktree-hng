import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import layouts from './layout';
import pages from './pages';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<layouts.Main />} />
                <Route path='/contact' element={<pages.ContactMe />} />

                <Route path='*' element={<pages.Error404 />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes