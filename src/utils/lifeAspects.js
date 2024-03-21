export const lifeAspects = [
  { value: "work", title: "Work", icon: "mdi-briefcase" },
  { value: "home", title: "Home", icon: "mdi-home" },
  { value: "education", title: "Education", icon: "mdi-school" },
  {
    value: "relationships",
    title: "Relationships",
    icon: "mdi-account-multiple",
  },
  { value: "health", title: "Health", icon: "mdi-heart" },
];

export const getIconByValue = (value) =>
  lifeAspects.find((el) => el.value === value).icon;
