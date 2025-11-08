const writeOnTwitter = (tag='#merapmrahul')=>{
    const tweetText = encodeURIComponent(tag);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterUrl, "_blank");
}

export default writeOnTwitter;