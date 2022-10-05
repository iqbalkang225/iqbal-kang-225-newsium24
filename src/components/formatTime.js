const formatTime = (item = new Date()) => {

    const date = new Date(item.published_date.substr(0, 10))

    const month = date.toLocaleString("en-US", { month: "short" });

    const day = date.toLocaleString("en-US", { day: "2-digit" });
  
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`

}

export default formatTime