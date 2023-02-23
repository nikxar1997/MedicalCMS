import ArticleTable from "@/Components/Tables/ArticleTable";

export default function ArticlesScreen() {
  const articles = [
    {
      articleId: 0,
      title: "Article 0",
      description: "asfwef43f4",
      mediaId: 0,
      languageInitials: "EN",
      status: true,
      createdAt: "2022-09-27T10:30:00",
    },
    {
      articleId: 1,
      title: "Article 1",
      description: "asfwefdfwef43f4",
      mediaId: 0,
      languageInitials: "EN",
      status: false,
      createdAt: "2022-09-27T10:30:00",
    },
    {
      articleId: 2,
      title: "Article 2",
      description: "a34534sfwef43f4",
      mediaId: 0,
      languageInitials: "EN",
      status: true,
      createdAt: "2022-09-27T10:30:00",
    },
  ];
  return (
    <div className="articlesContainer">
      <h1 className="titleText">Articles</h1>
      <button className="btnAdd">Add</button>
      <ArticleTable articles={articles} />
    </div>
  );
}
