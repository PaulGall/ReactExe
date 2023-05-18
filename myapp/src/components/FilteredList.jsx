import { useMemo } from "react";

function FilteredList() {
  const usersData = [
    {
      id: 1,
      name: "Paolo",
      age: 25,
    },
    {
      id: 2,
      name: "Margot",
      age: 2,
    },
    {
      id: 3,
      name: "Alessandro",
      age: 28,
    },
    {
      id: 4,
      name: "Luca",
      age: 44,
    },
    {
      id: 5,
      name: "Anna",
      age: 20,
    },
    {
      id: 6,
      name: "Carmela",
      age: 76,
    },
  ];

  const memoAdult = useMemo(
    () => usersData.filter((item) => item.age >= 18),
    [usersData]
  );

  return (
    <>
      <ul>
        {memoAdult.map((element) => {
          return (
            <li>
              {element.name} - {element.age}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FilteredList;
