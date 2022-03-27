export const selectArticle = (article) => {
    return {
        type: "ARTICLE_ADDED",
        payload: article
    }
};