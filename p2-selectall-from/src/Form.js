import React, { useEffect } from "react";
import "./style.css";

export default function Form() {
  const formdata = [
    {
      name: "select All",
      selected: false,
    },
    {
      name: "Kosher",
      selected: false,
    },
    {
      name: "No Celery (inc celeriac)",
      selected: false,
    },
    {
      name: "No Egg",
      selected: false,
    },
  ];

  const [formselections, setFormSelections] = React.useState(formdata);
  const [selectAllBtn, setSelectAllBtn] = React.useState();
  const [displayInfo, setDisplayInfo] = React.useState([]);

  function clear() {
    const updatedData = formselections.map((item, index) => {
      return { ...item, selected: false };
    });
    setFormSelections(updatedData);
  }
  //   //   check if all 3 items are check
  let checkstatus = formselections.slice(1);
  //   let result = checkstatus.every((item) => {
  //     return item.selected;
  //   });

  //   if (result) {
  //     setFormSelections(...formselections, (formselections[0].selected = true));
  //     // setFormSelections(
  //     //   formselections.map((item, index) =>
  //     //     index === 0 ? { ...item, selected: true } : item
  //     //   )
  //     // );
  //   }
  //   console.log(formselections);

  useEffect(() => {
    let info = "";
    formselections.forEach((item, index) => {
      if (item.selected === true) {
        info += item.name;
      }
    });
    setDisplayInfo(info);
  }, [formselections]);

  function handleClick(position) {
    const updatedData = formselections.map((item, index) => {
      if (position === 0) {
        if (item.selected === true) {
          return { ...item, selected: false };
        } else {
          return { ...item, selected: true };
        }
      }

      if (index === position) {
        return { ...item, selected: !item.selected };
      } else {
        return item;
      }
    });
    setFormSelections(updatedData);
  }

  return (
    <>
      <div>
        <p>Selected Value :{displayInfo}</p>
        <div className="flex">
          {formselections.map((element, index) => {
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  onChange={() => handleClick(index)}
                  checked={element.selected}
                />
                {element.name}
              </label>
            );
          })}
        </div>

        <button onClick={clear}>Clear All</button>
      </div>
    </>
  );
}
