// 格式化字符串为 JSON 格式
export const parseJson = (str: string | null) => {
  if (!str) return null
  let obj = null
  try {
    obj = JSON.parse(str)
  } catch (error) {
    obj = null
  }
  return obj
}
