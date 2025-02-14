import MainPage from '@pages/main-page'
import NotFoundPage from '@pages/not-found-page'

const routes = [
    {
        title: 'Главная страница',
        path: '/',
        element: <MainPage />
    },
    {
        title: 'Страница не найдена',
        path: null,
        element: <NotFoundPage />
    }
]

export default routes