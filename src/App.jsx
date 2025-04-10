import { createBrowserRouter, RouterProvider } from "react-router";
import Notes from "./pages/Notes";
import notesLoader from "./loaders/unit/notesLoader";
import Note from "./pages/Note";
import noteLoader from "./loaders/unit/noteLoader";
import New from "./pages/New";
import Edit from "./pages/Edit";

const routes = [
    {
        path: "/",
        element: <Notes />,
        loader: notesLoader,
        hydrateFallbackElement: <div>Loading...</div>,
    },
    {
        path: "/note",
        element: <Note />,
        loader: noteLoader,
        hydrateFallbackElement: <div>Loading...</div>,
    },
    {
        path: "/new",
        element: <New />
    },
    {
        path: "/edit",
        element: <Edit />,
        loader: noteLoader,
        hydrateFallbackElement: <div>Loading...</div>,
    }
];

const router = createBrowserRouter(routes, {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    }
});

const App = () => {
    return <RouterProvider
        router={router}
        future={{
            v7_startTransition: true,
        }}
    />
}

export default App;