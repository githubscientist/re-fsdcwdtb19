import { createBrowserRouter, RouterProvider } from "react-router";
import Notes, { notesLoader } from "./pages/Notes";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Notes />,
        loader: notesLoader,
        hydrateFallbackElement: <div>Loading...</div>,
    }
], {
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
    />;
}

export default App;