export const deleteArticle = (article) => {
    return {
        type: "ARTICLE_REMOVED",
        payload: article
    }
};