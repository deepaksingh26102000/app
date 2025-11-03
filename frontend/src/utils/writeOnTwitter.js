const writeOnTwitter = ()=>{
    const tweetText = encodeURIComponent("#merapmrahul");
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterUrl, "_blank");
}

export default writeOnTwitter;