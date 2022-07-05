import Iframe from "react-iframe";
const Test = () => {
    // let link = "https://www.youtube.com/watch?v=BVmJXTQE0Ss";
    let link = "https://fb.watch/d-Z3gTKz6H%2Fvideos%2F447142007208593";
    let src = "";
    if (link.includes("fb")) {
        src = "https://www.facebook.com/plugins/video.php?href=" + link;
    } else if (link.includes("youtube")) {
        src = link.replace("watch?v=", "embed/");
    } else {
        src = "node_upload_video_link";
    }
    return (
        <>
            <header className="App-header">
                <Iframe url={src} width="450px" height="300px" allow="fullscreen" />
            </header>
        </>
    );
}

export default Test;