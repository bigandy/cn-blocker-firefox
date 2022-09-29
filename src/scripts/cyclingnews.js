const removeLocalStorage = (key) => {
    if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
    }
};

removeLocalStorage("kiosq_article_seen_urls");