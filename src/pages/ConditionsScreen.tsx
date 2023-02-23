import ConditionTable from "@/Components/Tables/ConditionTable";

export default function ConditionsScreen() {
  const conditions = [
    {
      conditionId: 0,
      title: "Condition 1",
      description: "Test description",
      mediaId: 0,
      categoryId: 0,
      languageInitials: "EN",
    },
    {
      conditionId: 1,
      title: "Condition 2",
      description: "Test description 1",
      mediaId: 0,
      categoryId: 0,
      languageInitials: "EN",
    },
    {
      conditionId: 1,
      title: "Condition 2",
      description: "Test description 2",
      mediaId: 0,
      categoryId: 0,
      languageInitials: "EN",
    },
  ];

  return (
    <div className="conditionsContainer">
      <h1 className="titleText">Conditions</h1>
      <button className="btnAdd">Add</button>
      <ConditionTable conditions={conditions}/>
    </div>
  );
}
