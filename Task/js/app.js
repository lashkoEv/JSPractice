//   - главный модуль, запускающий функции всех остальных

"use strict";

import { getBackList } from "./Components/BlackList/BlackList.js";
import { convertEmployees } from "./Components/ConvertEmployees/ConvertEmployees.js";
import { data } from "./Components/Data/Data.js";
import { markingForDismissal } from "./Components/MarkingForDismissal/MarkingForDismissal.js";

const app = () => {
  const convertedEmployees = convertEmployees(data);

  console.log("convertedEmployees", convertedEmployees);

  const { backList, surnames } = getBackList(convertedEmployees);

  console.log("blacklist", backList);
  console.log("surnames", surnames);

  markingForDismissal(convertedEmployees, backList);

  console.log("after marking for dismissal", convertedEmployees);
};

app();
