export enum Endpoints {
    getAllStatementsWithPolitician = "api/statements/with-politician",
    getAllPoliticians = "api/politicians",
    getAllArticles = "api/articles",
    getPoliticianByPoliticianId = `${getAllPoliticians}/politician-details?politicianId=`,
    getStatementsByPoliticianId = `${getAllPoliticians}/statements?pid=`,
    getStatementByStatementId = "api/statements/statement-id?sid=",
    getArticleById = `api/articles/article-details?articleId=`,
    getAllPoliticalParties = "api/parties",
    getPromises = `${getAllPoliticalParties}/promises?shortName=`,
    verifyPost = `api/facts/verify_post`,
    getUserAskedPosts = "api/facts",
    createPolitician = "api/politicians/create-politician"
}