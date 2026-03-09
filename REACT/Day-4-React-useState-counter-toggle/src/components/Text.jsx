import { useState } from "react"

const ShowName = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <>
            <h1>Hide and Unhide the Name</h1>
            <button onClick={handleClick}>{ show ? "Hide" : "Unhide"}</button>
            {
                show && (
                    <>
                    <h1>Light Yagami</h1>
                    </>
                )
            }
            <h1>Change Name</h1>

            <button onClick={handleClick}>{show ? "Protagonist" : "Antagonist"}</button>
            {
                show ? (
                    <h1>Light Yagami</h1>
                ) : (
                    <h1>L Lawliet</h1>
                )
            }
        </>
    )
}

export default ShowName;