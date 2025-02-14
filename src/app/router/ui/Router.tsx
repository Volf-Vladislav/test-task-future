import { BrowserRouter, Routes, Route } from "react-router"

import routes from "../config/routes"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((page, index) =>
                    page.path === null
                        ? <Route key={index} path="*" element={page.element} /> 
                        : <Route key={index} path={page.path} element={page.element} />
                )}
            </Routes>
        </BrowserRouter>
    )
}

export default Router
