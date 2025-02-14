import { BrowserRouter, Routes, Route } from 'react-router'

import routes from '../config/routes'
import ContentLayout from '../../layouts/content-layout'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((page, index) =>
                    page.path === null
                        ? <Route key={index} path='*' element={page.element} /> //404
                        : <Route key={index} path={page.path} element={<ContentLayout>{page.element} </ContentLayout>} />
                )}
            </Routes>
        </BrowserRouter>
    )
}

export default Router
