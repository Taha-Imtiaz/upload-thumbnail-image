import React, { useRef } from 'react'

const VideothumbNail = () => {
    // let videoSrc = document.querySelector("#video-source");
    // let videoTag = document.querySelector("#video-tag");
    // let inputTag = document.querySelector("#input-tag");
    const videoSrcRef = useRef(null);
    const videoTagRef = useRef(null);
    const inputTagRef = useRef(null);
    console.log(videoSrcRef,videoTagRef,inputTagRef )
    // load video

    const loadVideo = (e) => {

        console.log('loaded',videoSrcRef)
        
        videoSrcRef.current.src = e.target.result
        console.log( videoSrcRef.current)

        videoTagRef.current.load()
    }

    // function defined to read a video
    const readVideo = (e) => {
        // read only first file at 0 index
        console.log(e.target.files[0])
        if(e.target.files[0]) {
            // reads a file which is selected
            let reader = new FileReader();

            // check file type
            var blob = e.target.files[0]; // See step 1 above
            console.log(blob.type)

            // load a file which was read in previous step 
            reader.onload = function(e) {
                loadVideo(e)
            }
        // The readAsDataURL method is used to read the contents of the specified File. 
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    return (
        <div>
            {/* button for uploading video */}
            <input type="file" ref = {inputTagRef} onChange = {(e) => readVideo(e)} accept="video/*" id="input-tag"></input>
            <video controls id="video-tag" ref = {videoTagRef}>
                <source id="video-source" ref = {videoSrcRef} src="splashVideo" />
                    Your browser does not support the video tag.
                </video>
        </div>
    )
}

export default VideothumbNail
