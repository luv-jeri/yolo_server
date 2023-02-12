module.exports = (fun) => {
  const to_return = async (req, res, next) => {
    fun(req, res, next).catch((error) => {
      next(error);
    });
  };
  return to_return;
};
