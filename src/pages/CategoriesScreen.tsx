import CategoryTable from "@/Components/Tables/CategoryTable";

export default function CategoriesScreen() {
  const categories = [
    { name: "category 1", description: "Category desc", mediaId: 0 },
    { name: "category 2", description: "Category desc", mediaId: 0 },
    { name: "category 3", description: "Category desc", mediaId: 0 },
  ];
  return (
    <div className="categoriesContainer">
      <div>Categories</div>
      <CategoryTable categories={categories} />
    </div>
  );
}
