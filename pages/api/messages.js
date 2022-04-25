export default async function messages(req, res) {
  const messages = {messages: ['test1', 'test2', 'test3']}
  try {
    // const result = someAsyncFunction()
    if (req.method === 'GET') {
      // res.status(200).json(messages)
      res.status(200).send(messages)
    } 
  } catch (err) {
    res.status(500).jason({error: 'Uh Oh!'})
  }
}