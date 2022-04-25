export default function message(res, res) {
  const {messageid} = req.query;
  res.end(`Message id: ${messageid}`)
}