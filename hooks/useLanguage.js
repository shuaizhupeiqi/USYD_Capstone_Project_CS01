import { useEffect, useState , useCallback} from 'react'


export const useLanguage = (languageHelper, page, defaultValue) => {
  const [translation, setTranslation] = useState(defaultValue || {}) // Initialization, if an initial value is provided, use the initial value

  const loadTranslation = useCallback(async () => {
    try {
      let res = await languageHelper.translation(page); 
      
      setTranslation(res)
    } catch (err) {
      message.error('获取语言失败')
      console.log('err', err)
    }
  }, [languageHelper, page])

  useEffect(() => {
    loadTranslation()
  }, [])
  return translation
}