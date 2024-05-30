export const COLORS = {
  DarkMidnightBlue: "#003367 ",
  Silver: "#95A2A7",
};

export const FormValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: null,
  email: "",
  personalEmail: "",
  mobilePhone: "",
  startDate: null,
  absences: "",
  coreTeamMember: false,
  slackUsername: "",
  githubUsername: "",
};

export const LoginValues = {
  email: "demo@demo.com",
  code: "111111",
};

export const validateEmail = (value: string) => {
  if (!value) {
    return "Email is required";
  } else if (value !== LoginValues.email) {
    return "Invalid email address";
  }
};

export const validateCode = (value: string) => {
  if (!value) {
    return "Code is required";
  } else if (value.length !== 6) {
    return "Code must be 6 digits long";
  }
};
