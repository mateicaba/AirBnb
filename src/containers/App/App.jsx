import Login from "../Login";
import Root from "../Root";

function App() {

    const isAuthenticated = false;
    const isLoading = false;

    if(isLoading) {
        return 'Loading...';
    }

    if(!isAuthenticated) {
        return <Login />;
    }
    else {
        return <Root />
    }
}

export default App;