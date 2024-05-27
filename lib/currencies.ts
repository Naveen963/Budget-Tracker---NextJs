export const Currencies = [
    { value: "USD", label: "$ Dollar", locale: "en-US" },
    { "value": "INR", "label": "₹ Indian Rupee", "locale": "en-IN" },
    { value: "EUR", label: "€ Euro", locale: "de-DE" },
    { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
    { value: "GBP", label: "£ Pound", locale: "en-GB" },
    {value:""}
  ];
  
  export type Currency = (typeof Currencies)[0];