import bcrypt from "bcryptjs";

export const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPw = await bcrypt.hash(pw, salt);
  return hashedPw;
};

export const comparePassword = async (pw, hashedPw) => {
  const isMatched = bcrypt.compare(pw, hashedPw);
  return isMatched;
};
