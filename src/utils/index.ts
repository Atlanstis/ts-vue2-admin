// 格式化字符串为 JSON 格式
export const parseJson = (
  str: string | null
): null | Record<string, unknown> => {
  if (!str) return null
  let obj = null
  try {
    obj = JSON.parse(str)
  } catch (error) {
    obj = null
  }
  return obj
}
