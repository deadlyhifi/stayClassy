const stayClassy = (fixed: string[], dynamic: { [key: string]: boolean }) => {
  return fixed
    .concat(Object.keys(dynamic).filter((key) => dynamic[key]))
    .join(" ");
};
export default stayClassy;
