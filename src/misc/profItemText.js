export const profItemPreviewTextGenerator = (fullName, university, degreeShort) => {
  return [
    { component: 'text', size: 'small', textValue: fullName, isHeader: true },
    { },
    { component: 'text', size: 'small', textValue: university, isHeader: true },
    { },
    { component: 'text', size: 'small', textValue: degreeShort, isHeader: true },
  ]
}

export const profItemFullTextGenerator = (email, article, degree) => {
  return [
    { component: 'text', size: 'small', textValue: 'Email:', isHeader: true },
    { component: 'text', size: 'small', textValue: email, isHeader: true },
    { },
    { component: 'text', size: 'small', textValue: 'Related article:', isHeader: true },
    { component: 'text', size: 'small', textValue: article, isHeader: true },
    { },
    { component: 'text', size: 'small', textValue: 'Full degree:', isHeader: true },
    { component: 'text', size: 'small', textValue: degree, isHeader: true },
  ]
}
