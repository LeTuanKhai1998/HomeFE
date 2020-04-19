import servePath from "../utils/servePath";

function getImgUrl(val) {
    return servePath.serveImage + '/' + val
}
 
export default {
    getImgUrl
}