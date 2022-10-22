export default function formatNumber(value) {
  if (value === null || value === undefined || value === "") return "";
  if (typeof value === "number") value.toString();
  let list = value.split(".");
  const prefix = list[0].charAt(0) === "-" ? "-" : "";
  let num = prefix ? list[0].slice(1) : list[0];
  let result = "";
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}.${
    list[1] ? formatEnd(list[1].slice(0, 2)) : "00"
  }`;
}

const formatEnd = (n) => {
  if (n.length === 0) return "00";
  if (n.length === 1) return n + "0";
  if (n.length === 2) return n;
  return n;
};
