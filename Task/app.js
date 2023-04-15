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

// Данные профилей:
// - идут в виде массива строк
// - каждая строка это профиль работника, вида:

// 	'Name: ..., salary: ..., pets: ...'

// ----

// Кого уволять:
// - всех у кого фамилия из черного списка
// - черный список формируете сами, взяв любых 3х человек на рандом
//   - если срандомится одна и та же фамилия или ее отсутсвие - так и оставляете(может так срандомить, что черный список будет пустым - это ok)
// - всех у кого есть хомяки в домашних животных
// - всех у кого зарплата в фунтах или евро

// ----

// Итог:
// - на странице должны быть плитки каждого сотрудника с названием полей(name, salary...) и их заполнением
// - уволеных метим красным тоном (и плитку и поля с данными, за которые решили уволить)
// - работа должна состоять из отдельных js модулей(файлов)

//   - модуль данных рабочих (там только константа с массивом)
//   - модуль преобразовывания массива данных рабочих в массив объектов с данными рабочих
//   - модуль составления черного списка
//   - модуль отмечающий людей для увольнения
//   - модуль рисования плиток
//   - главный модуль, запускающий функции всех остальных

// - в самом верху страницы должены быть выданы данные по сформированному ченому списку
// (модуль - это отдельный js файл)
