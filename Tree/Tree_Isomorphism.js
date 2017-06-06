function isIsomorphism(m, n) {
  if(!m && !n)
    return true;
  if(!m || !n)
    return false;
  if(m.value !== n.vaule)
    return false;
  return (
    (isIsomorphism(m.left, n.left) && isIsomorphism(m.right, n.right)) ||
    (isIsomorphism(m.left, n.right) && isIsomorphism(m.right, n.left))
  );
}
