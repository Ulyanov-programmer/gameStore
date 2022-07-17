const someValidation = new JustValidate("#buy-form", {
  errorFieldCssClass: "invalid",
  errorLabelCssClass: "invalid",
  errorLabelStyle: {
    fontSize: "14px",
    color: "#fff"
  },
  errorsContainer: "#errors-container"
});
someValidation.addField(".recipient", [
  {
    rule: "minLength",
    value: 3,
    errorMessage: ""
  },
  {
    rule: "maxLength",
    value: 30,
    errorMessage: ""
  },
  {
    rule: "function",
    validator: (str) => {
      return /^[a-zA-Z() ]+$/.test(str);
    },
    required: true,
    errorMessage: "Please enter a name containing only letters."
  }
]).addField(".region", [
  {
    rule: "minLength",
    value: 3,
    errorMessage: ""
  },
  {
    rule: "maxLength",
    value: 30,
    errorMessage: ""
  },
  {
    rule: "function",
    validator: (str) => {
      return /^[a-zA-Z() ]+$/.test(str);
    },
    required: true,
    errorMessage: "Please enter a region containing only letters."
  }
]).addField(".phone", [
  {
    rule: "function",
    validator: (number) => {
      return Number(number) > 0;
    },
    required: true,
    errorMessage: "Please enter the correct phone number."
  }
]).addField(".mail-index", [
  {
    rule: "function",
    validator: (number) => {
      return Number(number) > 0;
    },
    required: true,
    errorMessage: "Please enter the correct phone number."
  }
]).addRequiredGroup("#sendType", "You have to choose the type of delivery.").addField(".card-number", [
  {
    rule: "function",
    validator: (number) => {
      return Number(number) > 0;
    },
    required: true,
    errorMessage: "Please enter the correct number."
  }
]).addField(".card-year", [
  {
    rule: "minLength",
    value: 4,
    errorMessage: ""
  },
  {
    rule: "maxLength",
    value: 4,
    errorMessage: ""
  },
  {
    rule: "function",
    validator: (number) => {
      return Number(number) > 0;
    },
    required: true,
    errorMessage: "Please enter the correct year."
  }
]).addField(".cvv", [
  {
    rule: "required",
    errorMessage: "Cvv is required!"
  },
  {
    rule: "minLength",
    value: 3,
    errorMessage: ""
  },
  {
    rule: "maxLength",
    value: 3,
    errorMessage: ""
  }
]).onSuccess((e) => {
});
