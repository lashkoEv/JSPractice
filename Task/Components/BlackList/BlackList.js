//   - модуль составления черного списка

// Кого увольнять:
// - всех у кого фамилия из черного списка
// - черный список формируете сами, взяв любых 3х человек на рандом
//   - если срандомится одна и та же фамилия или ее отсутсвие - так и оставляете(может так срандомить, что черный список будет пустым - это ok)
// - всех у кого есть хомяки в домашних животных
// - всех у кого зарплата в фунтах или евро

export const getBackList = (data) => {
  const surnames = getSurnames(data);

  const backList = [];

  data.forEach((employee) => {
    surnames.forEach((surname) => {
      if (employee.name.match(new RegExp(surname))) {
        backList.push(employee);
      }
    });

    const isHaveHamster =
      employee.pets.includes("hamster") && !backList.includes(employee);

    const isSalaryInEuroOrPound =
      (employee.salary.match(/\d+€/) || employee.salary.match(/\d+£/)) &&
      !backList.includes(employee);

    if (isHaveHamster) {
      backList.push(employee);
    }

    if (isSalaryInEuroOrPound) {
      backList.push(employee);
    }
  });

  return { backList, surnames };
};

const getSurnames = (data) => {
  const indexes = getIndexes(data.length);

  const surnames = [];

  const surnameRegExp = /\w+\s(\w+)/;

  indexes.forEach((index) => {
    if (data[index].name.match(surnameRegExp)) {
      surnames.push(data[index].name.match(surnameRegExp)[1]);
    }
  });

  return new Set(surnames);
};

const getIndexes = (max) => {
  const indexes = [];

  for (let i = 0; i < 3; i++) {
    indexes.push(getUniqueRandomInt(max, indexes));
  }

  return indexes;
};

const getUniqueRandomInt = (max, existing) => {
  const isUnique = false;

  while (!isUnique) {
    const number = Math.floor(Math.random() * max);

    if (!existing.includes(number)) {
      return number;
    }
  }
};
