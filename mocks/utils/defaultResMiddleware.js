const errorCenter = {
  400: '',
  401: '請先登入會員！',              // unauthorized errors
  403: '沒有權限!',
  404: '找不到頁面',
  500: '系統連線忙碌中，請稍後再試！',
}

const errorCode = {
  40001: '輸入參數錯誤!',             // api input error
  40002: '查無資料!',                 // DB error || no data
  40003: '修改失敗，請重新嘗試!',      // update error
  40004: '新增失敗!',                 // create error
  40005: '預算不足!'                  // budget not enough
}

const errorResponse = (res, errorStatus = 400, code, errorData) => {
  const defaultErrorMsg = errorCenter[errorStatus] ? errorCenter[errorStatus] : errorCode[code]
  const errorObj = {
    status: errorStatus,
    error: errorData || defaultErrorMsg
  }

  if(code) errorObj.code = code

  res.status(errorStatus).json(errorObj)
}

const defaultHandler = (req, res, data) => {
  const status = req.query.status
  const code = req.query.code

  if (!status || status == 200) {
    res.status(200).json(data.success)
    return
  }

  errorResponse(res, status, code, data.error)
}

module.exports = defaultHandler
