import {
    Route,
    Routes,
} from "react-router-dom";
import HomePageAdmin from "../../components/Admin/HomePageAdmin";

const IndexAdmin = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<HomePageAdmin />} />
            </Routes>
        </>
    );
}

export default IndexAdmin;