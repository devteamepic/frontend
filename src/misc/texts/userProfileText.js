const userProfileTextGenerator = (fullName, email) => {
   return [
     { component: 'text', size: 'small', textValue: 'Full name:', isHeader: true },
     { component: 'text', size: 'medium', textValue: fullName, isHeader: true },
     { },
     { component: 'text', size: 'small', textValue: 'Email:', isHeader: true },
     { component: 'text', size: 'medium', textValue: email, isHeader: true },
   ]
}

export const userProfileTexts = {
    userProfileTextGenerator
}
